#!/bin/bash
set -euxo pipefail

docker compose -f docker-compose.yml -f docker-compose.dev.yml logs "$@"
