#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'

# Enable unlimited history
HISTSIZE= HISTFILESIZE= 

# add new line and then make prompt red
export PS1="\n\e[0;31m[\u@\h \W]\$ \e[m"

# Aliases
alias  l='eza -lh  --icons=auto' # long list
alias ls='eza -1   --icons=auto' # short list
alias ll='eza -lha --icons=auto --sort=name --group-directories-first' # long list all
alias  v='nvim'
