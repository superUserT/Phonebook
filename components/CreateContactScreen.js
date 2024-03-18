import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function CreateContactScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const createContact = async () => {
    const contact = {
      [Contacts.Fields.FirstName]: firstName,
      [Contacts.Fields.LastName]: lastName,
      [Contacts.Fields.PhoneNumbers]: [{ label: 'mobile', number: phoneNumber }],
    };

    await Contacts.addContactAsync(contact); 

    navigation.navigate('ReadContacts'); 
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Create Contact" onPress={createContact} />
    </View>
  );
}
