#!/bin/bash
# usage: validate-md-anchor-links.sh <md_file>
# inspired by https://github.com/tcort/markdown-link-check/issues/91#issuecomment-961137057

# set up failure handling
set -o errtrace
trap 'cleanup; echo ERROR: There was an error in ${FUNCNAME-main context}' ERR

MD_FILE=$1 # file path is first argument
TMP_FILE=$(mktemp) # create temp file to use as output of pandoc

function cleanup() {
    rm "$TMP_FILE" # delete temp file
}

# verify file exists
if [ ! -f "$MD_FILE" ]; then
    echo "file does not exist: '$MD_FILE'"
    exit 1
fi

# convert md to pdf using pandoc, catch anchor linking errors
BROKEN_ANCHOR_LINKS=$( \
    pandoc "$MD_FILE" --verbose --fail-if-warnings -o "$TMP_FILE".pdf 2>&1 \
    | grep -E 'pdfTeX warning \(dest\): name{[^}]+}' \
    | sed -E 's/.*name\{([^}]+)\}.*/\1/' \
    | sort \
    | uniq)

# if there are some broken links
if [ -n "$BROKEN_ANCHOR_LINKS" ]; then 
    echo "broken anchor links in '$MD_FILE':" 
    for LINK in $BROKEN_ANCHOR_LINKS; do
        echo "  #$LINK"
    done
    exit 1 # failure
else 
    echo "all anchor links are valid in '$MD_FILE'"
fi


cleanup