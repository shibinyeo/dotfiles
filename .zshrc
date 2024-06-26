# Path to your oh-my-zsh installation.
ZSH=/usr/share/oh-my-zsh/

# Path to powerlevel10k theme
source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme

# List of plugins used
plugins=(git sudo zsh-256color zsh-autosuggestions zsh-syntax-highlighting)
source $ZSH/oh-my-zsh.sh
source /usr/share/fzf/completion.zsh
source /usr/share/fzf/key-bindings.zsh

# Print tree structure in the preview window
export FZF_ALT_C_COMMAND="find -L . -mindepth 1 \( -fstype 'sysfs' -o -fstype 'devfs' -o -fstype 'devtmpfs' -o -fstype 'proc' \) -prune  -o -type d -print 2> /dev/null | cut -b3-"
export FZF_ALT_C_OPTS="--preview 'tree -C {}'"

# In case a command is not found, try to find the package that has it
function command_not_found_handler {
    local purple='\e[1;35m' bright='\e[0;1m' green='\e[1;32m' reset='\e[0m'
    printf 'zsh: command not found: %s\n' "$1"
    local entries=( ${(f)"$(/usr/bin/pacman -F --machinereadable -- "/usr/bin/$1")"} )
    if (( ${#entries[@]} )) ; then
        printf "${bright}$1${reset} may be found in the following packages:\n"
        local pkg
        for entry in "${entries[@]}" ; do
            local fields=( ${(0)entry} )
            if [[ "$pkg" != "${fields[2]}" ]] ; then
                printf "${purple}%s/${bright}%s ${green}%s${reset}\n" "${fields[1]}" "${fields[2]}" "${fields[3]}"
            fi
            printf '    /%s\n' "${fields[4]}"
            pkg="${fields[2]}"
        done
    fi
    return 127
}

# Detect the AUR wrapper
if pacman -Qi yay &>/dev/null ; then
   aurhelper="yay"
elif pacman -Qi paru &>/dev/null ; then
   aurhelper="paru"
fi

function in {
    local pkg="$1"
    if pacman -Si "$pkg" &>/dev/null ; then
        sudo pacman -S "$pkg"
    else 
        "$aurhelper" -S "$pkg"
    fi
}

# Helpful aliases
alias   c='clear' # clear terminal
alias   l='eza -lhar -s modified  --icons=auto' # long list all
alias   o='xdg-open'
alias  ls='eza -1r -s modified  --icons=auto' # short list
alias  ll='eza -lhr -s modified --icons=auto' # long list
alias  ld='eza -lhDr -s modified --icons=auto' # long list dirs
alias  un='$aurhelper -Rns' # uninstall package
alias  up='$aurhelper -Syu' # update system/package/aur
alias  pl='$aurhelper -Qs' # list installed package
alias  pa='$aurhelper -Ss' # list availabe package
alias  pc='$aurhelper -Sc' # remove unused cache
alias  po='$aurhelper -Qtdq | $aurhelper -Rns -' # remove unused packages, also try > $aurhelper -Qqd | $aurhelper -Rsu --print -
alias  vc='code --ozone-platform-hint=wayland --disable-gpu' # gui code editor
alias  vi='nvim'
alias  rm='rm -rfv'
alias gas='git add . && git status'
alias cat='bat'
alias switch-monitor='mv ~/.config/hypr/hyprland.conf ~/.config/hypr/hyprland.conf.tmp && mv ~/.config/hypr/hyprland.conf.bak ~/.config/hypr/hyprland.conf && mv ~/.config/hypr/hyprland.conf.tmp ~/.config/hypr/hyprland.conf.bak'
alias vnc-on='sudo tailscale up && ~/Programs/vnc/wayvnc/build/wayvnc 0.0.0.0'

# Open a file with nvim after using fzf to search for it
v() {
    if [ -n "$1" ]; then
        root_dir="$1"
        shift
    else
        root_dir="."
    fi
    fd --hidden --type f . "$root_dir" | fzf | xargs nvim
}

# Handy change dir shortcuts
alias ..='cd ..'
alias ...='cd ../..'
alias .3='cd ../../..'
alias .4='cd ../../../..'
alias .5='cd ../../../../..'

# Always mkdir a path (this doesn't inhibit functionality to make a single dir)
alias mkdir='mkdir -p'

# Fixes "Error opening terminal: xterm-kitty" when using the default kitty term to open some programs through ssh
alias ssh='kitten ssh'

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

#Display Pokemon
#pokemon-colorscripts --no-title -r 1,3,6

# History
HISTSIZE=100000
HISTDUP=erase
setopt appendhistory
setopt sharehistory
setopt hist_ignore_all_dups
setopt hist_save_no_dups
setopt hist_ignore_dups
setopt hist_find_no_dups
