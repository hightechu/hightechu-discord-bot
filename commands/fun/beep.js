// Beep Module
module.exports = {
    // Name of Command
    name: 'beep',
    // Description of Command
    description: 'Beep!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Boop.').then(sentMessage => {
            // Add Reaction
            sentMessage.react('👍');
        });
    },
};