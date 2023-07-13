#!/bin/bash

# ========== 0) PLANNING ==========
# If using Quartz: All notes need to be in a single folder for Quartz links to be able to click into each other

# Files to Publish:
# YES: Atlas, Cards, Extras (Generally)
# NO: Calender, Extras/Songs, Extras/Templates, Projects, Personal, Encounters, Excalidraw, Knowledge, Inbox, Home

# TEMP:
rm -rf ${HOME}/Obsidian-Publish

# ========== 1) MOVE FILES TO PUBLISH FOLDER ==========

mkdir -pv ${HOME}/Obsidian-Publish
cp -rv ${HOME}/OneDrive/Sunny\ Deck/+\ Atlas \
    ${HOME}/OneDrive/Sunny\ Deck/+\ Cards \
    ${HOME}/OneDrive/Sunny\ Deck/+\ Extras \
    ${HOME}/Obsidian-Publish/

rm -rfv ${HOME}/Obsidian-Publish/+\ Extras/Songs \
    ${HOME}/Obsidian-Publish/+\ Extras/Templates

rm -rfv ${HOME}/Obsidian-Publish/+\ Cards/*.canvas

# ========== 2A) DIGITAL GARDEN ==========
# ========== ADD DG-PUBLISH ==========

folder_path="${HOME}/Obsidian-Publish"

# a. for those with metadata already

for file in ${folder_path}/+\ Atlas/*; do
  if [[ -f $file && $(head -n 1 "$file") == '---' ]]; then

      # Add a new line into the metadata
      sed -i "2idg-publish: true" "$file"

  fi
done

for file in ${folder_path}/+\ Cards/*; do
  if [[ -f $file && $(head -n 1 "$file") == '---' ]]; then

      # Add a new line into the metadata
      sed -i "2idg-publish: true" "$file"

  fi
done

# b. for those without any metadata

for file in ${folder_path}/+\ Atlas/*; do
  if [[ -f $file && $(head -n 1 "$file") != '---' ]]; then

    # Add three lines at the start of the file
    { echo "---"; echo "dg-publish: true"; echo "---"; cat "$file"; } > temp && mv -v temp "$file"

  fi
done

for file in ${folder_path}/+\ Cards/*; do
  if [[ -f $file && $(head -n 1 "$file") != '---' ]]; then

    # Add three lines at the start of the file
    { echo "---"; echo "dg-publish: true"; echo "---"; cat "$file"; } > temp && mv -v temp "$file"

  fi
done

# ========== ADD DG-HOME ==========
sed -i "2idg-home: true" "${HOME}/Obsidian-Publish/+ Atlas/Technical Knowledge MOC.md"

# ========== MOVE OBSIDIAN SETTINGS TO DIRECTORY ==========
# Note: Settings are moved from the main vault
cp -rv "${HOME}/OneDrive/Archives/RHCE Exam/.obsidian" ${HOME}/Obsidian-Publish/
rm -rfv ${HOME}/Obsidian-Publish/.obsidian/workspace.json

# -------------------------------------------------------------------
# ========== 2B) QUARTZ ==========
# ========== COLLAPSE ALL FILES INTO 1 FOLDER ==========
# --- empty ---








