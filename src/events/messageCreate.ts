import {
  cfg,
  sendMessage,
  createEmbed,
  parrot,
  register,
  regAll,
  fRegister,
} from "../../deps.ts";

export function messageCreate(message: any) {
  if (message.content.startsWith(cfg.bot.prefix)) {
    // The phases of content ...
    let content = message.content.substring(cfg.bot.prefix.length);
    let contentArray = content.split(" ");
    content = message.content.substring(cfg.bot.prefix.length).substring(
      contentArray[0].length,
    );

    switch (contentArray[0]) {
      case "parrot": {
        parrot(message);
        break;
      }
      case "register": {
        register(message);
        break;
      }
      case "registerall": {
        regAll(message);
        break;
      }
      case "fregister": {
        fRegister(message);
        break;
      }
      default: {
        let embed = createEmbed("That is not a command, you fucking mong.");
        sendMessage(message.channel, { embed });
      }
    }
  } else {
    return;
  }
}
