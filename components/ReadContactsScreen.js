import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ReadContactsScreen() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        setContacts(data);
      }
    };
    fetchContacts();
  }, []);

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            {item.phoneNumbers &&
              item.phoneNumbers.map((phoneNumber, index) => (
                <Text key={index}>{phoneNumber.number}</Text>
              ))}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
