import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Container = styled.div``

export default function Counter() {
  const { teamsGone, madeFirstSelection } = useContext(AppContext)

  return (
    <Container>
      <p>{madeFirstSelection && teamsGone.length + 1}</p>
    </Container>
  )
}
