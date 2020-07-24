#!/usr/bin/env bash

set -ex

LAST_PUBLISHED_TAG=$(awk -F\" '/"version":/ {print $4}' ./packages/freight-trust/package.json)


git checkout master
git pull origin master
git checkout develop
git pull origin develop

yarn bootstrap

## Get output of changes for release notes
prs-merged-since --repo freight-trust/carbon --tag v$LAST_PUBLISHED_TAG --format markdown
lerna changed