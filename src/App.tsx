import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './@types/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
