const fs = require("fs");
module.exports.config = {
	name: "KISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("KISS YOU") ||
     react.includes("Kiss you") || react.includes("kiss you") || react.includes("Kiss me") ||
react.includes("kiss me") ||
react.includes("Kiss me")) {
		var msg = {
				body: `=𝐎𝐰𝐧𝐞𝐫 ➻  𝐇𝐚𝐦𝐳𝐚 𝐚𝐥𝐢 𝐤 \n__________________________________\n\n🩷 🖤 𝐊𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐃𝐀𝐑𝐋𝐈𝐍𝐆 𝐉𝐀𝐋𝐃𝐈 𝐉𝐀𝐋𝐃𝐈 𝐊𝐀𝐑 𝐋𝐎 𝐊𝐎𝐈 𝐃𝐀𝐊𝐇 𝐋𝐄𝐆𝐀 😁 💋🙊💞\n__________________________________`,attachment: fs.createReadStream(__dirname + `/noprefix/c3bb4d7ea3365dce2df03e17e659d058.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
