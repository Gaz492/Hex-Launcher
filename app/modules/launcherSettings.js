//////////////////////////////////////////////////////////////////////
//  Author: Gareth
//  Date: 23/12/2017
//  Project: curse-downloader - 
//////////////////////////////////////////////////////////////////////

'use strict';

const Store = require('electron-store');
const store = new Store();

store.set('packFiles', 'C:/Hex/');
console.log(store.get('packFiles'));