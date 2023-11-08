import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from './styles'; // Importe seus estilos aqui
import Parse from 'parse/react-native';
import React, { useContext } from "react";
import { UserContext } from "../sign-in/UserContext"; // ajuste para o path correto

export const DrawerContent = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await Parse.User.logOut();
    setUser(null);
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;
