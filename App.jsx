// import React, { useState, useEffect, useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import * as SplashScreen from 'expo-splash-screen';
// import Parse from 'parse/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AppLoading } from 'expo-app-loading';

// import Login from './components/sign-in/index';
// import Registers from './components/sign-up/index';
// import Home from './components/home/index';
// import DrawerContent from './components/drawerContent/index';
// import Controll from './components/feeders/controll/index';
// import FeederList from './components/feeders/list/index';

// export const UserContext = React.createContext();

// Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
// Parse.serverURL = 'https://parseapi.back4app.com/';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerContainer = () => {
//     return (
//         <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
//             <Drawer.Screen name="Home" component={Home} />
//             <Drawer.Screen name="Controle" component={Controll} />
//             <Drawer.Screen name="Lista" component={FeederList} />
//         </Drawer.Navigator>
//     );
// };

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [user, setUser] = useState(null);
//   const [isUserLoaded, setIsUserLoaded] = useState(false);

//   async function prepareApp() {
//     try {
//       await SplashScreen.preventAutoHideAsync();
//       const currentUser = await Parse.User.currentAsync();
//       setUser(currentUser);
//       setIsUserLoaded(true);
//     } catch (e) {
//       console.warn(e);
//     } finally {
//       setAppIsReady(true);
//       await SplashScreen.hideAsync();
//     }
//   }

  

//   useEffect(() => {
//     prepareApp();
//   }, []);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <UserContext.Provider value={{ user, setUser, isUserLoaded, setIsUserLoaded }}>
//       <NavigationContainer>
//         {isUserLoaded ? (
//           <Stack.Navigator screenOptions={{ headerShown: false }}>
//             {user ? (
//               <Stack.Screen name="Drawer" component={DrawerContainer} />
//             ) : (
//               <>
//                 <Stack.Screen name="Cadastro">{props => <Registers {...props} />}</Stack.Screen> 
//                 <Stack.Screen name="Login">{props => <Login {...props} />}</Stack.Screen>
//               </>
//             )}
//           </Stack.Navigator>
//         ) : null}
//       </NavigationContainer>
//     </UserContext.Provider>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Home from './components/Home';
import DrawerContent from './components/DrawerContent';
import FeederList from './components/feeders/list/index';

import CadastroScreen from './components/CadastroScreen'; // Importe a tela de cadastro
import Login from './components/sign-in';
import Registers from './components/sign-up';
import Controll from './components/feeders/controll';


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('c0LHkbk3waILSqO3K76twbzlSoOtcrcTJvgjJf8m', 'T3MDD7j3GgOKV6haJZKWCYru1gxZujnKv9Mbkzpp');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Controle" component={Controll} />
        <Drawer.Screen name="Lista" component={FeederList} />
        <Drawer.Screen name="Login" component={Login} /> {/* Adicione a tela de login */}
        <Drawer.Screen name="Cadastro" component={Registers} /> {/* Adicione a tela de cadastro */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Codigo original (sem tour), da linha 84 pra cima.