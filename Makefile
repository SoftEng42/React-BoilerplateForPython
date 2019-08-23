start:
	# Start the application in docker-compose
	docker-compose up -d --build
	$(MAKE) migrate

logs:
	docker-compose logs -f

migrate:
	# run all Django migrations
	docker-compose run api python manage.py migrate

test/api:
	docker-compose run api python manage.py test

lint/api:
	docker-compose run api pylint arrago

format/python:
	docker-compose exec api black arrago --exclude arrago/api/migrations

test/ci:
	make lint/api
	make test/api 