import { Keypair } from '@solana/web3.js';
import * as readline from 'readline';

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get user input

function getUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (input: string) => {
      resolve(input);
    });
  });
}


// Run the key generation
getUserInput('Enter the public key beginning: ').then((keyBegin) => {
  let attempts = 0;

  while (true) {
    console.log(`Attempts count: ${attempts}`);
    const keypair = Keypair.generate();
    const publicKeyStr = keypair.publicKey.toBase58();

    if (publicKeyStr.startsWith(keyBegin)) {
      console.log(`Public key starts with: ${publicKeyStr}`);
      console.log(`Attempts: ${attempts}`);
      break;
    }

    attempts++;
  }
});