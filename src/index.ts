import { Client, Events, GatewayIntentBits } from "discord.js";
import { handleCommand } from "./command/handler";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.isChatInputCommand()) {
    handleCommand(interaction);
  }
});

const token = process.env.TOKEN;

if (!token) {
  console.error("No token provided!");
  process.exit(1);
}

client.login(token);

export { client };
