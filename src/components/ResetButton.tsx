import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    fill: #afafaf;
    transition: fill 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    svg {
      fill: #54ade9;
    }
  }
`

export default function ResetButton() {
  const { reset } = useContext(AppContext)

  return (
    <Button onClick={reset}>
      <svg className='icon' xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 96 960 960' width='48'>
        <path d='M451 934q-123-10-207-101t-84-216q0-77 35.5-145T295 361l43 43q-56 33-87 90.5T220 617q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741 617q0-109-75.5-184.5T481 357h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801 617q0 125-83.5 216T511 934Z' />
      </svg>
    </Button>
  )
}
