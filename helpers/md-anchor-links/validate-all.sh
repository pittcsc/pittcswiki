#!/bin/bash

# set up failure handling
set -o errtrace
trap 'cleanup; echo ERROR: There was an error in ${FUNCNAME-main context}' ERR

VALIDATE_SCRIPT="helpers/md-anchor-links/validate-md-anchor-links.sh"
MD_DIR="src/guides"

# find all markdown files
MD_FILES="$(find \
    $MD_DIR \
    -iname "*.md*" \
    -exec echo {} \;)"

# execute in parallel
parallel "$VALIDATE_SCRIPT {}" ::: "$MD_FILES"