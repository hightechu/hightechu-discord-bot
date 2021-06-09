// Firebase Module
module.exports = {
    // Name of Command
    name: 'firebase',
    // Configuration
    config(_dotenv) {
        // Firebase App
        const firebase = require("firebase/app");
        // Firebase Products { auth, firestore }
        require("firebase/auth");
        require("firebase/firestore");

        // Configuration
        const firebaseConfig = {
            apiKey: process.env.apiKey,
            authDomain: process.env.authDomain,
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId,
            measurementId: process.env.measurementId
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // Return Firebase
        return firebase;
    },
};