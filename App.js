import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import AboutScreen from './Screens/AboutScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CheckoutScreen from './Screens/CheckoutScreen';
import ContactUsScreen from './Screens/ContactUsScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginScreen from './Screens/LoginScreen';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
  },
});

function App() {
  const [value, setValue] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [checkoutOpen, setCheckoutOpen] = useState(false); // State to manage checkout screen visibility
  const [authenticated, setAuthenticated] = useState(false); // State to manage user authentication

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      updateQuantity(item.id, 'increment');
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, action) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === itemId) {
          if (action === 'increment') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrement') {
            if (item.quantity === 1) {
              return null;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
        }
        return item;
      }).filter(Boolean);
    });
  };

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckoutOpen = () => {
    setCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setCheckoutOpen(false);
  };

  const handlePlaceOrder = () => {
    setCartItems([]); // Clear cart items after placing the order
    setCheckoutOpen(false); // Close the checkout screen
  };

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's assume authentication is successful
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear user authentication status
    setAuthenticated(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        {!authenticated ? ( // Render login screen if not authenticated
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <>
            {value === 'home' && <HomeScreen addToCart={addToCart} />}
            {value === 'cart' && <CartScreen cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} onCheckoutOpen={handleCheckoutOpen} />}
            {value === 'about' && <AboutScreen />}
            {value === 'contact' && <ContactUsScreen />}
            {value === 'profile' && <ProfileScreen onLogout={handleLogout} />} {/* Pass handleLogout as onLogout prop */}
            {checkoutOpen && <CheckoutScreen cartItems={cartItems} totalPrice={calculateTotalPrice(cartItems)} onPlaceOrder={handlePlaceOrder} onClose={handleCheckoutClose} />} {/* Pass cartItems, totalPrice, onPlaceOrder, and onClose prop to CheckoutScreen */}
            <BottomNavigation value={value} onChange={handleChange} sx={{ backgroundColor: '#783E0A' }}>
              <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
              />
              <BottomNavigationAction
                label="Cart"
                value="cart"
                icon={<ShoppingCartIcon />}
              />
              <BottomNavigationAction
                label="About"
                value="about"
                icon={<InfoIcon />}
              />
               <BottomNavigationAction
                label="Contact"
                value="contact"
                icon={<PhoneIcon />}
              />
              <BottomNavigationAction
                label="Profile"
                value="profile"
                icon={<PersonIcon />}
              />
            </BottomNavigation>
          </>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
