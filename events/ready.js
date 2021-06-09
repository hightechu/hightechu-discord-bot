// Ready Module
module.exports = {
    // Name of Command
    name: 'ready',
    // Once TRUE
    once: true,
    // Execute Command - Parameters: client
    execute(client) {
        // Success
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};