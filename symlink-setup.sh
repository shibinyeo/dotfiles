#!/bin/bash
# To be run as the non-root user

ln -sfv ${HOME}/.dotfiles/.zshrc ${HOME}/.zshrc
sudo ln -sfv ${HOME}/.dotfiles/.zshrc-root /root/.zshrc
sudo chsh -s /bin/zsh root

ln -sfv ${HOME}/.dotfiles/.gitconfig ${HOME}/.gitconfig
sudo ln -sfv ${HOME}/.dotfiles/.gitconfig /root/.gitconfig
