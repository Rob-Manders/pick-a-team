import React from 'react'
import Counter from './components/Counter'
import PickTeamButton from './components/PickTeamButton'
import ResetButton from './components/ResetButton'
import SelectedTeam from './components/SelectedTeam'
import TeamsGone from './components/TeamsGone'

export default function App() {
  return (
    <main>
      <div className='header-container'>
        <Counter />
        <TeamsGone />
        <ResetButton />
      </div>
      <SelectedTeam />
      <PickTeamButton />
    </main>
  )
}
