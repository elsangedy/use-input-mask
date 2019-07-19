import { useLayoutEffect, useRef } from 'react'

const { createTextMaskInputElement } = require('text-mask-core')

function useInputMask({
  guide,
  input: inputRef,
  keepCharPositions,
  mask,
  onChange,
  pipe,
  placeholderChar,
  showMask,
  initialValue = '',
}) {
  const textMaskRef = useRef(null)

  useLayoutEffect(() => {
    if (!inputRef.current) {
      return
    }

    textMaskRef.current = createTextMaskInputElement({
      guide,
      inputElement: inputRef.current,
      keepCharPositions,
      mask,
      pipe,
      placeholderChar,
      showMask,
    })

    textMaskRef.current.update(initialValue)
  }, [
    inputRef,
    guide,
    keepCharPositions,
    mask,
    pipe,
    placeholderChar,
    showMask,
    initialValue,
  ])

  return event => {
    if (textMaskRef.current) {
      textMaskRef.current.update()
    }

    if (typeof onChange === 'function') {
      onChange(event)
    }
  }
}

export default useInputMask
