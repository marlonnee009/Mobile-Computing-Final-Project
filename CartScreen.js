import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

const CartScreen = ({
  cartItems,
  removeFromCart,
  updateQuantity,
  onCheckoutOpen,
}) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>My Cart</Text>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        ) : (
          <>
            <ScrollView style={styles.scrollContainer}>
              {cartItems.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <View style={styles.itemNameContainer}>
                      <Text style={styles.itemName}>{item.title}</Text>
                      <Text style={styles.itemPrice}>₱{item.price}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, 'decrement')}
                      >
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => updateQuantity(item.id, 'increment')}
                      >
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFromCart(item.id)}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: ₱{totalPrice}</Text>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={onCheckoutOpen}
              >
                <Text style={styles.checkoutButtonText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent dark background
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#fff', // White text color for better visibility
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
    color: '#fff', // White text color for better visibility
  },
  scrollContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingRight: 8, // Add some padding to the right
  },
  itemName: {
    fontWeight: 'bold',
    color: '#000', // Black text color for better visibility
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#555555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ed9352', // Update the button color
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontWeight: 'bold',
    color: '#fff', // White text color for the button
  },
  quantityText: {
    fontWeight: 'bold',
    marginHorizontal: 8,
    color: '#000', // Black text color for better visibility
  },
  removeButton: {
    backgroundColor: '#FF6961',
    borderRadius: 8,
    padding: 8,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  totalContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff', // White text color for better visibility
  },
  checkoutButton: {
    backgroundColor: '#ed9352', // Update the button color
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  checkoutButtonText: {
    color: '#fff', // White text color for the button
    fontWeight: 'bold',
  },
});

export default CartScreen;