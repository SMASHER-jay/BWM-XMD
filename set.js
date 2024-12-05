const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3nFGUEuilVdtYiAiHgXL1vzECBCBAFDuNnlf9+i7a7uh53ZXp5SQE5OzuV7BUmKc2ShBgxfQUZwCSlql7TJEBiCUXE+IwI6wIcUgiGodKEJzlUycLqOxFxNctlF5kntR5e1x6ysq+ZIUbd/ZwTOewGPDsgKN8beHwBngrTEfqB59VFSbrbB7v16yuPUl5lBCNGhormaNQthbhxfwKNFhJjgJNCyEF0RgbGFmiXE5Jv0p0VQ39IVLUi+15eEmzTmOGh4rVAm1gaXg651TUko3XXle/RZyHBcN+EMJbVgl5eoYM4M5UD46tJEUc/NilVEL00x1e0n/RwHCfJNHyUU0+bbujMLfVOPZ5m+HEyO2l30LHGrzSd+TIhxqC/hGKnbsByHWsJ+j7jIj2jXMdwldEp27ZWbY7lwFunE1nUsFswBWotRNhVm/Nj8SnxJPrIS/R/dmeXO6wduf5mcDFzLmncv+gMWjZpEPuz39Xji7WJaaSf3EH1T9wkNq2YTcWx3Lqzr1LtRm/FowPSstanzky67s+bl2Ljr2id9SAvyx3Qke6a56EzeD5iG5NUqXJxcvn/yRzLn1Y3Ri92ausTesnuF59S+Ps0mK+0im0d5bi7ZnbrpbiGlnujsYNxjuRN09qHy8najCDWmD4bcowMICnBOCaQ4Td7eDcQOgH65QR5B9E1eMLUM1b1dYy+8M3J1929zLrytzkp2Wi2O932ZDeYx05ulbBvUDshI6qE8R/4E5zQljY3yHAYoB8O/f3VAgmr6NK49juc64IxJTndJkcUp9D9c/fgIPS8tErppEk9tF4iAIfv5GlGKkyBvdSwSSLwQl0gNIc3B8AzjHD06wEcl9lCLB2gdKLpC/W2JDqK5w6PNQFoGLeUwTZ6/cJI0cOUe/OGKPPdDEFn0QxaR/EMWPKknuxw/ECTQAfi9M+2e31o4sl2m8Qcymm9zGMs3mu55BK2+yj4L/dQeEeSDISUF6gAXelGRbdMIJX/Aje/sMazU+waWJVndMq7ux06/SWZE+IL79BQMXz/nlJr6LZ6j2D17rjmgA65vEcTtzXui0GeFviT3BtxQZP/Kf1atkDDLfiaItrjvorc7fEQhjnMwBOp82S3nwVhbQFrPUsNQ7EBRAwV8mvSR9meabkW4NqGDNXfdjA/7Tb1f52dl6whRFd+VzdHsDWBgSJv0UL38CwgYgnXgrPJd0UvXeqFrsWgbvUgoK4TXWXnPYDKR56kyI7MosMuTb7kHS6BBGkmzOK+YvNDW+VGSLtZqcDbnLBu4/paJx201PsLy9bAz46tqjK5Ly99fl+emsjmdvfeWc2StzOMk4MfRRCp9Rb/fD5eTGk6YenoUM04319wxSWUj30XVkZrRVNH2UD7vLCvB1bOHb3Mgfp+/+K0hr+/ROmP0Ns4S2Fr0X+Z8TTn76HzBeB+Qv0soJOluY8TH0GC9gOOi3IncSaVxaGpPvUq7qvPSSEdFdNMH4PH41QFZDOk5JVcwBDDxSYp90AExzKnyWdQtvqKcwmsGhlyf53mpL/JyB1wbJcs2FNKPfgOlfXR7DB7/AHYK53P7BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


