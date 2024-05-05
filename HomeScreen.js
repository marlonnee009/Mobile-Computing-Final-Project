import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const HomeScreen = ({ addToCart }) => {
  const menuItems = [
    {
      id: 1,
      title: 'Matcha Milk Tea',
      price: 120,
      image: require('../assets/matcha.jpg'),
    },
    {
      id: 2,
      title: 'Fresh Milk Tea',
      price: 100,
      image: require('../assets/freshm.jpg'),
    },
    {
      id: 3,
      title: 'Pistachio Milk Tea',
      price: 140,
      image: require('../assets/pistachio.jpg'),
    },
    {
      id: 4,
      title: 'Strawberry Milk Tea',
      price: 130,
      image: require('../assets/strawberry.jpg'),
    },
    {
      id: 5,
      title: 'Brown Sugar Milk Tea',
      price: 110,
      image: require('../assets/brown-sugar.jpg'),
    },
    {
      id: 6,
      title: 'Chocolate Milk Tea',
      price: 100,
      image: require('../assets/chocolate.jpg'),
    },
    {
      id: 7,
      title: 'Green Thai Milk Tea',
      price: 130,
      image: require('../assets/greenthai.jpg'),
    },
    {
      id: 8,
      title: 'Honey Green Milk Tea',
      price: 130,
      image: require('../assets/honeygreen.jpg'),
    },
    {
      id: 9,
      title: 'Thai Classic Milk Tea',
      price: 120,
      image: require('../assets/thaiteaclassic.jpg'),
    },
    {
      id: 10,
      title: 'Horchata Milk Tea',
      price: 150,
      image: require('../assets/horchata.jpg'),
    },
  ];

  const handleButtonPress = (item) => {
    addToCart(item);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>₱{item.price}</Text>
              <CustomButton onPress={() => handleButtonPress(item)} />
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const CustomButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Add to Cart</Text>
  </TouchableOpacity>
);

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
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: 8,
    padding: 8,
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemTitle: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000', // Black text color for better visibility
  },
  itemPrice: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555555',
  },
  buttonContainer: {
    backgroundColor: '#ed9352', // Update the button color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // White text color for the button
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;