// Require FS
const fs = require('fs');

// Reload Module
module.exports = {
    // Name of Command
    name: 'reload',
    // Description of Command
    description: 'Reloads a Command',
    // Usage Instructions
    usage: '[command name]',
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message args
    execute(message, args) {
        // Convert args to LowerCase
        const commandName = args[0].toLowerCase();

        // Find the Command Via Name
        const command = message.client.commands.get(commandName);

        // Inform User if the Command Doesn't Exist
        if (!command) {
            return message.channel.send(`There is no command with name \`${commandName}\`, ${message.author}!`);
        }

        // Find the Command
        const commandFolders = fs.readdirSync('./commands');
        const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

        // Delete Existing Version of Command
        delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

        // Reload the Command
        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.error(error);
            message.channel.send(`There was an error while reloading the command \`${command.name}\`:\n\`${error.message}\``);
        }
    },
};