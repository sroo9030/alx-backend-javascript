#!/usr/bin/node
/**
 * A program that prompts the user for their name and displays a message.
 */

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    
    // Close the input stream before exiting
    process.stdin.end();
});

// Listen for the input stream close event before exiting
process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
