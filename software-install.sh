#!/bin/bash

# Official Repositories
sudo pacman -S caffeine-ng tigervnc flameshot neovim obsidian virt-manager autorandr bash-completion base-devel telegram-desktop obs-studio libreoffice-still screen neofetch xdotool zoom tree python python-pip xdo \
--needed

# Install paru (use "rust")
cd ${HOME}/Downloads
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
cd ${HOME}/Downloads
rm -rf paru

# AUR
paru -S microsoft-edge-beta-bin onedrive-abraunegg spotify-adblock --needed
