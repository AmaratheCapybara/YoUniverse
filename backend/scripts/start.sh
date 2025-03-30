#!/bin/bash
set -euxo pipefail

CONFIG=${1:-dev}

if [ "$CONFIG" == "prod" ]; then
  COMPOSE_FILE="docker-compose.prod.yml"
else
  COMPOSE_FILE="docker-compose.dev.yml"
fi

echo "Using configuration: $COMPOSE_FILE"

docker compose -f docker-compose.yml -f "$COMPOSE_FILE" down --remove-orphans

docker compose -f docker-compose.yml -f "$COMPOSE_FILE" build #--no-cache #--progress plain

docker compose -f docker-compose.yml -f "$COMPOSE_FILE" --project-name=plural up --force-recreate --detach --wait
