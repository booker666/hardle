import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import { MAX_CHALLENGES, MAX_WORD_LENGTH } from '../constants/settings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}\n\n` + generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return (
    guesses
      .map((guess, idx) => {
        const status = getGuessStatuses(guess)
        const result = guess
          .padEnd(MAX_WORD_LENGTH, '-')
          .split('')
          .map((_, i) => {
            switch (status[i]) {
              case 'correct':
                return '🟩'
              case 'present':
                return '🟨'
              default:
                return '⬜'
            }
          })
          .join('')
        return `${idx + 1}. ${result}`
      })
      .join('\n') + '\n\nhttps://booker666.github.io/hardle'
  )
}