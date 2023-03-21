import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Container = styled.div`
  font-size: 2.75rem;
  margin: 0;
  padding: 0;
  margin-left: 0.5rem;
  color: #727272;
`

export default function Counter() {
  const { teamsGone, madeFirstSelection } = useContext(AppContext)

  return <Container>{madeFirstSelection && teamsGone.length + 1}</Container>
}
