#!/usr/bin/make

.DEFAULT_GOAL := help

help:  ## Display all commands
	@echo "Help"
	@echo "Available commands:"
	@echo "make init: Start a new develop environment"
	@echo "make up: Start containers detached"
	@echo "make down: Stop containers"
	@echo "make purge: Stop and remove containers and volumes"
	@echo "make logs: Show the output logs"
	@echo "make log: Open the logs and follow the news"
	@echo "make restart: Restart the app container"
	@echo "make build: Rebuild the app container"
	@echo "make ps: List containers"
	@echo "make bash: Start nginx bash"
	@echo "make nginx: Start nginx bash"
	@echo "make mysql: Start mysql bash"
	@echo "make node: Start node sh"
	@echo "make migration: Create migration file"
	@echo "make migrate: Perform migrations"
	@echo "make fresh: Perform fresh migrations"
	@echo "make rollback: Rollback migration"
	@echo "make install: Install dependencies"
	@echo "make autoload: Generate autoload"
	@echo "make queue: Start queue"
	@echo "make permissions: Grant permissions to storage"
	@echo "make link: Create symbolic link to storage"

##@ Initialize work

init: ## Start a new develop environment
	$(MAKE) up
	$(MAKE) install
	$(MAKE) keys
	$(MAKE) fresh
	$(MAKE) permissions

keys: ## Generate secret keys
	docker exec -it todo-nginx php artisan key:generate

##@ Docker actions

up: ## Start containers detached
	docker-compose -f docker-compose.yml up -d

down: ## Stop containers
	docker-compose -f docker-compose.yml down

purge: ## Stop containers and remove volumes
	docker-compose -f docker-compose.yml down -v

build: ## Build containers
	docker-compose -f docker-compose.yml up -d --build

logs: ## Show the output logs
	docker-compose -f docker-compose.yml logs

log: ## Open the logs and follow the news
	docker-compose logs --follow

restart: ## Restart the app container
	docker-compose restart todo-nginx

ps: ## List containers
	docker-compose -f docker-compose.yml ps

##@ Bash controls

bash: ## Start nginx bash
	docker exec -it todo-nginx bash

nginx: ## Start nginx bash
	docker exec -it todo-nginx bash

mysql: ## Start mysql bash
	docker exec -it todo-mysql bash

node: ## Start mysql bash
	docker exec -it todo-node sh

##@ Database tools

migration: ## Create migration file
	docker exec -it todo-nginx php artisan make:migration $(name)

migrate: ## Perform migrations
	docker exec -it todo-nginx php artisan migrate

fresh: ## Perform fresh migrations
	docker exec -it todo-nginx php artisan migrate:fresh

rollback: ## Rollback migration
	docker exec -it todo-nginx php artisan migrate:rollback

##@ Composer

install: ## Composer install dependencies
	docker exec -it todo-nginx composer install

autoload: ## Run the composer dump
	docker exec -it todo-nginx composer dump-autoload

##@ Queue

queue: ## Listen queue
	docker exec -it todo-nginx php artisan queue:listen

##@ Permissions

permissions: ## Set permissions
	docker exec -it todo-nginx chmod -R 777 storage

##@ Storage Link

link: ## Set permissions
	docker exec -it todo-nginx php artisan storage:link

##@ Eloquent

model: ## Create model
	docker exec -it todo-nginx php artisan make:model $(name)

controller: ## Create controller
	docker exec -it todo-nginx php artisan make:controller $(name)

request: ## Create request
	docker exec -it todo-nginx php artisan make:request $(name)

