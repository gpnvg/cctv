import Client from "https://x.nest.land/Discordeno@7.3.0/src/module/client.ts";
import { cfg, cache, Intents, messageCreate } from "../deps.ts";

Client({
  token: cfg.bot.token,
  intents: [Intents.GUILD_MESSAGES, Intents.GUILDS, Intents.GUILD_MEMBERS],
  eventHandlers: {
    ready: () => {
      console.log("I have logged on!");
    },
    messageCreate: (message) => {
      messageCreate(message);
    },
  },
});

// Client({
//   token: cfg.bot.token,
//   intents: [Intents.GUILD_MESSAGES, Intents.GUILDS, Intents.GUILD_MEMBERS],
//   eventHandlers: {
//     ready: () {
//       console.log("Logged");
//     }
//   }
// })
