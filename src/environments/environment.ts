// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  endPoints: {
    users: 'http://localhost:3001/users',
    issues: 'http://localhost:3001/issues'
  },
  firebaseSettings: {
    apiKey: "AIzaSyC-SqUPYhznS92JekakoQTqG9Oslm3-B9A",
    authDomain: "angular5-8711b.firebaseapp.com",
    databaseURL: "https://angular5-8711b.firebaseio.com",
    projectId: "angular5-8711b",
    storageBucket: "angular5-8711b.appspot.com",
    messagingSenderId: "639176955220"
  },
  testUser: {
    email: "j.cserko@gmail.com",
    password: "angular5"
  }
};
