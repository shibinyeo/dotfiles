#!/bin/bash
# To be run as the non-root user

ln -sfv ${HOME}/.dotfiles/.zshrc ${HOME}/.zshrc
sudo ln -sfv ${HOME}/.dotfiles/.bash_profile /root/.bash_profile
sudo ln -sfv ${HOME}/.dotfiles/.bashrc /root/.bashrc

ln -sfv ${HOME}/.dotfiles/.gitconfig ${HOME}/.gitconfig
sudo ln -sfv ${HOME}/.dotfiles/.gitconfig /root/.gitconfig
