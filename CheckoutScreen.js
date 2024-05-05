import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Assuming RadioButton is from react-native-paper

const CheckoutScreen = ({ cartItems, totalPrice, onPlaceOrder, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash_on_delivery');

const handlePlaceOrder = () => {
  if (cartItems.length === 0) {
    Alert.alert('Error', 'Your cart is empty');
  } else {
    // Pass the ordered items and total price to the parent component
    onPlaceOrder(cartItems, totalPrice);
    // Clear old orders
    localStorage.removeItem('orders');
    // Store new orders
    localStorage.setItem('orders', JSON.stringify(cartItems));
    onClose(); // Close the checkout screen
  }
};


  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Checkout</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Location:</Text>
        <Text style={styles.placeholderText}>[jan lang sa tabi]</Text>

        <View style={styles.paymentMethodContainer}>
          <Text style={styles.sectionTitle}>Payment Method:</Text>
          <RadioButton.Group onValueChange={(value) => setPaymentMethod(value)} value={paymentMethod}>
            <View style={styles.radioButtonContainer}>
              <RadioButton value="cash_on_delivery" />
              <Text>Cash on Delivery</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton value="gcash" />
              <Text>GCash</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton value="credit_debit_card" />
              <Text>Credit/Debit Card</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton value="paypal" />
              <Text>PayPal</Text>
            </View>
          </RadioButton.Group>
        </View>

        <Text style={styles.sectionTitle}>Your Orders:</Text>
        <ScrollView style={styles.ordersContainer}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <Text>{item.title}</Text>
              <Text>₱{item.price}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ₱{totalPrice}</Text>
        </View>

        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#F5D097',
    padding: 16,
    borderRadius: 8,
    width: '90%', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  placeholderText: {
    fontSize: 16,
    marginBottom: 16,
  },
  paymentMethodContainer: {
    marginTop: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ordersContainer: {
    maxHeight: 200, // Set maximum height for orders container
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#C5691D',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
