import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Button = styled.button`
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  background-color: #54ade9;
  border: none;
  width: 100%;
  padding: 1.75rem;
  border-radius: 15px;
  margin-top: 1.5rem;
`

export default function PickTeamButton() {
  const { pickTeam } = useContext(AppContext)

  return <Button onClick={pickTeam}>Pick a Team!</Button>
}
