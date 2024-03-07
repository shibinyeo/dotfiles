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
alias  l='eza -lhr -s modified  --icons=auto' # long list
alias ls='eza -1r -s modified  --icons=auto' # short list
alias ll='eza -lhar -s modified --icons=auto' # long list all
alias ld='eza -lhDr -s modified --icons=auto' # long list dirs
alias  vi='nvim'
#alias  v='fd --hidden --type f | fzf | xargs nvim'
v() {
    if [ -n "$1" ]; then
        root_dir="$1"
        shift
    else
        root_dir="."
    fi
    fd --hidden --type f . "$root_dir" | fzf | xargs nvim
}
alias  git-as='git add . && git status'

# Add functionality
source /usr/share/fzf/completion.bash
source /usr/share/fzf/key-bindings.bash
export FZF_ALT_C_COMMAND="find -L . -mindepth 1 \( -fstype 'sysfs' -o -fstype 'devfs' -o -fstype 'devtmpfs' -o -fstype 'proc' \) -prune  -o -type d -print 2> /dev/null | cut -b3-"
export FZF_ALT_C_OPTS="--preview 'tree -C {}'"

