const discord = require("discord.js");
const fs = require("fs");
const http = require("http");
const url = require("url");

const config = require("./conf.json");

var authors = "AyzeLYC#4168 | Nougator#1806";
var discordServer = "https://discord.gg/";
var reason = null;
var userMentionned = null;

const bot = new Discord.Client();
bot.on("ready", () => {
    
    bot.user.setPresence({
        "game": {
            
            "name": "Wither bot help : ,help"
            
        }
    });
    bot.user.setStatus("Online");
    console.log(`The bot is ready ! starting as ${bot.client.tag}`);
    console.log(`Working on : ${bot.guilds.size} servers !`);
    
});
bot.on("guildMemberAdd", userAdded => {
    
    
    
});
bot.on("guildMemberRemove", userLeft => {
    
    
    
});
bot.on("guildMemberKick", userKicked => {
    
    
    
});
bot.on("guildMemberBanned", userBanned => {
    
    
    
});
