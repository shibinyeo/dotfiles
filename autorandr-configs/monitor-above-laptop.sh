#!/bin/bash

# Monitor-above-Laptop Config
autorandr --load HDMI-above-Laptop || \
xrandr --output DP-1 --mode 2560x1440 --rate 60 --primary --above eDP-1 \
    --output eDP-1 --mode 1920x1080 --rate 60 || \
xrandr --output DP-2 --mode 2560x1440 --rate 60 --primary --above eDP-1 \
    --output eDP-1 --mode 1920x1080 --rate 60 || \
xrandr --output DP-3 --mode 2560x1440 --rate 60 --primary --above eDP-1 \
    --output eDP-1 --mode 1920x1080 --rate 60 || \
xrandr --output DP-4 --mode 2560x1440 --rate 60 --primary --above eDP-1 \
    --output eDP-1 --mode 1920x1080 --rate 60

