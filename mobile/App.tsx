import { StatusBar } from "expo-status-bar";
import React from "react";
import Landing from "./src/pages/Landing";
import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  //app loading, as fontes demoram a ser carregads no app,

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
// View em react native é como se fosse a <div/>, nao possui as tags como footer etc..
// Images svg, existe um pacote que precisamos instalar...
// StylesSheet usa caixa alta bakcgroundColor etc...
// Todos elementos vem com display: flex, e direction: column por padrão
