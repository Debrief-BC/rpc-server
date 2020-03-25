const { DebriefProvider } = require('./DebriefProvider')

let debriefProvider = null;

const getDebriefProvider = async () => {
    if(!debriefProvider){
        debriefProvider = new DebriefProvider(process.env.DEBRIEF_WS_URL);
    }

    return debriefProvider
};

module.exports = {
    getDebriefProvider,
}