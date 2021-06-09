// Import Fetch and Discord.js
const fetch = require('node-fetch');
const Discord = require('discord.js');

// Chart Module
module.exports = {
    // Name of Command
    name: 'chart',
    // Description of Command
    description: 'Displays Chart',
    // Usage Instructions
    usage: '[YYYY-MM-DD]',
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message args
    execute(message, args) {
        // Construct URL
        const date = args;
        const url = 'https://covidapi.info/api/v1/global/' + date;

        // Connect to API
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            const confirmedCases = data.result.confirmed;
            const deathCases = data.result.deaths;
            const recoveredCases = data.result.recovered;

            const embed = new Discord.MessageEmbed()
                .setColor('#20C19E')
                .setTitle('COVID 19 - Global Recovery Chart')
                .setDescription('Viewing Data for: ' + date)
                .addFields(
                    { name: 'Confirmed', value: confirmedCases, inline: true },
                    { name: 'Deaths', value: deathCases, inline: true },
                    { name: 'Recovered', value: recoveredCases, inline: true },
                )
                .setTimestamp()
                .setFooter('Powered by COVID API - https://covidapi.info/');

            // Send Message
            message.channel.send(embed);
        }).catch((error) => {
            console.log(error);
            message.channel.send('An Error Occured. Please verify that you inputed a correct date.');
        });
    },
};