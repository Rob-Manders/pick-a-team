import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Container = styled.div`
  --dimensions: 500px;
  --padding: 0.5rem;
  --image-dimensions: calc(var(--dimensions) - calc(var(--padding) * 2));

  background-color: #fff;
  display: grid;
  place-items: center;
  max-width: var(--dimensions);
  aspect-ratio: 1 / 1;
  border-radius: 15px;
  padding: var(--padding);

  img {
    max-width: calc(var(--dimensions) - 1rem);
    max-height: calc(var(--dimensions) - 1rem);
  }
`

export default function SelectedTeam() {
  const { selectedTeam } = useContext(AppContext)

  return <Container>{selectedTeam && <img src={selectedTeam.logo} alt={`${selectedTeam.name} logo`} />}</Container>
}
