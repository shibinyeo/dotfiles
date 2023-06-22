#!/bin/bash

# To be run as the non-root user
rm -rf ${HOME}/.config/autorandr
#rm -rf ${HOME}/.config/awesome
ln -sfv ${HOME}/.dotfiles/autorandr ${HOME}/.config/autorandr
#ln -sfv ${HOME}/.dotfiles/awesome ${HOME}/.config/awesome
ln -sfv ${HOME}/.dotfiles/.zshrc ${HOME}/.zshrc
ln -sfv ${HOME}/.dotfiles/.gitconfig ${HOME}/.gitconfig
