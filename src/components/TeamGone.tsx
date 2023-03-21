import React from 'react'
import styled from 'styled-components'
import { Team } from '../interfaces'

interface Props {
  team: Team
}

const Container = styled.div``

export default function TeamGone({ team }: Props) {
  return <Container>{team.name}</Container>
}
