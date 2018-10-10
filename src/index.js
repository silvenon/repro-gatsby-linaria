// @flow strict
import React from 'react'
import { render } from 'react-dom'
import { styled } from 'linaria/react'
import { blue } from './styles'

type T = any

const Container = styled.div`
  color: ${blue};
`

const App = () => (
  <Container>
    <h1>Hello world!</h1>
  </Container>
)

render(<App />, document.getElementById('root'))
