// View Elements Module
module.exports = {
    // Name of Command
    name: 'view-elements',
    // Description of Command
    description: 'View all your elements.',
    // Aliases
    aliases: ['elements'],
    // Execute Command - Paramenters: message, args, firebase
    execute(message, args, firebase) {
        if (args[0]) {
            return message.channel.send(`This command doesn't take any arguments!`);
        }

        // Create botMessage
        let botMessage = [];

        // Connect to Database
        let db = firebase.firestore();

        // Create Element Item
        function addBotMessage(element) {
            botMessage.push('\u200B');
            botMessage.push('> **Element:** ' + element);
        }

        // Send Message
        function sendMessage() {
            if (botMessage.length !== 0) {
                return message.channel.send(botMessage, { split: true });
            }
        }

        // Get All the Users Elements
        function getAllElements() {
            db.collection(message.author.id).get().then((querySnapshot) => {
                if (querySnapshot.empty) {
                    return message.reply(`you don't have any current elements.`);
                }

                botMessage.push('Your Elements!');

                querySnapshot.forEach((doc) => {
                    if (doc.data().elementName) {
                        addBotMessage(doc.data().elementName);
                    }
                });
            }).then(() => {
                sendMessage();
            }).catch((error) => {
                console.log(error);
                return message.reply('Sorry, there was an error trying to view elements.');
            });
        }

        // Get All Elements Promise
        const getAllElementsPromise = new Promise((resolve, _reject) => {
            resolve();
        });

        getAllElementsPromise.then(() => {
            getAllElements();
        }).catch((error) => {
            console.log(error);
            return message.reply('Sorry, there was an error trying to view elements.');
        });
    },
};
