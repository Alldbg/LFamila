import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './src/lang/i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('GROUP_NAME')}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
