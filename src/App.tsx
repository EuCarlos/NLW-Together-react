import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import './styles/global.scss'

import './services/firebase'
import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  
  return(
    <Routes>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/room/new" exact component={NewRoom} />
      </AuthContextProvider>
    </Routes>
  )
}

export default App;