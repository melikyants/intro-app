# Creating app
  - `npx create-react-app my-app`
  - `cd my-app`
  - `yarn start`
  - Clean the App.js files, as it has some placholders

# Working with SCSS instead of CSS
  - `yarn add node-sass@4.14.1` the latest 5.0 has some issues with sass-loader, so for now 4.14.1
  -  `import index.scss` to the index.js

# Basic Structures
  - under `src` folder create 2 folder: Pages and Components
  - in components folder create new component by creating new folder Component1 and inside add index.js
  - each component has similar structure, must include always `import React from 'react` at the top of each file that react related
  - then write the function/components:
    `export const Component1 = () =>{
      return(<div>My Component</div>)
    }`
  - make the same for the pages

# Navigation
  - `yarn add react-router-dom` - will help to jump between the pages

# useEffect()
- to fetch some data when the component has mounted use: React.useEffect(()=>{}) which will run on 
  1. every render if no arguments have been passed React.useEffect(()=>{}) 
  2. will run only once if will be passed to it empty array of arguments: React.useEffect(()=>{},[])
  3. will run each time the prop/arguments (someId ) has been changed: React.useEffect(()=>{},[someId])

# useState()
  - Each component can have its own state
  - creating state is easy: const [state, setState] = React.useState(null)
  - create a button and set Onclick with setState() to change the state
  - each time state changed - component will rerender
  - Use arguments/props from parent to child component <Componet items={someItems} />



# Original links from Create-react-app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
