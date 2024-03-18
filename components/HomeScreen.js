import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleViewContacts = () => {
    navigation.navigate('ReadContacts');
  };

  // add login and logout functionality top of the screen
  // make the buttons footer navbars
  // should only be able to see created contacts by specified user


  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Button
          title="Add Contact"
          onPress={() => navigation.navigate('CreateContact')}
        />
      </View>
      
  
      <View style={styles.viewButtonContainer}>
        <Button
          title="View Contacts"
          onPress={handleViewContacts}
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
  addButtonContainer: {
    position: 'absolute',
    bottom: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
  viewButtonContainer: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
  },
});
