import './App.scss'
import { AppRouter } from './router/AppRouter'
import { LanguageProvider } from './gloomy/i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <AppRouter/>
    </LanguageProvider>
  )
}

export default App
