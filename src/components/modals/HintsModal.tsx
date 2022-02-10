import { hints } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { HINTS_TITLE } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
}

export const HintsModal = ({ isOpen, handleClose, guesses }: Props) => {
  var guess_count = guesses.length
  if (guess_count >= 5) {
    if (guess_count >= 7) {
      if (guess_count >= 9) {
        return (
          <BaseModal
            title={HINTS_TITLE}
            isOpen={isOpen}
            handleClose={handleClose}
          >
            <p className="text-sm text-gray-500 dark:text-gray-300">
              1. last letter is {hints[0]}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              2. first letter is {hints[1]}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              3. middle letter is {hints[2]}
            </p>
          </BaseModal>
        )
      }
      return (
        <BaseModal
          title={HINTS_TITLE}
          isOpen={isOpen}
          handleClose={handleClose}
        >
          <p className="text-sm text-gray-500 dark:text-gray-300">
            1. last letter is {hints[0]}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            2. first letter is {hints[1]}
          </p>
        </BaseModal>
      )
    }
    return (
      <BaseModal title={HINTS_TITLE} isOpen={isOpen} handleClose={handleClose}>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          1. last letter is {hints[0]}
        </p>
      </BaseModal>
    )
  }
  return (
    <BaseModal title={HINTS_TITLE} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">No Hint Yet</p>
    </BaseModal>
  )
}
