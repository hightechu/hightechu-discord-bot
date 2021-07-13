// Message Module
module.exports = {
    // Name of Command
    name: 'message',
    // Execute Command - Parameters: message
    execute(message) {
        // Log Every Message
        console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
    },
};