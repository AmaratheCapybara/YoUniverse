FROM nginx:alpine

RUN apk update && apk add --no-cache openssl
RUN mkdir -p /etc/ssl/certs /etc/ssl/private

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/app.conf /etc/nginx/conf.d/app.conf

# TODO: Put real domain name
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/selfsigned.key \
    -out /etc/ssl/certs/selfsigned.crt \
    -subj "/CN=api-dev.plural.com" \
    -addext "subjectAltName=DNS:api-dev.plural.com"

RUN chmod 644 /etc/ssl/certs/selfsigned.crt
RUN chmod 600 /etc/ssl/private/selfsigned.key

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]