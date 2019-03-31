// в пример взял конфиг https://github.com/philipwalton/responsive-components/blob/master/config.js
// КОНФИГ В ДАННЫЙ МОМЕНТ ПОКА НЕ ЗАДЕЙСТВОВАН!

const title = `Справочник`;
const repo  = `yuricoder`;
const url   = `https://yurifedorov.github.io/${repo}/`;
const desc  = `a modern approach to styling elements ` + `based on the size of their container`;

const authorUrl = `https://yurifedorov.github.io/`;

const repoUrl = `https://github.com/yurifedorov/${repo}`;
const publicPath = `/${repo}/`;
const publicDir = `${repo}`;
const publicStaticDir   = `${repo}/static`;
const publicStaticPath  = `/${repo}/static/`;
const manifestFileName = `revisioned-asset-manifest.json`;
const shareInfo = {
    url: url,
    text: `${title}: ${desc}`,
    via: `yurifedorov`,
  };

module.exports = {
title,
repo,
url,
desc,
authorUrl,
articleUrl,
repoUrl,
publicPath,
publicDir,
publicStaticDir,
publicStaticPath,
manifestFileName,
shareInfo,
};
