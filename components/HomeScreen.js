import React from 'react';
import { View, Button } from 'react-native';
import ReadContactsScreen from './ReadContactsScreen';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ReadContactsScreen />
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate('CreateContact')}
      />
    </View>
  );
}
