#!/bin/sh
C_PWD=$(pwd)
DIRNAME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIRNAME

if ! [ -f "eagle.py" ];then
    wget http://fatcat.baidu.com/ota/download/eagle.py
fi

chmod +x eagle.py

cd $C_PWD

python $DIRNAME/eagle.py src -f
