import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [isOn, setIsOn] = useState(false);

  function handleSymbol(){
    setIsOn((oldValue:boolean) => !oldValue);
  }

  return (
   <View style={isOn ? styles.containerOn : styles.containerOff}>
    <TouchableOpacity onPress={handleSymbol}>
       <Image source={isOn ? symbolOn : symbolOff} />
    </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
