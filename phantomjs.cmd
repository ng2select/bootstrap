@echo off
SET PATH=%~dp0;%PATH%
node "%~dp0node_modules/phantomjs-prebuilt/bin/phantomjs" %*
