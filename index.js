#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
const command = args[0]

if (!command) {
    console.log(`
  📦 Gitman By xamidov

  it just makes one thing! nothing more
  and nothing more, just adds, commits and pushes in one
  command, :) that is it.

  Usage:
    gitman cont "initial commit"       just push

  ✨ Tip: do not be lazy!
`);
}

switch (command) {
    case "version":
        const { version } = require("./package.json");
        console.log(`\n📦 Gitman CLI version: v${version}\n`);
        break;


    // main command
    case "cont":
        const cont_name = args.slice(1).join(" ") || "updates";

        console.log(`\n    🚀 Contributing to your repo \n`);

        try {
            console.log("\n📦 adding changes...");
            execSync("git add .");

            console.log("\n✒️ commiting changes...");
            execSync(`git commit -m "${cont_name}"`);

            console.log("\n📤 pushing changes...");
            execSync(`git push`);

        } catch (error) {
            console.log("❌ Failed contribute to repo:", error.message);
        }

    default:
        if (command == undefined) {
            break;
        }
        console.error(`
    ❌ Unknown command "${command}"

    Available commands:
      gitman cont "initial commit"
    `);
    break;
}