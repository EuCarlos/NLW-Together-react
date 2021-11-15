
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import './styles/global.scss'

import './services/firebase'

function App() {
  return(
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/room/new" exact component={NewRoom} />
    </Routes>
  )
}

export default App;