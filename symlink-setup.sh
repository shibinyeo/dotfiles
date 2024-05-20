#!/bin/bash

# Make sure script runs as non-root
if [ "$EUID" -eq 0 ]; then
    echo "This script must NOT be run as root"
    exit 1
fi

# Confirm every command before running
BLUE='\033[0;34m'
RESET='\033[0m'
function _trap_DEBUG() {
    echo -ne "${BLUE}\nCOMMAND:${RESET} $BASH_COMMAND \n${BLUE}(Enter)Run/(Q)uit: ${RESET}";
    read choice
    echo
    case "$choice" in
        q|Q) exit ;;
        *) ;;
    esac
}

trap "_trap_DEBUG" DEBUG

# Setup Symlinks for Shell Configs
ln -sfv ${HOME}/.dotfiles/.zshrc ${HOME}/.zshrc
sudo ln -sfv ${HOME}/.dotfiles/.bash_profile /root/.bash_profile
sudo ln -sfv ${HOME}/.dotfiles/.bashrc /root/.bashrc
sudo ln -sfv ${HOME}/.dotfiles/.bashrc ${HOME}/.bashrc

# Setup Symlinks for Git Config
ln -sfv ${HOME}/.dotfiles/.gitconfig ${HOME}/.gitconfig
sudo ln -sfv ${HOME}/.dotfiles/.gitconfig /root/.gitconfig
