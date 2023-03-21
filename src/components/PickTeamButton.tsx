import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Button = styled.button`
  background-color: red;
`

export default function PickTeamButton() {
  const { pickTeam } = useContext(AppContext)

  return <Button onClick={pickTeam}>Pick a Team!</Button>
}
