import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Container = styled.div``

export default function SelectedTeam() {
  const { selectedTeam } = useContext(AppContext)

  return <Container>{selectedTeam && selectedTeam.name}</Container>
}
