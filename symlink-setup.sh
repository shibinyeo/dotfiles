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
sudo ln -sfv ${HOME}/.dotfiles/lock.service /etc/systemd/system/lock.service

rm -rf ${HOME}/OneDrive/publish-sunny-deck.sh
ln -sfv ${HOME}/.dotfiles/publish-sunny-deck.sh ${HOME}/OneDrive/publish-sunny-deck.sh 
