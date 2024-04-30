Following: https://blog.logrocket.com/how-to-set-up-node-typescript-express/

1. initialise pacakge.json file
   `npm init -y`

2. add the Express and DotEnv packages to the project
   `npm i express dotenv`

3. Add a new directory "src" at the root, and add a file named index.js and set it up

4. Launch server
   `node src/index.js`

5. Install TypeScript as a dev dependency and add @types declaration packages to Express and node.js
   `npm i -D typescript @types/express @types/node`

6. generate tsconfig.json file and initiate TypeScript compiler
   `npx tsc --init`

7. change from `"outDir": "./"` to `"outDir": "./dist"` in tsconfig.json file to determine the destination directory of the compiled input

8. update the package.json file in the "main" field from `"main": "index.js",` to `"main": "dist/index.js",`

9. rename the file from `index.js` in the src directory to `index.ts`

10. Add TypeScript sertver logic in place of original index.js code

11. Running step for produces a "cannot find module" error
    `node src/index.js`

12. add the utility library nodemon to auto-restart server when saved changes are detected and install ts-node to implement a TypeScript implementation environment for Node (as node.js does not supported by default)
    `npm i -D nodemon ts-node`

13. change `"scripts": {"test": "echo \"Error: no test specified\" && exit 1"},` to `"scripts": {
  "build": "npx tsc",
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts"
}`

14. Finally, to modify live, save file and refresh page
    `npm run dev`

15. You may add a nodemon config file `nodemon.json`, but I chose not to

16. compile TS code to JS - make sure to exit your dev server first (ctrl+ C)
    `npm run build`
