import { useEffect } from "react"
import { AboutSection,WhatIDoSection,WhoAmISection,Footer } from "./components/sections"
import { useCaretify, useTheme } from "./hooks"

const App = ()=> {
    useCaretify()
    useTheme()

    return (
        <main className="[ container ] [ home ]">
            <AboutSection />
            <WhoAmISection />
            <WhatIDoSection />
            <Footer />
        </main>
    )
}

export default App