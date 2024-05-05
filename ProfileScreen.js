import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';
import PersonIcon from '@mui/icons-material/Person'; // Import PersonIcon

const ProfilePage = ({ onLogout }) => {
  const [orders, setOrders] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (storedOrders) {
      setOrders(storedOrders);
    }
  }, []);

  const handleLogout = () => {
    onLogout();
  };

  const toggleOrders = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.userDetails}>
            <PersonIcon style={styles.userIcon} /> 
            <View style={styles.userInfo}>
              <Text style={styles.userInfoText}>Username: test</Text> 
              <Text style={styles.userInfoText}>Email: test@mail.com</Text> 
              <Text style={styles.userInfoText}>Phone Number: 123-456-7890</Text>
              <Text style={styles.userInfoText}>Address: 123 Quezon City</Text> 
              <Text style={styles.userInfoText}>Birthdate: January 1, 2000</Text> 
              <Text style={styles.userInfoText}>Gender: Male</Text> 
            </View>
          </View>
          <TouchableOpacity onPress={toggleOrders} style={[styles.detailsContainer, styles.ordersContainer]}> {/* Toggle orders on press */}
            <Text style={styles.tabTitle}>Orders</Text>
            {isExpanded && ( 
              <ScrollView style={styles.dropdownContainer}>
                {orders.length === 0 ? (
                  <Text>No orders placed yet.</Text>
                ) : (
                  orders.map((order, index) => (
                    <View key={index} style={styles.order}>
                      <Text>{order.title}</Text>
                      <Text>₱{order.price}</Text>
                    </View>
                  ))
                )}
              </ScrollView>
            )}
          </TouchableOpacity>
        </View>
        <Button
          title="Logout"
          onPress={handleLogout}
          color="#ed9352" 
          style={styles.logoutButton}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  userIcon: {
    fontSize: 50,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userInfoText: {
    fontSize: 16, 
    marginBottom: 5,
    textAlign: 'left', 
  },
  boldText: {
    fontWeight: 'bold', 
  },
  ordersContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center', 
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdownContainer: {
    maxHeight: 200,
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: '#ed9352',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
});

export default ProfilePage;
