#!/bin/bash
# usage: validate-md-anchor-links.sh <md_file>
# inspired by https://github.com/tcort/markdown-link-check/issues/91#issuecomment-961137057

# set up failure handling
set -o errtrace
trap 'cleanup; echo SCRIPT ERROR in ${FUNCNAME-main context}; exit 1;' ERR

MD_FILE=$1 # file path is first argument to this script

function init_tmp() {
    TMP_FILE=$(mktemp) # create temp file to use as output of parallel
}

function cleanup() {
    rm "$TMP_FILE" # delete temp file
}

function verify_file_exists() {
    # takes one argument as file path
    # verify file exists
    if [ ! -f "$1" ]; then
        echo "file does not exist: '$1'"
        exit 1
    fi
}

function test_broken_links() {
    # takes one argument as file path
    # convert md to pdf using pandoc, catch anchor linking errors
    BROKEN_ANCHOR_LINKS=$( \
        pandoc "$1" --verbose --fail-if-warnings -o "$TMP_FILE".pdf 2>&1 \
        | grep -E 'pdfTeX warning \(dest\): name{[^}]+}' \
        | sed -E 's/.*name\{([^}]+)\}.*/\1/' \
        | sort \
        | uniq)

    # if there are some broken links
    if [ -n "$BROKEN_ANCHOR_LINKS" ]; then 
        echo "broken anchor links in '$1':" 
        for LINK in $BROKEN_ANCHOR_LINKS; do
            echo "  #$LINK"
        done
        exit 1 # failure
    # else 
    #     echo "all anchor links are valid in '$1'"
    fi
}

init_tmp
verify_file_exists "$MD_FILE"
test_broken_links "$MD_FILE"
cleanup