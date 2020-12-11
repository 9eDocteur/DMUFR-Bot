module.exports = async(client) => {

    client.user.setPresence({
        activity: {
            name: "HERE IS THE ACTIVITY OF THE BOT (Playing GitHub), YOU CAN CHANGE THIS"
        }
    })
};
