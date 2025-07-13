#!/bin/bash

CONFIG_FILE=_config.yml

echo "Entry point script running"

# Function to manage Gemfile.lock for ARM architecture
manage_gemfile_lock() {
    git config --global --add safe.directory '*'
    if [ -f Gemfile.lock ]; then
        echo "Removing existing Gemfile.lock to regenerate for current architecture"
        rm Gemfile.lock
        echo "Regenerating Gemfile.lock with bundle install"
        bundle install
    else
        echo "No Gemfile.lock found, running bundle install"
        bundle install
    fi
}

start_jekyll() {
    manage_gemfile_lock
    bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling &
}

start_jekyll

while true; do
    inotifywait -q -e modify,move,create,delete $CONFIG_FILE
    if [ $? -eq 0 ]; then
        echo "Change detected to $CONFIG_FILE, restarting Jekyll"
        jekyll_pid=$(pgrep -f jekyll)
        kill -KILL $jekyll_pid
        start_jekyll
    fi
done