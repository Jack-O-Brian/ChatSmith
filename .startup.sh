#!/bin/sh

cd /home/zaki/Projects/Programm/ChatSmith/
session="Server"

tmux new-session -d -s $session
tmux new-window -t $session:0 -n Backend "(npm run server && zsh) || zsh"
tmux split-window -h -c "#{pane_current_path}"  -t $session:0 "( npm run client && zsh) || zsh"
session="Client"

cd client
tmux new-session -d -s $session

urxvtq -e tmux attach -t Server
urxvtq -e tmux attach -t Client

