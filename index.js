// const config = require('../../darklaunch.config.js');

const config = require('../DarklaunchDashboard/darklaunch.config.js');

class Darklaunch {
    constructor() {
        // Load flags on import here
        if (!config) {
            console.log('No Config Found');
            return;
        }
        let dlURL = config.url;
        this.flags = JSON.parse(localStorage.getItem('darklaunchFlags')) || {};
        fetch('/api/darklaunch_bundle', { method: 'GET' }).then((res) => res.json()).then(
            (res) =>
                res.map((darklaunch) => {
                    this.flags[darklaunch.code] = darklaunch;
                }) && localStorage.setItem('darklaunchFlags', JSON.stringify(this.flags))
        );
    }

    bind(uniqueUserID) {
        // Get url from darklaunch.config in their package root
        this.uuid = uniqueUserID;
        this.flags = this.fetchFlags();
    }

    isEnabled(darklaunchFlag) {
        if (!this.flags || !this.flags[darklaunchFlag]) {
            // No hit in cache or cache not loaded or flag disabled
            return false;
        }
        return this.flags[darklaunchFlag].enabled;
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
