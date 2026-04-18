import cache from 'shared/services/cache.js';
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
const storage = new Storage();
export default storage;
//# sourceMappingURL=storage.js.map