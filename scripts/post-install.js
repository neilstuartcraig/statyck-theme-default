#!//usr/local/bin/node

/* 
Post-install script for statyck-theme-default

This script is run after npm install statyck-theme-default or yarn add statyck-theme-default and will:

1. Create a dir in . named "config" (if it doesn't already exist - it should have been created by installing statyck)
2. Copies the local (to this package) config/theme-config.json to the above "config" dir
*/

// Core deps
import path from "path";

// 3rd party deps
import fse from "fs-extra";

// Config
const blogDir = process.cwd();
const configDirName = "config";
const configFilename = "theme-config.json";

const configSrcFilename = path.join(__dirname, configDirName, configFilename);

const configDestDirName = path.join(blogDir, configDirName);
const configDestFilename = path.join(configDestDirName, configFilename);

fse.ensureDir(configDestDir, (EDErr) => 
{
    if(EDErr)
    {
        throw EDErr;
    }

    const copyOptions = 
    {
        overwrite: false,
        errorOnExist: true
    };

    fse.copy(configSrcFilename, configDestFilename, (CErr) => 
    {
        if(CErr)
        {
            throw CErr;
        }
    });
});