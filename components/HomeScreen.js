import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleViewContacts = () => {
    navigation.navigate('ReadContacts');
  };

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
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  viewButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: 20 }],
  },
  loginButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
