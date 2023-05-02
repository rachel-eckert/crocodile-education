#!/bin/bash
expected_end_time=$(curl -s 'https://api.byteboard.dev/interview/m2ExpectedEndTime/prjXiIBGA7QXo2G3XFoX' | jq -r '.m2ExpectedEndTimeSec')
rest_interval=60
while [ "$expected_end_time" -eq "0" ]; do
    sleep 5
    expected_end_time=$(curl -s 'https://api.byteboard.dev/interview/m2ExpectedEndTime/prjXiIBGA7QXo2G3XFoX' | jq -r '.m2ExpectedEndTimeSec')
done
curr_date=`date +%s`
while [ "$expected_end_time" -ge "$curr_date" ]; do
   sleep $rest_interval
   expected_end_time=$(curl -s 'https://api.byteboard.dev/interview/m2ExpectedEndTime/prjXiIBGA7QXo2G3XFoX' | jq -r '.m2ExpectedEndTimeSec')
   curr_date=`date +%s`
   if [ $(( $expected_end_time -  $curr_date )) -le 60 ]; then
      if [ $rest_interval -ne 1 ]; then
          expected_end_time=$(curl -s 'https://api.byteboard.dev/interview/m2ExpectedEndTime/prjXiIBGA7QXo2G3XFoX' | jq -r '.m2ExpectedEndTimeSec')
          rest_interval=1
      fi
   fi
done
sleep 5
sh ~/coding-challenge/admin/submit.sh