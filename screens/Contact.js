import React from 'react'
import { Container, Content, Form, Text } from 'native-base'

export default ({ pokemon, teste }) => {
  // console.warn('>>>', props)

  teste()
  return (
    <Container>
      <Content>

        <Text style={{ fontSize: 40 }}>Tela #3 = {pokemon}</Text>
      </Content>
    </Container>
  )
}
