import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ReadContactsScreen() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = useCallback(async () => {
    const { data } = await Contacts.getContactsAsync();
    setContacts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

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
