import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';
import { getFirestore, db } from "../services/config";

export default function CreateContactScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const createContact = async () => {
    try {
      // Add contact using Expo Contacts
      const contact = {
        [Contacts.Fields.FirstName]: firstName,
        [Contacts.Fields.LastName]: lastName,
        [Contacts.Fields.PhoneNumbers]: [{ label: 'mobile', number: phoneNumber }],
      };

      await Contacts.addContactAsync(contact);

      // Save contact to Firestore
      await firestore().collection('contacts').add({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });

      // Navigate to ReadContacts screen
      navigation.navigate('ReadContacts');
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.addButtonContainer}>
        <Button
          title="Create Contact"
          onPress={createContact}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  input: {
    padding: 10,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
});
