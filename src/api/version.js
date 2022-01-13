
// const MySQL = require('shared/services/mysql.js');
// const mysql = new MySQL();
// const cache = require('shared/services/cache');

// const { GeneralError } = require('shared/util/errorhandler');

const versions = require('shared/model/versions.json');

console.log("VERSIONS: ", versions);

async function getVersion() {
    try {
        let version = versions?.client?.version || 0;
        return version;
    }
    catch (e) {
        console.log(e);
    }

    return 1;
}

// async function getVersion2() {


//     try {

//         let version = await cache.get('version');
//         if (typeof version !== 'undefined' && version != null) {
//             return version;
//         }

//         let db = await mysql.db();
//         let response = await db.sql(`SELECT version from platform_versions where type =?`, [1]);
//         if (!response || !response.results || response.results.length == 0) {
//             throw 'Version SQL failed to respond??';
//         }

//         version = response.results[0]?.version;
//         if (!version)
//             throw 'Version SQL is not in results??';

//         cache.set('version', version, 10);
//         return version;

//     }
//     catch (e) {
//         console.log(e);
//     }

//     return null;

// }

module.exports = { getVersion };