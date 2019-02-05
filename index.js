const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot ({
    token: 'xoxb-541256475777-541814049811-oSy5j3ofq7XtBvWII8o2kE1a',
    name: 'AbdealiBot'
});

// start handler
bot.on('start', () => {
    const params = {
        icons_emoji: 'smiley'
    }

    bot.postMessageToChannel('assignment-1', 'Please work so I can go home.', params);
});

// error handler
bot.on('error', (err)=> {
    console.log(err);
});

// message handler
bot.on('message', (data)=> {
    if (data.type !== 'message') {
        return;
    }
    console.log(data);
    const params = {
        icons_emoji: 'smiley'
    }
    if (data.text.includes('?') && data.username !== 'AbdealiBot') {
        bot.postMessageToChannel('assignment-1', data.text, params);
    }
});
