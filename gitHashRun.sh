#!/bin/bash

var=$(git rev-parse HEAD)
filename=$(date +'%m_%d_%Y_%H_%M').txt
destdir=$(pwd)/data/$filename

echo "$var" > "$destdir"

