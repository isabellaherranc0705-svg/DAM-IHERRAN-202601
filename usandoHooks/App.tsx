import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CalculateScreen from './src/screens/CalculateScreen';
import { colors } from './src/themes/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <CalculateScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
