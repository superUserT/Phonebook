import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
