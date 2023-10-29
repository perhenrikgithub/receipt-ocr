// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import LoadingScreen from '../components/Loading';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate a delay for demonstration purposes
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Simulating a 3-second loading time
//   }, []);

//   return (
//     <View style={styles.container}>
//       {isLoading ? (
//         <LoadingScreen />
//       ) : (
//         <Text>Welcome to My App</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
