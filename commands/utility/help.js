// Import Prefix from config.json
const { prefix } = require('../../config.json');

// Help Module
module.exports = {
    // Name of Command
    name: 'help',
    // Description of Command
    description: 'A list of all my commands sent as a DM.',
    // Aliases
    aliases: ['commands'],
    // Usage Instructions
    usage: '[command name]',
    // Execute Command - Parameters: message args
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        // Sends a DM to the user, and informs them that a DM has been sent.
        if (!args.length) {
            // Command List
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            // Send Message as DM and In Channel
            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch((error) => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you!');
                });
        }

        // Sends a message with Command Information
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        // Send Message to Channel
        message.channel.send(data, { split: true });
    },
};