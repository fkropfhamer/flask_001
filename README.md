# Flask-App

## Requirements:
### development:
- Python3
- Flask
### production:
- Docker
- docker-compose

## Description: 
basic Flask app with setup for docker with docker-compose. It uses for production gunicorn with nginx as a reverse proxy. nginx also serves static files (js/css) in `app/static`.

## Scripts:
### development:
- set/export FLASK_APP=main.py
- `flask run`
### production:
- docker-compose up

