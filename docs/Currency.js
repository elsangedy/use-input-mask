import React, { useRef } from 'react'

import useInputMask from '../src'

import { createNumberMask } from 'text-mask-addons'

const CurrencyInput = props => {
  const input = useRef(null)

  const maskMoney = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    integerLimit: 9,
    decimalSymbol: ',',
    requireDecimal: true,
  })

  const onChange = useInputMask({
    input,
    onChange: props.onChange,
    mask: value => {
      const mask = maskMoney(value)

      const decimalsRegex = /,([0-9]{1,2})/
      const result = decimalsRegex.exec(value)

      if (!!result && result[1].length < 2) {
        mask.push('0')
      } else if (!result) {
        mask.push('00')
      }

      return mask
    },
  })

  return <input {...props} ref={input} onChange={onChange} />
}

export default CurrencyInput
