#!/bin/sh

# Agile env
export PATH=/home/scmtools/buildkit/node/node_6.9.1/bin:$PATH

echo "node:$(node -v)"
echo "npm:$(npm -v)"

CWD=$(pwd)

cd $CWD

echo "npm install"

# baidu npm registry is not in real time
npm install

export PATH=$CWD/node_modules/.bin/:$PATH

mkdir output

npm test >> ./output/test.log
