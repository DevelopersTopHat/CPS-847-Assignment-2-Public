const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot ({
    token: 'xoxb-541256475777-541814049811-KWv2ZNYrlM47VP5oL2oTo5zw',
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
    if (data !== 'message') {
        return;
    }

    handleQuestion(data.text);
});

// echo the question back
function handleQuestion(question) {
    const params = {
        icons_emoji: 'smiley'
    }
    if(question.includes('?')) {
        bot.postMessageToChannel('assignment-1', question, params);
    } else {
        bot.postMessageToChannel('assignment-1', 'Not a question, so I\'m ignoring you', params);
    }
}