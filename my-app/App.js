import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {showNotification, handleScheduleNotification, handleCancel} from './notfication.android'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Push Notification</Text>
      <TouchableOpacity onPress={() => showNotification('hello', 'message')}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click me to get notification</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click me to get notification after 5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Click me to cancel all notfications</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 24,
    marginTop: 24,
  },

  buttonTitle: {
    color: 'white',
  }
})