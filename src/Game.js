import { Button, Form, FormGroup } from 'reactstrap'
import { useState } from 'react'

function Game() {
  const wins = {S: 'R', R: 'P', P: 'S'}
  const [result, setResult] = useState()
  const showResultFor = (player, computer = ('RPS').split('')[(Math.floor(Math.random() * 3))]) => {
    if (player === computer){
      setResult('Tie')
    } else if (computer === wins[player]) {
      setResult('Computer won')
    } else if (player === wins[computer]) {
      setResult('Player won')
    }
  }

  return (
  <div>
    <Form>
      <FormGroup>
        <Button onClick={e => showResultFor('R')}>Rock</Button>
        <Button onClick={e => showResultFor('P')}>Paper</Button>
        <Button onClick={e => showResultFor('S')}>Scissors</Button>
      </FormGroup>
      {result}
    </Form>
  </div>
  )
}

export default Game
