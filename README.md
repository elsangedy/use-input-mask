# use-input-mask

![MIT License][license-badge]
[![downloads][downloads-badge]][npmcharts]
[![PRs Welcome][prs-badge]][prs]

## Installation

```bash
$ yarn add use-input-mask
# or
$ npm i use-input-mask
```

## Usage

```jsx
import React from 'react'

import useInputMask from 'use-input-mask'

import { createAutoCorrectedDatePipe } from "text-mask-addons";

const MyDateInput = props => {
  const input = useRef(null);

  const autoCorrectedDatePipe = createAutoCorrectedDatePipe("dd/mm/yyyy HH:MM");

  const onChange = useInputMask({
    input,
    onChange: props.onChange,
    mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    pipe: autoCorrectedDatePipe,
    keepCharPositions: true
  });

  return <input {...props} ref={input} onChange={onChange} />;
};

export default MyDateInput
```

## Roadmap
* [ ] tests
* [ ] ci/cd
* [ ] semantic-release
* [ ] docs
* [ ] all-contributors

## Inspiration

[text-mask](https://github.com/text-mask/text-mask)

## LIENSE

MIT

[license-badge]: https://img.shields.io/npm/l/use-input-mask.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/use-input-mask.svg?style=flat-square
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[npmcharts]: http://npmcharts.com/compare/use-input-mask
