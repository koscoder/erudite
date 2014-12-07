#!/bin/bash

# Go to root directory
cd $( dirname ${BASH_SOURCE[0]} )
DIR=$( pwd )
DEPLOY="${DIR}/server.sh"

ssh koscoder@koscoder.koding.io 'bash -s' < $DEPLOY
