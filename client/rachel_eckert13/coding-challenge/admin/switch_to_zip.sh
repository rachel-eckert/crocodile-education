#!/usr/bin/env bash
gsutil -m rsync -d -r -x '.*/(node_modules|dist)/.*' ~/coding-challenge/ gs://83d1d96a-4d6b-48f1-b0ba-f2f6d23269fc
if [ "$?" = "0" ]; then
  echo "You are being switched to the zip experience, please wait."
  rm -r ~/coding-challenge
  tmux set status off
  pkill -f admin.sh
  curl --silent 'https://api.byteboard.dev/interview/update/prjXiIBGA7QXo2G3XFoX' -H 'Content-Type: application/json' --data-binary '{"updates":{"m2Type":"zip"}}' --compressed > /dev/null
else
  echo "There seemed to be an issue switching you to the zip experience. Please try one more time. If it happens again please reach out to us at support@byteboard.dev."
  exit 1
fi
