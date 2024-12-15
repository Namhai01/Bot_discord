// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const eventHandler = require("./event/even")
require("dotenv").config();
// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("ready", () => {
  console.log("Đã online");
});

//EventHandler
client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(process.env.PREFIX)) return;
  eventHandler( msg);  // Xử lý sự kiện
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
