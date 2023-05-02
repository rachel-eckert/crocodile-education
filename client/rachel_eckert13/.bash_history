mkdir ~/editor_walkthrough && gsutil cp -r gs://byteboard-testers/js/* ~/editor_walkthrough && cloudshell ws ~
cd ~/editor_walkthrough && sh run_hello.sh
mkdir ~/coding-challenge && gsutil cp -r gs://83d1d96a-4d6b-48f1-b0ba-f2f6d23269fc/* ~/coding-challenge && sh ~/coding-challenge/admin/start_interview.sh && cloudshell ws ~
cd ~/coding-challenge/code
sh run_volunteer.sh
