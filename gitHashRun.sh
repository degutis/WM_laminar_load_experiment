#!/bin/bash

var=$(git rev-parse HEAD)
filename=$(date +'%Y%m%dT%H%M').txt
destdir=$(pwd)/data/$filename

echo "$var" > "$destdir"

