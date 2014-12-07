#!/bin/bash

# Go to root directory
cd $( dirname ${BASH_SOURCE[0]} )
cd ..
DIR=$( pwd )

# Update the code
git pull origin master

# Setup frontend
cd frontend
npm install

