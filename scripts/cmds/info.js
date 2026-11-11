const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "info",
    version: "4.1.0",
    author: "Siyam",
    role: 0,
    countDown: 20,
    shortDescription: {
      en: "Owner & bot info"
    },
    longDescription: {
      en: "Show full stylish info"
    },
    category: "owner",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message, event }) {

    const totalCommands = global.GoatBot?.commands?.size || 0;

    const now = moment().tz("Asia/Dhaka");
    const date = now.format("MMMM Do YYYY");
    const time = now.format("h:mm:ss A");

    const uptime = process.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const prefix = global.utils.getPrefix(event.threadID);
    const groupName = event.threadName || "Unknown Group";

    const videoLink = "https://files.catbox.moe/g5vr8h.mp4";

    return message.reply({
      body: `
👑 ╭─❖ OWNER ❖─╮
   ╰➤ 『MOJAHAID HOSSEIN』

🤖 ╭─❖ BOT NAME ❖─╮
   ╰➤ 『Mojahaid Chat Bot』

🎂 ╭─❖ AGE ❖─╮
   ╰➤ 『17』

🚻 ╭─❖ GENDER ❖─╮
   ╰➤ 『Male』

☪ ╭─❖ RELIGION ❖─╮
   ╰➤ 『Islam』

🌐 ╭─❖ FACEBOOK ❖─╮
   ╰➤ 『fb.com/UDAY.MOja.haid』

💬 ╭─❖ MESSENGER ❖─╮
   ╰➤ 『m.me/UDAY.Moja.haid』

📞 ╭─❖ WHATSAPP ❖─╮
   ╰➤ 『wa.me/+880607091537』

👑 ╭─❖ GROUP ❖─╮
   ╰➤ 『${groupName}』

⚙️ ╭─❖ SYSTEM PREFIX ❖─╮
   ╰➤ 『${prefix}』

💬 ╭─❖ HELP COMMAND ❖─╮
   ╰➤ 『${prefix}help2』

📦 ╭─❖ COMMANDS ❖─╮
   ╰➤ 『${totalCommands}』

⏳ ╭─❖ UPTIME ❖─╮
   ╰➤ 『${uptimeString}』

🕒 ╭─❖ TIME ❖─╮
   ╰➤ 『${time}』

📅 ╭─❖ DATE ❖─╮
   ╰➤ 『${date}』

🏠 ╭─❖ ADDRESS ❖─╮
   ╰➤ 『Tangail』

🏫 ╭─❖ SCHOOL ❖─╮
   ╰➤ 『Najurpur』

💔 ╭─❖ RELATIONSHIP ❖─╮
   ╰➤ 『SINGLE』

🛠 ╭─❖ WORK ❖─╮
   ╰➤ 『NOT WORKING』

🔥 ╭─❖ ATTITUDE ❖─╮
   ╰➤ 『আমি ভদ্র, কিন্তু কেউ আমাকে হালকাভাবে নিতে পারবে না ✌️』
   ╰➤ 『আমি যেটা চাই তা অর্জন করি, কারো চাপে চলি না 💥』

╚═══━━━✦🔥
`,
      attachment: await global.utils.getStreamFromURL(videoLink)
    });
  }
};
