import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import {styles} from './Home'

import { pushScreen } from '../utils/navigation'

const About = props => {
  return (
    <View>
      <Text>Tela #2</Text>

      <TouchableHighlight
        style={styles.btnWrapper}
        onPress={() => pushScreen({
          id: props.componentId,
          name: 'biobox.list',
          // options: {
            // topBar: {
              // visible: false,
              // title: { text: 'AE CARAI' },
              // subtitle: { text: 'Sucesso!' }
            // }
          // }
        })}>
          <Text style={styles.btnText}>Acessar Lista</Text>
        </TouchableHighlight>
      </View>
  )
}

export default About
