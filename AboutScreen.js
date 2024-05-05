// AboutUsScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>About Dreamy Sip</Text>
        <Text style={styles.paragraph}>
          At Dreamy Sip, we believe in the magic of sipping dreams. Our journey
          began with a simple yet powerful idea: To create an enchanting world
          of milk tea, where every sip transports you to a place of pure bliss.
        </Text>
        <View style={styles.accordionContainer}>
          {/* Accordion sections */}
          <View style={styles.accordion}>
            <Text style={styles.accordionHeader}>Our Story</Text>
            <Text style={styles.accordionContent}>
              In the heart of our bustling city, a group of passionate dreamers
              joined hands to chase their shared vision. They dreamt of crafting
              milk teas that awaken the senses, that take you on a journey to
              your happy place with every sip. This dream gave birth to Dreamy
              Sip. {'\n\n'}
              From our humble beginnings as a small tea stall, we've grown into
              a beloved milk tea destination. We've transformed countless
              ordinary moments into extraordinary experiences by infusing them
              with the dreamy flavors of our handcrafted milk teas.
            </Text>
          </View>
          <View style={styles.accordion}>
            <Text style={styles.accordionHeader}>The Dreamy Difference</Text>
            <Text style={styles.accordionContent}>
              <Text style={styles.bold}>What sets Dreamy Sip apart?</Text>{' '}
              {'\n\n'}
              It's our unwavering commitment to quality and innovation. We
              handpick the finest tea leaves, source the creamiest milk, and
              craft our syrups in-house, ensuring each cup is a masterpiece. Our
              obsession with perfection drives us to experiment with unique and
              imaginative flavors, from the classics to exotic creations.
            </Text>
          </View>
        </View>
      </ScrollView>
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
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Adjust the color as needed
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Adjust the color as needed
  },
  accordionContainer: {
    marginBottom: 20,
  },
  accordion: {
    marginBottom: 10,
    backgroundColor: 'rgba(237, 147, 82, 1)', // Semi-transparent accordion background
    borderRadius: 5,
    padding: 10,
  },
  accordionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Adjust the color as needed
  },
  accordionContent: {
    fontSize: 16,
    marginTop: 10,
    color: '#333', // Adjust the color as needed
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default AboutUsScreen;