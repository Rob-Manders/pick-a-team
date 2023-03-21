import React from 'react'
import styled from 'styled-components'
import { Team } from '../interfaces'

interface Props {
  team: Team
}

const Container = styled.div`
  --dimensions: 80px;

  display: grid;
  place-items: center;
  max-width: var(--dimensions);
  aspect-ratio: 1 / 1;
  border-radius: 15px;
  margin-right: 1rem;

  img {
    max-width: var(--dimensions);
    max-height: var(--dimensions);
  }
`

export default function TeamGone({ team }: Props) {
  return (
    <Container>
      <img src={team.logo} />
    </Container>
  )
}
