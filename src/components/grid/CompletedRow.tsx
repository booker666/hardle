import { getGuessStatuses } from '../../lib/statuses'
import { solution, maskGuess } from '../../lib/words'
import { CompletedCell } from './CompletedCell'

type Props = {
  guess: string
  hardMode: boolean
  blindMode: boolean
  round: number
}

export const CompletedRow = ({ guess, hardMode, blindMode, round }: Props) => {
  if (guess === solution) {
    blindMode = false
    hardMode = false
  }
  var masked_guess = ''
  if (blindMode) {
    masked_guess = maskGuess(guess, round)
  } else {
    masked_guess = guess
  }
  const statuses = getGuessStatuses(masked_guess)
  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => {
        if (blindMode) {
          if (statuses[i] === 'masked')
            return (
              <CompletedCell
                key={i}
                value={letter}
                status={statuses[i]}
                hardMode={hardMode}
              />
            )
          else
            return <CompletedCell key={i} value={letter} hardMode={hardMode} />
        } else {
          return (
            <CompletedCell
              key={i}
              value={letter}
              status={statuses[i]}
              hardMode={hardMode}
            />
          )
        }
      })}
    </div>
  )
}
