#!/bin/bash

# set up failure handling
set -o errtrace
trap 'cleanup; print_error ${FUNCNAME-main context}; exit 1;' ERR

VALIDATE_SCRIPT="helpers/md-anchor-links/validate-md-anchor-links.sh"
MD_DIR="src/guides"

function init_tmp() {
    TMP_FILE=$(mktemp) # create temp file to use as output of parallel
}

function cleanup() {
    rm "$TMP_FILE" # delete temp file
}

function find_all_md() {
    # find all markdown files
    MD_FILES="$(find \
        $MD_DIR \
        -iname "*.md*" \
        -exec echo {} \;)"
}

function run_tests() {
    echo "running tests..."
    # execute script on files in parallel
    # any failures (non-zero return values) will be caught by our trap 
    # that we set up in the beginning, though after the `parallel` command finishes
    parallel "$VALIDATE_SCRIPT {}" ::: "$MD_FILES"

    echo "TESTS PASS" # only executed if trap not triggered
}

function print_error() {
    SOURCE=$1 # first argument to this function

    # if error was in run_tests
    if [[ "$SOURCE" == "run_tests" ]]; then 
        echo "TEST FAILURE" # assume it was a test that didn't pass
    else
        echo "SCRIPT ERROR in $SOURCE" # else assume it was a script error
    fi
}

init_tmp
find_all_md
run_tests
cleanup