const config = require('../../darklaunch.config.js');

class Darklaunch {
    constructor() {
        // Load flags on import here
        if (!config) {
            console.log("No Config Found");
            return 
        }
        let dlURL = config.url;
        console.log("Successfully loaded config");
        // fetch from url and load into flags
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
        console.log(message);
    }
}

let dl = null;

module.exports = dl || (dl = new Darklaunch()); // Singleton