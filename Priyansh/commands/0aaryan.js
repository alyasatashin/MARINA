const fs = require("fs");
module.exports.config = {
  name: "sosad",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😢")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😔")==0 || event.body.indexOf("🥹")==0) {
    var msg = {
        body: "💐𝐊𝗶 𝐇𝗼𝗹𝗼 𝐁𝐚𝐛𝘆 𝘁𝗼𝗺𝗮𝗿 𝗸𝗶 𝗺𝗼𝗻 𝗸𝗵𝗮𝗿𝗮𝗽 𝘁𝗮𝗺𝗶𝗺 𝗯𝗼𝘀𝘀🥹 𝗯𝗮𝗯𝘆 𝗸𝗲 𝗲𝗸𝘁𝗮 𝗷𝗼𝗸𝗲𝘀 𝘀𝗵𝘂𝗻𝗮𝗼☺️💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
