start_db:
	docker-compose up -d

stop_db:
	docker-compose down

user_db:
	cd user && npm run migrate && npm run push

.PHONY: start_db stop_db db_push