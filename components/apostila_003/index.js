import React, {useState}  from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {

  const [numero, setNumero] = useState(0);
  function addNumber(){
    //setNumero(numero++);
    setNumero(numero+ 1);
    
  }


  return(
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Olá mundo!
        </Text>  

        <Text style={styles.textCounter}>{numero}</Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => addNumber()}
        >
          <Text style={styles.textButton}>
            +1
            </Text>
          </TouchableOpacity>               
    </View>
  );
}
