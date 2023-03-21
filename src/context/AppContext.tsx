import React, { createContext, useState } from 'react'
import { Team } from '../interfaces'
import { teams } from '../teams'

interface Props {
  children: JSX.Element
}

const AppContext = createContext({})

export default function AppContextProvider({ children }: Props) {
  const [teamsAvailable, setTeamsAvailable] = useState<Team[]>(teams)
  const [teamsGone, setTeamsGone] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined)

  function pickTeam() {}

  return (
    <AppContext.Provider value={{ teamsAvailable, teamsGone, selectedTeam, pickTeam }}>{children}</AppContext.Provider>
  )
}
