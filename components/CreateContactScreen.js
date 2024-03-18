import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function CreateContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const createContact = async () => {
    // Function to create a new contact
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Create Contact" onPress={createContact} />
    </View>
  );
}
