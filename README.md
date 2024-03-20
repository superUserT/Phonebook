# React native contacts application

This is a simple phonebook application built with React Native and Expo, allowing users to manage their contacts with basic CRUD operations. The application integrates Firebase for authentication and storage of contact data.


## Directory structure

```
Phonebook/
├── App.js
├── assets/
│   └── ...
├── components/
│   ├── CreateContactScreen.js
│   ├── HomeScreen.js
│   ├── ReadContactsScreen.js
│   └── UpdateDeleteContactScreen.js
├── firebase.js
├── node_modules/
│   └── ...
├── package.json
├── README.md
└── yarn.lock
```

## Installation

To run the application locally, follow these steps:

```
git clone https://github.com/superUserT/Phonebook.git
```

### Install dependencies using npm or yarn:

```
npm install
```

## Specific Configurations

### Configure Firebase

- Create a Firebase project on the Firebase Console (https://console.firebase.google.com/).
- Obtain your Firebase configuration object.
- Replace the placeholder values in `firebaseConfig` object in `firebase.js` with your Firebase configuration.
- Enable Firebase Authentication and Firestore in your Firebase project.

See this (guide)[https://docs.expo.dev/guides/using-firebase/] for using firebase with expo cli.

This will start the Metro bundler and open the Expo DevTools in your default web browser. From there, you can launch the application on an iOS or Android simulator, or on a physical device using the Expo Go app.

### Features

- **Authentication**: Users can sign up, log in, and log out using Firebase authentication.
- **Create Contact**: Users can add new contacts with their first name, last name, and phone number.
- **Read Contacts**: Users can view a list of all contacts stored in the database, sorted alphabetically.
- **Update Contact**: Users can edit existing contacts to update their information.
- **Delete Contact**: Users can delete existing contacts from the database.
- **Search Contacts**: Users can search for contacts by name or phone number.
- **Responsive Design**: The application is designed to work on both iOS and Android devices, adapting to various screen sizes.

### Screens

- **Home Screen**: Displays a navigation menu with options to view contacts, add a new contact, and log out.
- **Read Contacts Screen**: Shows a list of all contacts with options to view details, edit, or delete each contact.
- **Create Contact Screen**: Allows users to input details for a new contact and save it to the database.
- **Update/Delete Contact Screen**: Displays details of a selected contact with options to edit or delete it.



## Running the aplication using expo go

See (this)[https://docs.expo.dev/get-started/expo-go/] guide for using expo.

```
npx expo start
```
or

```
npx expo start --tunnel             # for those connecting using LAN connecions
```

This will run the apllication through the mobile applciation.


## Considerations

I have configured firebase for this project for authentication, but had not had the time to configure login and seperation of concern. Contacts are managed locally for now.