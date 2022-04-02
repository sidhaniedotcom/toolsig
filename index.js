const { chalk, inquirer, print } = require("./index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");

// DETECT IP *START!
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === "IPv4" && !address.internal) {
            addresses.push(address.address);
        }
    }
}
// DETECT IP *END!

const questionTools = [
    "➥ Information",
    "➥ Bot Like Timeline",
    "➥ Bot Like Target User",
    "➥ Mass Delete Post/Photo",

    "➥ F-L -> Followers Target",
    "➥ L-C -> Followers Target",

    "➥ F-L-C -> Followers Target",
    "➥ F-L-C -> Followers Target [BETA]",

    "➥ F-L-C -> Followers Target v2",

    "➥ F-L-DM -> Followers Target",
    "➥ F-L-DM -> Followers Target [BETA]",

    "➥ F-L-C -> Hashtag Target",
    "➥ F-L-C -> Location Target",

    "➥ Unfollow All Following",
    "➥ Unfollow Not Followback",
    "\n",
];

const menuQuestion = {
    type: "list",
    name: "choice",
    message: "Select tools:\n  Read the (❆ Information) first before using the tool!\n\n",
    choices: questionTools,
};

const main = async () => {
    try {
        const { choice } = await inquirer.prompt(menuQuestion);
        choice == questionTools[0] && require("./info.js");
        choice == questionTools[1] && require("./liketimeline.js");
        choice == questionTools[2] && require("./tools/liketarget.js");
        choice == questionTools[3] && require("./delallmedia.js");
        choice == questionTools[4] && require("./flonly.js");
        choice == questionTools[5] && require("./lconly.js");
        choice == questionTools[6] && require("./fftauto.js");
        choice == questionTools[7] && require("./fftbetaauto.js");
        choice == questionTools[8] && require("./fftautov2.js");
        choice == questionTools[9] && require("./fftdmauto.js");
        choice == questionTools[10] && require("./fftdmbetaauto.js");
        choice == questionTools[11] && require("./fhtauto.js");
        choice == questionTools[12] && require("./fltauto.js");
        choice == questionTools[13] && require("./unfollowall.js");
        choice == questionTools[14] && require("./unfollnotfollback.js");
        choice == questionTools[15] && process.exit();
    } catch (err) {
        print(err, "err");
    }
};

console.log(chalk`{bold.green
  ▄▄▄▄▄            ▄▄▌  .▄▄ · ▪   ▄▄ • 
  •██  ▪     ▪     ██•  ▐█ ▀. ██ ▐█ ▀ ▪
   ▐█.▪ ▄█▀▄  ▄█▀▄ ██▪  ▄▀▀▀█▄▐█·▄█ ▀█▄
   ▐█▌·▐█▌.▐▌▐█▌.▐▌▐█▌▐▌▐█▄▪▐█▐█▌▐█▄▪▐█
   ▀▀▀  ▀█▄▀▪ ▀█▄▀▪.▀▀▀  ▀▀▀▀ ▀▀▀·▀▀▀▀ 

  Ξ TITLE  : toolsig v4.0
  Ξ EMAIL  : sidhanie.com@gmail.com
  Ξ UPDATE : Wednesday, August 4, 2020

  116 111 111 108 115 105 103  118 51 
  }`);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log("  Ξ START  : ".bold.red + moment().format("D MMMM YYYY, h:mm:ss a"));
console.log("  Ξ YPATH  : ".bold.red + userHome);
console.log("  Ξ YOUIP  : ".bold.red + addresses);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(chalk`{bold.yellow
  Github ••••••••••••••••••••••••••••••••••
  : @sidhaniedotcom
  Telegram ••••••••••••••••••••••••••••••••
  : @termuxsidhanie
  •••••••••••••••••••••••••••••••••••••••••
  : Sidhanie & Termux Sidhanie }\n`);
main();
