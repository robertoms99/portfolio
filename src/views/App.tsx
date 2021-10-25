import { useSelector } from 'react-redux'
import {
  AboutSection,
  WhatIDoSection,
  WhoAmISection,
  Footer,
  ProjectsSection
} from './components/sections'
import { useCaretify, useTheme } from './hooks'
import { RootState } from '../config/interfaces/state.interface'

const App = () => {
  const theme = useSelector(({ theme }: RootState) => theme)
  useTheme(theme)
  useCaretify()

  return (
    <main className="[ container ] [ home ]">
      <AboutSection />
      <WhoAmISection />
      <WhatIDoSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

export default App
