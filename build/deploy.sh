#!/bin/bash

# Go to root directory
cd $( dirname ${BASH_SOURCE[0]} )
cd ..
DIR=$( pwd )

# Update the code
git pull origin master

# Setup frontend
cd $DIR
cd frontend
npm install

# Setup backend
cd $DIR
php artisan migrate
composer update

