import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function RouteInputScreen({ navigation }) {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleExplore = () => {
    if (startLocation && endLocation) {
      // TODO: Navigate to Discovery screen
      console.log('Exploring route from', startLocation, 'to', endLocation);
      // navigation.navigate('Discovery', { startLocation, endLocation });
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Drivour</Text>
        <Text style={styles.tagline}>Drive. Discover. Devour.</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Where are you starting from?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter start location..."
          placeholderTextColor="#999"
          value={startLocation}
          onChangeText={setStartLocation}
        />

        <Text style={styles.label}>Where are you going?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter destination..."
          placeholderTextColor="#999"
          value={endLocation}
          onChangeText={setEndLocation}
        />

        <TouchableOpacity
          style={[
            styles.exploreButton,
            (!startLocation || !endLocation) && styles.exploreButtonDisabled
          ]}
          onPress={handleExplore}
          disabled={!startLocation || !endLocation}
        >
          <Text style={styles.exploreButtonText}>
            Explore Route
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>🚧 MVP in Development</Text>
        <Text style={styles.footerSubtext}>
          Open source • Contributors welcome
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1E',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00D9C0',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#888',
    letterSpacing: 2,
  },
  inputContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#1A1F2E',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#2A2F3E',
  },
  exploreButton: {
    backgroundColor: '#00D9C0',
    borderRadius: 12,
    padding: 18,
    marginTop: 32,
    alignItems: 'center',
  },
  exploreButtonDisabled: {
    backgroundColor: '#1A1F2E',
    opacity: 0.5,
  },
  exploreButtonText: {
    color: '#0A0F1E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    color: '#FF9500',
    fontSize: 14,
    marginBottom: 4,
  },
  footerSubtext: {
    color: '#666',
    fontSize: 12,
  },
});
