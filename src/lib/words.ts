import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const interval = msInDay / 4
  const index = Math.floor((now - epochMs) / interval)
  const nextday = (index + 1) * interval + epochMs
  const word = WORDS[index % WORDS.length].toUpperCase()

  return {
    solution: word.toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
    hints: [word[4], word[0], word[2]],
  }
}

export const { solution, solutionIndex, tomorrow, hints } = getWordOfDay()

export const maskGuess = (guess: string, round: number) => {
  const mask_list = [[0, 4], [1, 3], [2], [1, 3]]
  const masks = mask_list[round % 4]
  var masked_guess = ''
  guess.split('').forEach((letter, i) => {
    if (masks.includes(i)) masked_guess += letter
    else masked_guess += ' '
  })
  return masked_guess
}
