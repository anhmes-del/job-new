up:
	docker-compose up -d --build

down:
	docker-compose down

migrate:
	docker-compose exec backend alembic upgrade head

shell-backend:
	docker-compose exec backend bash

shell-frontend:
	docker-compose exec frontend sh

logs:
	docker-compose logs -f

install: up migrate
	@echo "CAREEROS PRO is running at http://localhost"