# Getting Started

This guide will help you get started with the project. It will also help you set up your own version of the HighTechU Discord Bot.

**Please remember that we are available at every step of the process. Let us know if you need help!**

## Development

Your development environment must have Git, Node.js, and npm installed. For more information about Git, visit "[Git](https://git-scm.com)". For more information about Node.js and npm, visit "[Node.js, and npm](https://nodejs.org/en/)".

You will need a text editor. Any text editor is fine, but we will use VS Code. For more information about VS Code, visit "[Visual Studio](https://code.visualstudio.com)".

Lastly, you will need access to a terminal or command prompt.

Note: If you are using an online text editor / integrated development environment (Codespaces, Repl.it) you will most likely not need to download Git, Node.js, or npm.

## Setup the Project in A Development Environment

Note: You will need a GitHub account and read/write access to the project repository. If you are a HighTechU Student, you will likely have read/write access to your teams project repository.

Note: You may want to fork the repository first if you do not have write access to the project. For more information, visit "[Fork a repo](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo)".

Step 1: Open the terminal or command prompt and navigate to your development directory.

```bash
  # Example: Navigate to Your-Development-Folder
  cd your-development-folder
```

Step 2: Clone the project locally. For more information, visit "[Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository#cloning-a-repository)".

```bash
  # URL: Check which repository you are trying to clone. It may not be the one in the example below.
  git clone https://github.com/hightechu/hightechu-academy-discord-bot.git
```

Step 3: Navigate to the project directory.

```bash
  # Project Directory: Check the name of your repository. It may not be the one in the example below.
  cd hightechu-academy-discord-bot
```

Step 4: Switch to a new branch from `main`.

Note: It is important to not work directly in the `main` branch. The `main` branch should remain stable and free of errors.

```bash
  # Replace <branch_name> with the name of your new branch. 
  # Example: git checkout -b really-awesome-feature
  git checkout -b <branch_name>
```

Step 5: Install npm dependencies.

```bash
  npm install
```

Step 6: Open the project in your preferred code editor.

```bash
  # Example: Open VS Code
  code .
```

## Setup Configuration

Before you can start with the project you will need to configure the environment variables. However, we do not currently have our configuration variables. But we can setup the files now so that we can add the variables throughout the guide.

- [ ] Create an `.env` file based on `.env.example`. It should include all the content of `.env.example`.

We will be adding our secrets from Discord and Firebase into this file, and the file will not be uploaded to Git, therefore your secrets will stay secret.

Note: The `.env` file will only be available in your local development environment. This means that each person working on the project will need to create their own `.env` file with the appropriate contents.

## Account Requirements

To proceed with this project, you will need to have an account with the following services: Discord, Firebase, and Heroku.

### Discord

- [ ] Setup a Discord Account. For more information, visit "[Discord Getting Started](https://support.discord.com/hc/en-us/articles/360033931551-Getting-Started)".
- [ ] Download Discord. For more information, visit "[Download Discord](https://discord.com/download)".
- [ ] Setup a Discord Server. For more information, visit "[Create A Server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-)".
- [ ] Setup a Discord Bot. For more information, visit "[Setting Up a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)". (Note: This guide is provided by Discord.js. Please only read the provided linked section).
- [ ] Add your Discord Bot to your server. For more information, visit "[Adding a Bot to Servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html)". (Note: This section requires your bot application's client ID. Please read the entire section carefully).
- [ ] Add your Discord Bot Token to `.env`. Obtain your bot token from the Discord Portal. For more information, visit "[Your Token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token)".

Add your Bot Token to the `TOKEN` variable. Do not add any spaces between the variable name (`TOKEN`) and the `=`.

`.env`
```bash
TOKEN=YOUR_VERY_SECRET_BOT_TOKEN
```

### Firebase

- [ ] Setup a Firebase Account. For more information, visit "[Google Firebase](https://firebase.google.com)".
- [ ] Setup a Firebase Project. Follow the "Get started" Guide. For more information, visit "[Products Build](https://firebase.google.com/products-build)".
- [ ] Create a Cloud Firestore within your Firebase Project. For more information, visit "[Firestore](https://firebase.google.com/docs/firestore)".
- [ ] Obtain your Firebase Project Config Variables. For more information, visit "[Config Object](https://firebase.google.com/docs/web/setup#config-object)".

Note: The code that will be provided for the Firebase Project Config Variables will be presented in a JavaScript script tag.

```js
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "SECRET",
    authDomain: "SECRET_LINK",
    projectId: "SECRET_ID",
    storageBucket: "SECRET_LINK",
    messagingSenderId: "SECRET",
    appId: "SECRET"
  };
</script>
```

However, we only want the `SECRET` part. Carefully copy and paste each part into the correct `.env` config variable. Do not add any spaces between the variable name and the `=`.

`.env`
```bash
TOKEN=YOUR_VERY_SECRET_BOT_TOKEN
apiKey=SECRET
authDomain=SECRET_LINK
projectId=SECRET_ID
storageBucket=SECRET_LINK
messagingSenderId=SECRET
appId=SECRET
```

- [ ] Update Cloud Firestore Rules. For more information, visit "[Rules tab](https://firebase.google.com/docs/firestore/security/get-started#use_the_firebase_console)".

We will want to update the rules to allow for anyone to read and write. You can copy and paste the following code into the Rules Tab in the Cloud Firestore Tab.

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write;
    }
  }
}
```

To learn more about Firebase and JavaScript visit the [documentation](https://firebase.google.com/docs/web/setup).

### Heroku

- [ ] Set a Heroku Account. For more information, visit "[Heroku](https://www.heroku.com)".
- [ ] Create a new Heroku Application.
- [ ] Setup Deployment Method. Use the `Connect to GitHub` method and select the appropriate repository.
- [ ] Setup Config Variables. Add the variables in the `.env` file to Heroku. For more information, visit "[Config Vars - Using the Heroku Dashboard](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard)".
- [ ] Config Dynos. Turn off the `web` dyno and turn on the `worker` dyno.

![Dyno Example](./docs/images/dyno-config-example.png)

Note: You will want to turn off the `worker` dyno when you are not using your Discord Bot. A free account has 550 free dyno hours each month, therefore use your hours appropriately.

- [ ] Enable Automatic Deploys. For more information, visit "[Automatic deploys](https://devcenter.heroku.com/articles/github-integration#automatic-deploys)".
- [ ] Deploy the `main` Branch Manually. For more information, visit "[Manual deploys](https://devcenter.heroku.com/articles/github-integration#manual-deploys)".

Note: The `worker` dyno will be re-deployed every time the `main` branch is updated. Therefore, check that your app runs locally before merging your working branch into the `main` branch.

## Locally Deploy

You will be able to deploy your Discord Bot locally. This is helpful for testing that your code works before adding it to the GitHub Repository. You always want to make sure your code works as intended before merging to the `main` branch.

Step 1: Start the server.

```bash
  npm run start
```

## Optional Configuration

These are optional configuration that you can perform to customize your Discord Bot.

### Prefix

You can update the prefix for interacting with your Discord Bot. Currently to interact with the Discord Bot you would type `!command` however, you can instead configure the interaction to be `!bot command`. This is helpful if you have multiple Discord Bots in a server.

Step 1: Update the prefix in `config.json`.

```bash
# Prefix for Summoning your Discord Bot
{
  "prefix": "!"
}
```

## Deployment

The Discord Bot is setup with a Heroku Application that automatically deploys the `main` branch on update. Therefore, be careful updating the `main` branch.

## Testing Bot

To test your setup, you can run the command `!ping` in your server. The Discord Bot will respond `Pong!` if your setup was a success.

Note: Do not worry if your Discord Bot doesn't respond. Ask for help, and we can troubleshoot together to solve the problem.

Note: Check that your Discord Bot is running either locally (`npm run start`) or on Heroku. The Discord Bot will not work unless it is actively running.

Note: The Discord Bot must be added to your server, if it isn't added it can't listen and respond to commands.

## Conclusion

You can now start developing. If you have any questions, feel free to ask. We want you to succeed!
