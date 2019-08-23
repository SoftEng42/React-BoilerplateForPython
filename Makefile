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

test/client:
	cd client && yarn test:coverage --watchAll=false

lint/api:
	docker-compose run api pylint arrago

lint/client:
	docker-compose run client yarn lint

format/python:
	docker-compose exec api black arrago --exclude arrago/api/migrations

test/ci:
	make lint/api
	make test/api 
	cd client && yarn test:coverage --watchAll=false --ci
