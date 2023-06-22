#!/bin/bash

# Official Repositories
# Neglected (pipewire)
sudo pacman -S caffeine-ng tigervnc flameshot neovim obsidian virt-manager autorandr bash-completion base-devel telegram-desktop obs-studio libreoffice-still \
wezterm rofi acpi acpid acpi_call upower lxappearance-gtk3 \
jq inotify-tools polkit-gnome xdotool xclip gpick ffmpeg blueman redshift \
pipewire-alsa pipewire-pulse alsa-utils brightnessctl feh maim --needed

# Download paru (use "rust")
cd ${HOME}/Downloads
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si

# AUR
paru -S microsoft-edge-beta-bin awesome-git --needed

# Install yoru
git clone --depth 1 --recurse-submodules https://github.com/rxyhn/yoru.git
cd yoru && git submodule update --remote --merge
cp -r config/* ~/.config/
mkdir -pv ~/.fonts/
cp -r misc/fonts/* ~/.fonts/
fc-cache -fv
