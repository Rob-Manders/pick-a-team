import './scss/index.scss'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import AppContextProvider from './context/AppContext'

const title = 'React Typescript Template'

document.title = title

const container = document.createElement('div')
container.classList.add('app')

document.body.appendChild(container)

const root = createRoot(container!)

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
