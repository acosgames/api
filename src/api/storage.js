const cache = require('shared/services/cache');

class Storage {
    constructor() {

    }

    getGameList() {
        let key = `gamelist`;
        let gamelist = cache.getLocal(key);
        return gamelist;
    }

    setGameList(gamelist) {
        cache.setLocal('gamelist', gamelist, 300);
    }

}

module.exports = new Storage();