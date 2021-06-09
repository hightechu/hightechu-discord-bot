// Add Element Module
module.exports = {
    // Name of Command
    name: 'add-element',
    // Description of Command
    description: 'Add an element.',
    // Aliases
    aliases: ['element'],
    // Arguments TRUE
    args: true,
    // Usage Instructions
    usage: '[element]',
    // Execute Command - Paramenters: message args firebase
    execute(message, args, firebase) {
        // Obtain Element Information
        const elementInformation = args;

        // Connect to Database
        let db = firebase.firestore();

        // Add A Element
        function addElement() {
            // Add data to the users collection
            db.collection(message.author.id).add({
                elementName: elementInformation[0],
                elementAuthor: message.author.username
            }).then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                message.channel.send('Element Successfully Added!');
            }).catch((error) => {
                console.error('Error adding document: ', error);
                return message.channel.send('Element Was Not Added!');
            });
        }

        // Add Element
        addElement();
    },
};