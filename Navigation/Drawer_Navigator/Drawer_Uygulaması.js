import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function AnasayfaEkranı({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Anasayfa</Text>
    </View>
  );
}

function HakkımızdaEkranı() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hakkımızda Ekranı</Text>
    </View>
  );
}

function İletişimEkranı() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>İletişim Ekranı</Text>
    </View>
  );
}

function BilgiEkranı() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bilgi Ekranı</Text>
    </View>
  );
}

const SolDrawer = createDrawerNavigator();

function SolDrawerEkranı() {
  return (
    <SolDrawer.Navigator
      id="SolDrawer"
      screenOptions={{ drawerPosition: 'left' }}
    >
      <SolDrawer.Screen name="Anasayfa" component={AnasayfaEkranı} />
      <SolDrawer.Screen name="Hakkımızda" component={HakkımızdaEkranı} />
      <SolDrawer.Screen name="İletişim" component={İletişimEkranı} />
      <SolDrawer.Screen name="Bilgi" component={BilgiEkranı} />
    </SolDrawer.Navigator>
  );
}

const SağDrawer = createDrawerNavigator();

function SağDrawerEkranı() {
  return (
    <SağDrawer.Navigator
      id="SağDrawer"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
    >
      <SağDrawer.Screen name="Anasayfa" component={SolDrawerEkranı} />
      <SağDrawer.Screen name="Hakkımızda" component={HakkımızdaEkranı} />
      <SağDrawer.Screen name="İletişim" component={İletişimEkranı} />
      <SağDrawer.Screen name="Bilgi" component={BilgiEkranı} />
    </SağDrawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SağDrawerEkranı />
    </NavigationContainer>
  );
}
