import React, { createContext, useState } from 'react'
import { Team } from '../interfaces'
import { teams } from '../teams'

interface Props {
  children: JSX.Element
}

interface Value {
  teamsAvailable: Team[]
  teamsGone: Team[]
  selectedTeam: Team | undefined
  madeFirstSelection: boolean
  pickTeam: () => void
  reset: () => void
}

export const AppContext = createContext<Value | undefined>(undefined)

export default function AppContextProvider({ children }: Props) {
  const [teamsAvailable, setTeamsAvailable] = useState<Team[]>(teams)
  const [teamsGone, setTeamsGone] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined)
  const [madeFirstSelection, setMadeFirstSelection] = useState<boolean>(false)

  function pickTeam() {
    if (teamsAvailable.length > 0) {
      const teamIndex = Math.floor(Math.random() * teamsAvailable.length)
      const selectedTeam = teams[teamIndex]

      setSelectedTeam(selectedTeam)

      if (madeFirstSelection) {
        setTeamsGone(prevState => {
          return [selectedTeam, ...prevState]
        })

        setMadeFirstSelection(true)
      }

      setTeamsAvailable(prevState => {
        return prevState.splice(teamIndex, 1)
      })
    }
  }

  function reset() {
    setTeamsAvailable(teams)
    setTeamsGone([])
    setSelectedTeam(undefined)
    setMadeFirstSelection(false)
  }

  return (
    <AppContext.Provider value={{ teamsAvailable, teamsGone, selectedTeam, madeFirstSelection, pickTeam, reset }}>
      {children}
    </AppContext.Provider>
  )
}
