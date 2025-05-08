# Builder Stage
FROM node:22-slim AS builder

USER root

RUN apt-get update --allow-releaseinfo-change && apt-get install -y \
    git \
    sudo \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

RUN addgroup --system appuser && \
    adduser --system --ingroup appuser --home /home/appuser appuser && \
    mkdir -p /usr/src/app/node_modules /usr/src/app/dist && \
    chown -R appuser:appuser /home/appuser /usr/src/app

ENV HOME=/home/appuser
ENV COREPACK_HOME=/home/appuser/.cache/corepack

RUN mkdir -p $COREPACK_HOME && \
    corepack enable && \
    corepack prepare yarn@4.7.0 --activate

RUN chown -R appuser:appuser $COREPACK_HOME

USER appuser

COPY --chown=appuser:appuser .yarn .yarn
COPY --chown=appuser:appuser .yarnrc.yml ./

COPY --chown=appuser:appuser package.json yarn.lock ./
RUN yarn cache clean && yarn install --mode=skip-build

COPY --chown=appuser:appuser tsconfig*.json ./
COPY --chown=appuser:appuser jest.config.js ./
COPY --chown=appuser:appuser src ./src
COPY --chown=appuser:appuser nest-cli.json ./
COPY --chown=appuser:appuser .swcrc ./
COPY --chown=appuser:appuser ./scripts/wait.sh /
COPY --chown=appuser:appuser ./scripts/build.sh /

RUN chmod +x /wait.sh /build.sh
#RUN /build.sh && ls -al /usr/src/app/dist
RUN echo "======================" && \
    echo "🚀 Starting build script..." && \
    echo "======================" && \
    /build.sh || { echo "❌ Build script failed! Dumping current directory contents:"; ls -al /usr/src/app; exit 1; } && \
    echo "======================" && \
    echo "📂 Listing build output directory contents:" && \
    ls -al /usr/src/app/dist || { echo "⚠️ dist folder does not exist after build!"; exit 1; }

# Runtime Stage
FROM node:22-slim AS runtime
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    bash \
    git \
    netcat-openbsd \
    coreutils \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN addgroup --system appuser && \
    adduser --system --ingroup appuser --home /home/appuser appuser

RUN chown -R appuser:appuser /usr/src/app && ls -la /usr/src/app

RUN corepack enable && corepack prepare yarn@4.7.0 --activate
RUN mkdir -p /usr/src/app/.yarn && chown -R appuser:appuser /usr/src/app/.yarn && chmod -R 777 /usr/src/app/.yarn

USER appuser

# Copy build artifacts from builder
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.yarn ./.yarn
COPY --from=builder /usr/src/app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/yarn.lock ./yarn.lock
COPY --from=builder /wait.sh /wait.sh

RUN chmod -R 777 /usr/src/app/.yarn

ARG NODE_ENV=prod
ENV NODE_ENV=$NODE_ENV

CMD ["node", "dist/main.js"]
