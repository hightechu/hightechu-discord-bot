// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'hightechu',
    // Description of Command
    description: 'HighTechU Promotion',
    // Aliases
    aliases: ['htu'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('HighTechU')
            .setURL('https://hightechu.ca/')
            .setAuthor('HighTechU Bot', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png', 'https://hightechu.ca')
            .setDescription('Want to learn more about HighTechU?')
            .setThumbnail('https://pbs.twimg.com/profile_images/1349456985557757967/cUPt5g5F_400x400.jpg')
            .addFields(
                { name: 'HighTechU', value: 'Join us this summer for our 5th, 6th, or 7th Cohort! Visit https://www.hightechu.ca for more information!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'August Cohort', value: 'August 9th - 13th', inline: true },
                { name: 'August Cohort', value: 'August 16th - 20th', inline: true },
                { name: 'August Cohort', value: 'August 23rd - 27th', inline: true },
            )
            .setTimestamp()
            .setFooter('Powered by UVic Engineering', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png');

        // Send Message
        message.channel.send(embed);
    },
};