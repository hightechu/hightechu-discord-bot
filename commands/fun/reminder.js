const Discord = require("discord.js");

// Reminder Module
module.exports = {
  // Name of Command
  name: 'reminder',
  // Description of Command
  description: 'A reminder that runs evey 5 minutes.',
  // Guild - TRUE
  guildOnly: true,
  // Execute Command - Parameters: message
  execute(message, args) {
    // Clear Reminder
    if (args[0]) {
      clearInterval(args[0]);
      return message.channel.send('Reminder: ' + args + " has been cleared.");
    }

    // Setup Reminder
    let startDate = Date().toString();
    console.log(`Starting reminder messages at ${startDate}`);

    // Send Confirmation
    message.channel.send('Reminder has been set!');

    // Start Reminder - Every 5 Minutes
    var interval = setInterval(function () {
      const embed = new Discord.MessageEmbed()
        .setColor('#20C19E')
        .setTitle('Reminder!')
        .setDescription('Reminder: ' + interval)
        .addFields(
          { name: 'Drink Water!', value: 'Drink at least 250ml', inline: true },
          { name: '\u200B', value: '\u200B' },
          { name: 'Stop Reminder?', value: 'To stop type `!reminder ' + interval + '`'}
        )
        .setTimestamp()
        .setFooter('Powered by HighTechU Discord Bot');

      message.channel.send(embed);
    }, 60000);
  },
};