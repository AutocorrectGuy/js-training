## Getting Started with Our Project 🚀

Follow these simple steps to set up the project on your local machine:

1. **Install Dependencies** 💻
   
   Run the following command to install all the necessary packages (including Prettier):

   ```bash
   npm install
   ```

2. **Launch the Application** 🌟
   
   Execute the entry point of the script with this command:

   ```bash
   node ./src/index.js
   ```

This will get your application up and running. Happy coding! 👨‍💻👩‍💻


Exercise:
Create an array of objects (monsters), that look alike something like this
```js
   const monsters  = [
   {
      name: 'monster-1'
      level: 1
   },
   {
      name: 'monster-2'
      level: 1
   }
]
```

And use loop to create 10 monsters. Then wrap this functionality into a function `spawnMobs(count)` that returns the array of monsters. 
The Name of the monster is `monster${index}` - `index` as loop iteration index.

Then create a function `levelUpMonster(monster)` that accepts the monster object. With this function increase the selected monsters level by 1.
When you are done with the function, loop thought all the monsters and increase their levels by 1.
