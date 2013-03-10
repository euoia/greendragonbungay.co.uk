#!/bin/bash

# Config -----------------
REMOTE_BASE="/var/www/james/greendragonbungay.co.uk/dev/"

# Script  ----------------
RSYNC_FLAGS_UP="-i --compress --recursive --links --update --exclude '*.swp' --exclude '*.swo' --exclude original-assets"
RSYNC_FLAGS_DOWN="-i --recursive --copy-links --update --exclude '*.swp' --exclude '*.swo' --exclude CVS"

THIS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PRJ_NAME=$(basename $THIS_DIR)
cd $THIS_DIR

# Upload changes.
rsync $RSYNC_FLAGS_UP $THIS_DIR/ aioue:$REMOTE_BASE
