
# :rocket: React Native Boilerplate
This project is a clean and minimalist  [React Native](https://facebook.github.io/react-native/)  boilerplate that can be used to kickstart a mobile application.

Make sure you have [react-native-cli](https://reactnative.dev/docs/environment-setup) setup before trying to run the project.


## :star: Features

- TypeScript support out of the box
- State management with [MobX](https://mobx.js.org/README.html)
- [React Navigation](https://reactnavigation.org/) to handle navigation in the app
- [Async storage](https://github.com/react-native-community/async-storage) from react-native-community
- SVG support with [react-native-svg](https://github.com/react-native-community/react-native-svg)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native
- [Husky](https://github.com/typicode/husky) to prevent bad commits
- Simplified non-absolute imports inside the `src` directory using [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
- [react-native-rename](https://www.npmjs.com/package/react-native-rename) to rename apps with just one command


## :wrench: Using the boilerplate

To create a new project using the boilerplate:

-   clone this repository
-   remove the previous git history:  `rm -rf .git/`
-   install the npm dependencies by running  `npm install`
-   rename the React Native project to your own project name:  `npm run rename -- <YourProjectName>`  (the default name is  `react_native_boilerplate`)
-   remove the LICENSE file and the "License" section from the README if your project is not open source

Feel free to remove the section "Using the boilerplate" from the README (you will not need it anymore in your project). You are encouraged to keep the rest of the documentation in your project so that it is self-explanatory.

You can now create a new git repository for your project (using  `git init`) and create the first commit.

## :arrow_forward: Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

-   `npm install`  to install the dependencies
-    `npm start`  to start the metro bundler, in a dedicated terminal
-   `npm run android`  to run the Android application (remember to start a simulator or connect an Android phone)
- `npm run ios` to run the iOS application (remember to start a simulator or connect an iPhone)

## Troubleshooting
If your application fails to start after using the `npm run rename` command, please take a look at [this issue](https://github.com/junedomingo/react-native-rename/issues/72)


## :computer: Contributing

Contributions are very welcome.

## :bookmark: License

This project is [MIT](LICENSE) licensed.
