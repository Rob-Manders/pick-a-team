import { Team } from './interfaces'

import atariLogo from './assets/atari-logo.png'
import commodoreLogo from './assets/commodore-logo.png'
import nintendoLogo from './assets/nintendo-logo.png'
import segaLogo from './assets/sega-logo.png'
import sinclairLogo from './assets/sinclair-logo.png'
import sonyLogo from './assets/sony-logo.png'

export const teams: Team[] = [
  {
    name: 'Atari',
    logo: atariLogo
  },
  {
    name: 'Commodore',
    logo: commodoreLogo
  },
  {
    name: 'Nintendo',
    logo: nintendoLogo
  },
  {
    name: 'Sega',
    logo: segaLogo
  },
  {
    name: 'Sinclair',
    logo: sinclairLogo
  },
  {
    name: 'Sony',
    logo: sonyLogo
  }
]
