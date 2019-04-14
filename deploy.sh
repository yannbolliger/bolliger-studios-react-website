#! /usr/#!/usr/bin/env bash
set -eo pipefail

npm run export

export $(cat .env | xargs) && scp -r out/* $DEPLOY_HOST

rm -rf out
