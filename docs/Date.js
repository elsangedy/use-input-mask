import React, { useRef } from 'react'

import useInputMask from '../src'

import { createAutoCorrectedDatePipe } from 'text-mask-addons'

const DateInput = props => {
  const input = useRef(null)

  const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy HH:MM')

  const onChange = useInputMask({
    input,
    onChange: props.onChange,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: autoCorrectedDatePipe,
    placeholder: 'Please enter a date',
    keepCharPositions: true,
  })

  return <input {...props} ref={input} onChange={onChange} />
}

export default DateInput
