import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function UpdateDeleteContactScreen({ route, navigation }) {
  const { contact } = route.params;
  const [firstName, setFirstName] = useState(contact.firstName || '');
  const [lastName, setLastName] = useState(contact.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState(
    (contact.phoneNumbers && contact.phoneNumbers[0]?.number) || ''
  );

  //add validation to check strings and len of numbers == 10

  const updateContact = async () => {
    const updatedContact = {
      id: contact.id,
      [Contacts.Fields.FirstName]: firstName,
      [Contacts.Fields.LastName]: lastName,
      [Contacts.Fields.PhoneNumbers]: [{ label: 'mobile', number: phoneNumber }],
    };

    try {
      await Contacts.updateContactAsync(updatedContact);
      Alert.alert('Success', 'Contact updated successfully.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update contact. Please try again.');
    }
  };

  const deleteContact = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await Contacts.removeContactAsync(contact.id);
              Alert.alert('Success', 'Contact deleted successfully.');
              navigation.goBack();
            } catch (error) {
              Alert.alert('Error', 'Failed to delete contact. Please try again.');
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Update Contact" onPress={updateContact} />
      <Button title="Delete Contact" onPress={deleteContact} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});