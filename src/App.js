import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Game from './Game'

function App() {
  return (
    <div className="App">
      <Card>
        <CardBody>
          <CardTitle>Play against computer by choosing from</CardTitle>
          <Game />
        </CardBody>
      </Card>
    </div>
  )
}

export default App