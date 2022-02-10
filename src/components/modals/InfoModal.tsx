import { Cell } from '../grid/Cell'
import { CompletedCell } from '../grid/CompletedCell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess a 5 letter word in 10 tries. It's a harder version of wordle
        due to following features.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        1.
        Information will be masked, not all letters will be colored.
        Click the eye icon to disable this feature.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        2.
        Instead of showing green and yellow, only showing blue if a letter is
        in the answer. Click the unlock icon to disable this feature.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        3.
        There will be hints popping up after round 5, 7 and 9.
        Check the hints by clicking the lightbulb icon.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        With default features activated, after each guess, the color of some
        letters will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <CompletedCell value="L" status="present" hardMode={true} />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word, no position information.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
