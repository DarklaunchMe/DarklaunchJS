
const dlURL = null; // Get from darklaunch.config in main package root

const config = require('../darklaunch.config.js');

class Darklaunch {
    constructor() {
        // Load flags on import here
        console.log("TESTING CONSTRUCTOR");
        if (config) {
            console.log("Successfully loaded config " + config);
        } else {
            console.log("No config found");
        }
    }

    fetchFlags() {
        if (!dlURL) {
            return {}
        }
        return {} // Todo: Fetch from URL once config is done
    }
    
    bind(uniqueUserID) {
        // Get url from darklaunch.config in their package root
        this.uuid = uniqueUserID;
        this.flags = this.fetchFlags();
    }

    isEnabled(darklaunchFlag) {
        if (!this.flags || !this.flags[darklaunchFlag]) {
            // No hit in cache or cache not loaded
            return false;
        }
        // ToDo: Darklaunch uuid
        // ToDo: Darklaunch geo
        // ToDo: Darklaunch percentage (Session cached)
    }

    log(message) {
        console.log("TESTING LOG");
    }
}

module.exports = new Darklaunch();