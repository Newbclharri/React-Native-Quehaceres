const {getDefaultConfig} = require("@axpo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resilver.assetExts.push("cjs");

module.exports = defaultConfig;