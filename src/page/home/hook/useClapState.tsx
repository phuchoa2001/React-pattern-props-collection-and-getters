
import { useState, useCallback } from "react";
import { generateRandomNumber } from "../../../utils/generateRandomNumber";

const MAX_CLAP = 50
const INIT_STATE = {
  count: 0,
  countTotal: generateRandomNumber(500, 10000),
  isClicked: false
}

const useClapState = ({ initialState = INIT_STATE } = {}) => {
  const [clapState, setClapState] = useState(initialState)
  const { count, countTotal } = clapState

  const handleClapClick = useCallback(
    () => {
      setClapState({
        count: Math.min(count + 1, MAX_CLAP),
        countTotal: count < MAX_CLAP ? countTotal + 1 : countTotal,
        isClicked: true
      })
    },
    [count, countTotal]
  )

  const togglerProps = {
    onClick: handleClapClick,
    'aria-pressed': clapState.isClicked
  }

  const counterProps = {
    count,
    'aria-valuemax': MAX_CLAP,
    'aria-valuemin': 0,
    'aria-valuenow': count
  }

  return {
    clapState,
    togglerProps,
    counterProps
  }
}

export default useClapState;