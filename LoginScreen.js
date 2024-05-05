import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import ProfilePage from './ProfileScreen'; // Import the ProfilePage component

const LoginScreen = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    // Retrieve registered users from storage on component mount
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
    if (storedUsers) {
      setRegisteredUsers(storedUsers);
    }
  }, []);

  const handleLogin = () => {
    // Check if the username exists in the registered users list
    const userExists = registeredUsers.find(user => user.username === username);

    if (userExists) {
      onLogin({ username, password });
      // Here you can add your authentication logic to check if the password is correct
      // For simplicity, I'll just set loggedIn to true if the password matches
      if (userExists.password === password) {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true'); // Store authentication status
      } else {
        alert('Incorrect password.');
      }
    } else {
      alert('Username not found. Please register first.');
    }
  };

  const handleRegister = () => {
    console.log('Registering...');
    // Here you can add your registration logic
    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      address.trim() !== '' &&
      birthdate.trim() !== '' &&
      gender.trim() !== ''
    ) {
      const newUser = { username, password, fullName, email, phoneNumber, address, birthdate, gender };
      setRegisteredUsers([...registeredUsers, newUser]);
      localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, newUser])); // Store registered users data
      alert('Registration successful!');
      setIsRegistering(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    localStorage.setItem('loggedIn', 'false'); // Clear authentication status
  };

  return (
    <ImageBackground
      source={require('../assets/loginbg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {registrationSuccess ? ( // Render ProfilePage if registration is successful
            <ProfilePage
              user={{
                username,
                fullName,
                email,
                phoneNumber,
                address,
                birthdate,
                gender
              }}
              onLogout={handleLogout}
            />
          ) : (
            <View>
              <Text style={styles.title}>Welcome to Dreamy Sip!</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  value={username}
                  onChangeText={text => setUsername(text)}
                  placeholderTextColor="#333"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  placeholderTextColor="#333"
                />
                {isRegistering && (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="Full Name"
                      value={fullName}
                      onChangeText={text => setFullName(text)}
                      placeholderTextColor="#333"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      value={email}
                      onChangeText={text => setEmail(text)}
                      placeholderTextColor="#333"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChangeText={text => setPhoneNumber(text)}
                      placeholderTextColor="#333"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Address"
                      value={address}
                      onChangeText={text => setAddress(text)}
                      placeholderTextColor="#333"
                    />
                    <input
                      type="date"
                      style={styles.input}
                      value={birthdate}
                      onChange={e => setBirthdate(e.target.value)}
                      placeholderTextColor="#333"
                    />
                    <select
                      style={styles.input}
                      value={gender}
                      onChange={e => setGender(e.target.value)}
                      placeholderTextColor="#333"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </>
                )}
                <TouchableOpacity onPress={isRegistering ? handleRegister : handleLogin} style={styles.button}>
                  <Text style={styles.buttonText}>{isRegistering ? 'Sign Up' : 'Sign In'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)} style={styles.switchButton}>
                  <Text style={styles.switchButtonText}>{isRegistering ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'rgba(237, 147, 82, 0.8)', // Semi-transparent background
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // White text color
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderColor: '#fff', // White border color
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#000', // Black text color
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 10,
  },
  switchButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default LoginScreen;
