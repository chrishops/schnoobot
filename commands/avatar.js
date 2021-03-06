const Discord = require("discord.js");
const helper = require("../helper.js");

module.exports = {
  name: "avatar",
  description: "show avatar of yourself or another user",
  usage: `\`${process.env.PREFIX}avatar @user\``,
  category: "Utility",
  alias: ["av", "pfp"],
  execute(message, args) {
    let avatarFormat = { format: "png", dynamic: true, size: 2048 };
    desiredMember = helper.FindUser(helper.JoinArgs(args), message);

    if (!desiredMember) {
      message.reply("couldn't find user!");
      return;
    }

    if (!args.length) {
      desiredMember = message.member;
    }

    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("#005eff")
      .setAuthor(`${desiredMember.displayName}'s avatar`)
      .setImage(desiredMember.user.avatarURL(avatarFormat))
      .setFooter(`Requested by ${message.member.displayName}`, message.member.user.avatarURL(avatarFormat));

    message.channel.send(avatarEmbed);
  },
};
