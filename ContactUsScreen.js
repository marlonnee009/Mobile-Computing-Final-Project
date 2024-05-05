import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ContactUsScreen = () => {
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    // Show a success alert or perform any other desired action
    alert('Your message has been sent successfully.');
    setMessage(''); // Clear the input field
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contact Us</Text>
        </View>
        <View style={styles.socialIcons}>
          <Icon name="logo-facebook" size={24} color="#fff" />
          <Icon name="logo-twitter" size={24} color="#fff" />
          <Icon name="logo-instagram" size={24} color="#fff" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message here"
            multiline
            value={message}
            onChangeText={setMessage}
            placeholderTextColor="#333"
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  header: {
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text color for better visibility
  },
  socialIcons: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: 8,
    padding: 8,
    marginBottom: 25,
  },
  input: {
    height: 500, // Adjust the height as needed
    textAlignVertical: 'top',
    color: '#000', // Black text color
  },
  submitButton: {
    backgroundColor: '#ed9352', // Update the button color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  submitButtonText: {
    color: '#fff', // White text color for the button
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;