const random = require('../function/random')
module.exports = (client, msg) => {
  // Xử lý lệnh !map
  if (msg.content.trim().toLowerCase().split("!")[1] === "map") {
    const map = [
      "Icebox",
      "Lotus",
      "Ascent",
      "Heaven",
      "Sunset",
      "Pearl",
      "Breeze",
      "Bind",
      "Split",
    ];
    const randomMap = random(map)
    msg.reply(`Kết quả : ${randomMap}`);
  }

  // Xử lý lệnh !gun
  if (msg.content.trim().toLowerCase().split("!")[1] === "gun") {
    const gun = [
      "Classic",
      "Shorty",
      "Frenzy",
      "Ghost",
      "Sheriff",
      "Stinger",
      "Spectre",
      "Bulldog",
      "Guardian",
      "Phantom",
      "Vandal",
      "Marshal",
      "Operator",
      "Bucky",
      "Ares",
      "Odin",
      "Knife",
    ];
    const randomGun = random(gun)
    msg.reply(`Kết quả : ${randomGun}`);
  }
};
