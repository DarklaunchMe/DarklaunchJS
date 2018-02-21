
const dlURL = null; // Get from darklaunch.config in main package root

class Darklaunch {    
    fetchFlags() {
        if (!dlURL) {
            return {}
        }
        return {} // Todo: Fetch from URL once config is done
    }
    
    init(uniqueUserID) {
        // Get url from darklaunch.config in their package root
        this.uuid = uniqueUserID;
        this.flags = this.fetchFlags();
    }

    flag(darklaunchFlag) {
        if (!this.flags || !this.flags[darklaunchFlag]) {
            // No hit in cache or cache not loaded
            return false;
        }
        // ToDo: Darklaunch uuid
        // ToDo: Darklaunch geo
        // ToDo: Darklaunch percentage (Session cached)
    }
    meme() {
        console.log("TESTING");
    }
}

export default Darklaunch;
