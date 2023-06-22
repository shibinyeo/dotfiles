#!/bin/bash

# Official Repositories
sudo pacman -Sy caffeine-ng tigervnc flameshot neovim obsidian virt-manager autorandr bash-completion base-devel telegram-desktop obs-studio libreoffice-still --needed

# Download paru
cd ${HOME}/Downloads
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si

# AUR
paru -Sy microsoft-edge-beta-bin --needed
