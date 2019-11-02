import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import {styles} from './Home'

import { pushScreen } from '../utils/navigation'

export default props => {
  console.warn('RECEBI', props)

  return (
    <View>
      <Text>Tela #2</Text>

      <TouchableHighlight
        style={styles.btnWrapper}
        onPress={() => pushScreen({
          id: props.componentId,
          name: 'biobox.contact',
          passProps: {
            pokemon: 'vai pikachu!',
            teste: () => console.warn('FOI MERMO!')
          },
          options: {
            topBar: {
              visible: false,
              title: { text: 'AE CARAI' },
              subtitle: { text: 'Sucesso!' }
            }
          }
        })}>
          <Text style={styles.btnText}>Ir para Tela #3</Text>
        </TouchableHighlight>
      </View>
  )
}
