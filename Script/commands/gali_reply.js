const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ohid Bokasoda")==0 || event.body.indexOf("Ohid mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("Ohid nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Ohid re chudi")==0 || event.body.indexOf("Ohid re chod")==0 || event.body.indexOf("Ohid Abal")==0 || event.body.indexOf("Ohid Boakachoda")==0 || event.body.indexOf("Ohid madarchod")==0 || event.body.indexOf("Ohid re chudi")==0 || event.body.indexOf("Ohid Bokachoda")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে আমার বস Ohid চু*দা বাদ দিছে🤣\nOhid এখন আর hetars চুষে না🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }