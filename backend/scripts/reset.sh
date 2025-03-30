#!/bin/bash
set -euxo pipefail

docker compose -f docker-compose.yml -f docker-compose.dev.yml down --remove-orphans

docker stop $(docker ps -aq) || true

docker rm $(docker ps -aq) || true

docker system prune -a --volumes -f

docker builder prune -a -f
