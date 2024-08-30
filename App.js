import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    }, 3000);
  })

  return (
    <View style={styles.container}>
      {isLoading &&
      <ActivityIndicator color='red' size='large' animating={true} />
     }
     <ActivityIndicator size='large' color='purple' />
      <StatusBar style="auto" />
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
