import { cfg, Embed, EmbedFooter } from "../../deps.ts";

export function createEmbed(content: string): Embed {
  let bed: Embed = ({
    color: cfg.embed.color,
    description: content,
  });
  let footer: EmbedFooter = ({
    text: cfg.embed.footer,
  });

  return bed;
}
