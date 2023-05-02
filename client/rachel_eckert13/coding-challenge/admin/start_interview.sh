#!/bin/bash
if ! grep -q "editor.enablePreview" ~/.theia/settings.json; then
  sed -i '1 s/{/{\n "editor.enablePreview": false,/' ~/.theia/settings.json
else
  sed -i 's/"editor.enablePreview": true/"editor.enablePreview": false/' ~/.theia/settings.json
fi
echo '{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/coding-challenge/code/runner.js",
      "cwd": "${workspaceFolder}/coding-challenge/code"
    }
  ]
}' > ~/.theia/launch.json
curl --silent 'https://api.byteboard.dev/interview/m2OpenTime' -H 'Content-Type: application/json' --data-binary '{"atsId":"prjXiIBGA7QXo2G3XFoX"}' --compressed > /dev/null
sh ~/coding-challenge/admin/admin.sh &