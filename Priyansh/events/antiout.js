module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "🥹";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`${name} বস তামিম সরি অ্যাড করতে পারলাম না 🥺:( `, event.threadID)
   } else api.sendMessage(`🍒🎀শুন ⛵আমি আর আমার বস তামিম থাকতে তু্ই গ্রূপ থেকে যাইতে পারবি না 😡💫 \n\n
  🖤 ${name} 🖤
  \n\n🌸 𝐀𝐝𝐦𝐢𝐧 😡 এটাকে 𝐀𝐩𝐩𝐫𝐨𝐯𝐚𝐥 দিয়ে দাও আমি অ্যাড দিছি .🙃😅`, event.threadID);
  })
 }
}
