import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'
import { Team } from '../interfaces'
import TeamGone from './TeamGone'

const Container = styled.div``

export default function TeamsGone() {
  const { teamsGone } = useContext(AppContext)

  return (
    <Container>
      {teamsGone.map((team: Team, index: number) => {
        return <TeamGone key={`${team.name}-${index}`} team={team} />
      })}
    </Container>
  )
}
