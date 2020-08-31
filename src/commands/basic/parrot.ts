import { cfg, sendMessage, createEmbed } from "../../../deps.ts";

export function parrot(message: any) {
  let content = message.content.substring(cfg.bot.prefix.length);
  let contentArray = content.split(" ");
  content = message.content.substring(cfg.bot.prefix.length).substring(
    contentArray[0].length,
  );

  let embed = createEmbed(content);
  sendMessage(message.channel, { embed });
}
