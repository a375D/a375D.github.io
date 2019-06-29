#!/bin/bash

git add .

git commit -m "$1"

git pull front master

git push front master
