#!/bin/bash
# To be run as the non-root user

rm -rf ${HOME}/.config/autorandr
ln -sfv ${HOME}/.dotfiles/autorandr-configs/autorandr ${HOME}/.config/autorandr

#rm -rf ${HOME}/.config/awesome
#ln -sfv ${HOME}/.dotfiles/awesome ${HOME}/.config

ln -sfv ${HOME}/.dotfiles/.zshrc ${HOME}/.zshrc
sudo ln -sfv ${HOME}/.dotfiles/.zshrc /root/.zshrc
sudo chsh -s /bin/zsh root

ln -sfv ${HOME}/.dotfiles/.gitconfig ${HOME}/.gitconfig
sudo ln -sfv ${HOME}/.dotfiles/.gitconfig /root/.gitconfig

sudo ln -sfv ${HOME}/.dotfiles/onedrive.service /etc/systemd/system/onedrive.service

rm -rf ${HOME}/.config/bspwm
ln -sfv ${HOME}/.dotfiles/bspwm ${HOME}/.config
