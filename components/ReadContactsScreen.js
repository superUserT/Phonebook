import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function ReadContactsScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchContacts = useCallback(async () => {
    const { data } = await Contacts.getContactsAsync();
    setContacts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleContactPress = (contact) => {
    navigation.navigate('UpdateDeleteContact', { contact });
  };

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.firstName || ''} ${contact.lastName || ''}`.toLowerCase();
    const phoneNumber = (contact.phoneNumbers && contact.phoneNumbers[0]?.number) || '';
    return fullName.includes(searchQuery.toLowerCase()) || phoneNumber.includes(searchQuery);
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)} style={styles.contactContainer}>
            <Text>{item.name}</Text>
            {item.phoneNumbers &&
              item.phoneNumbers.map((phoneNumber, index) => (
                <Text key={index}>{phoneNumber.number}</Text>
              ))}
          </TouchableOpacity>
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
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '90%',
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
