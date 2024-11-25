import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Footer Content</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});

export default MainLayout;
