#!/bin/sh

declare -i j=0

while [ $j != 10 ]
do
        mknod --m=777 lp$j c 18 $j
        j=$j+1
done
