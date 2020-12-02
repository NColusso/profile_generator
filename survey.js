const { O_RDONLY } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (name) => {
  rl.question("What's one of your favourite activies? ", (activity) => {
    rl.question("What's your go to music genre? ", (music) => {
      rl.question("Which meal is your favourite? i.e. breakfast, lunch ?", (meal) => {
        rl.question("What's your favourite dish to eat for that meal? ", (dish) => {
          rl.question("What do you do to relax? ", (relax) => {
            rl.question("If you could have a superpower what would it be and why? ", (superpower) => {
              console.log(`Got it - thanks ${name}! Here's your profile: 
              My name is ${name} - nice to meet you!. 
              One of my favourite things to do is ${activity}. 
              When I'm listening to music, it's usually ${music}.
              My favourite meal of the day is ${meal}, and my go-to choice is ${dish}.
              When I need to relax, I ${relax}.
              If I could have a superpower, it would be ${superpower}`)
              rl.close();

            })
          })
        })
      })
    })
  })
});
