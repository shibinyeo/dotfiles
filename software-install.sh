#!/bin/bash

# Official Repositories
sudo pacman -S caffeine-ng tigervnc flameshot neovim obsidian virt-manager autorandr bash-completion base-devel telegram-desktop obs-studio libreoffice-still --needed

# Install paru (use "rust")
cd ${HOME}/Downloads
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
