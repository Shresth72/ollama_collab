start_db:
	docker-compose up -d

stop_db:
	docker-compose down

start_all_db:
	cd user && docker-compose up -d
	cd workspaces && docker-compose up -d

stop_all_db:
	cd user && docker-compose down
	cd workspaces && docker-compose down

user_db:
	cd user && npm run migrate && npm run push

workspace_db:
	cd workspaces && npm run migrate && npm run push

push_all_db:
	cd user && npm run migrate && npm run push
	cd workspaces && npm run migrate && npm run push

.PHONY: start_db stop_db user_push