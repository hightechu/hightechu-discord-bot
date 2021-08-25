// Require FS
const fs = require('fs');

// Reload All Module
module.exports = {
    // Name of Command
    name: 'reload-all',
    // Description of Command
    description: 'Reloads All Commands',
    // Aliases
    aliases: ['r'],
    // Execute Command - Parameters: message
    execute(message) {
        // Retrieve all commands
        const commandFolders = fs.readdirSync('./commands');

        // Loop Through All Commands
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                // Delete Existing Version of Command
                delete require.cache[require.resolve(`../${folder}/${file}`)];

                // Reload the Command
                const command = require(`../${folder}/${file}`);
                message.client.commands.set(command.name, command);
            }
        }

        // Send Message
        return message.channel.send('All Commands Reloaded');
    },
};