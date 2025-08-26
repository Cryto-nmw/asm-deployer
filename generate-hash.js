#!/usr/bin/env node

const bcrypt = require("bcryptjs");
console.log("started!");

// Get the password from command-line arguments
const password = process.argv[2];

if (!password) {
  console.error("Usage: node generate-hash.js <plain-text-password>");
  process.exit(1);
}

const saltRounds = 10;

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error("Error generating salt:", err);
    process.exit(1);
  }

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      process.exit(1);
    }

    console.log("Hashed password:");
    console.log(`Password=>${hash}<=`);
  });
});
