import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Index() {

  const [numero, setNumero] = useState(0);
  function addNumber() {
    //setNumero(numero++);
    setNumero(numero + 1);

  }

  function retirarNumber() {
    setNumero(numero - 1);
  }

  function zerarNumber() {
    setNumero(numero - numero);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Exemplos
      </Text>

<View> style={styles.counter} </View>

      <TouchableOpacity
        onPress={() => alert('Olá, mundo!')}
        style={styles.button}
      >
        <Text style={styles.textButton}>
          Diga "Olá, mundo!"
        </Text>
      </TouchableOpacity>

      <View style={styles.row}>

        <TouchableOpacity
          style={styles.buttonMais}
          onPress={() => addNumber()}
        >
          <Text style={styles.textButton}>
            +1
          </Text>
        </TouchableOpacity>

        <Text style={styles.textCounter}>{numero}</Text>

        <TouchableOpacity
          style={styles.buttonMenos}
          onPress={() => retirarNumber()}
        >
          <Text style={styles.textButton}>
            -1
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>

        <TouchableOpacity

          style={styles.buttonZerar}
          onPress={() => zerarNumber()}
        >
          <Text style={styles.textButton}>
            Zerar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  
  );
}
