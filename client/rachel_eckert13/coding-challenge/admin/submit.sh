#!/usr/bin/env bash
unused_expected_end_time=$(curl -s 'https://api.byteboard.dev/interview/m2ExpectedEndTime/prjXiIBGA7QXo2G3XFoX' | jq -r '.m2ExpectedEndTimeSec')
gsutil -m -o "GSUtil:parallel_process_count=1" rsync -d -r -x '.*/(node_modules|dist)/.*' ~/coding-challenge/ gs://83d1d96a-4d6b-48f1-b0ba-f2f6d23269fc
if [ "$?" = "0" ]; then
curl --silent 'https://api.byteboard.dev/interview/m2EndTime' -H 'Content-Type: application/json' --data-binary '{"atsId":"prjXiIBGA7QXo2G3XFoX"}' --compressed > /dev/null
echo "Your code was successfully submitted and the coding challenge has been deleted from your directory!"
   rm -r ~/coding-challenge
    tmux set status off
    pkill -f admin.sh
else
    echo "There seemed to be an issue submitting your code. Please try one more time by running sh ~/coding-challenge/admin/submit.sh"
    echo "If this issue persists, please export your code, upload it to Google Drive, and share it with support@byteboard.dev. Please also take a screenshot of the error message and email it to support@byteboard.dev."
    exit 1
fi
