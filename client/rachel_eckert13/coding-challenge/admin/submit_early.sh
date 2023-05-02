#!/usr/bin/env bash
echo
expected_end_time=$(curl -s 'https://api.byteboard.dev/interview/m2ExpectedEndTime/prjXiIBGA7QXo2G3XFoX' | jq -r '.m2ExpectedEndTimeSec')
curr_date=`date +%s`
if [ $(( $expected_end_time - $curr_date )) -le 5 ]; then
   if [ $(( $expected_end_time - $curr_date )) -le -10 ]; then
      sh ~/coding-challenge/admin/submit.sh
   else
      echo "Early submission is no longer permitted. Your code will auto submit in the next 5 seconds."
   fi
else
   echo "Submitting your code early will end your interview."
   read -p "Are you sure you are ready to submit? (y/n) " -n 1 -r reply
   if [[ $reply =~ ^[Yy]$ ]]; then
      sh ~/coding-challenge/admin/submit.sh
   else
      echo
      echo "Exiting submit script. Your code has not been submitted and you can continue working."
   fi
fi