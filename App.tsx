import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { clearBase, saveProductList } from './base';
import { store } from './store';
import OrderHome from './OrderHome';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetHandleProps,
} from '@gorhom/bottom-sheet';


/**
 * Landing Page, just to ensure memory is cleared.
 */
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Button
        title="Goto to Order Screen"
        onPress={() => navigation.navigate('Order')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
     <GestureHandlerRootView style={styles.container}>
    <Provider store={store}>
      <NavigationContainer>
        
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Order" component={OrderHome} />
          </Stack.Navigator>
      
      </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
   
  },
  title: {
    marginBottom: 50,
  },
  counter: {
    marginBottom: 50,
  },
  scrollView: {
    height: 400,
    marginTop: 5,
  },
  bottmSheetContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

