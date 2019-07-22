# use-input-mask
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

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
* [x] all-contributors

## Inspiration

[text-mask](https://github.com/text-mask/text-mask)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://munir.dev"><img src="https://avatars3.githubusercontent.com/u/5339664?v=4" width="100px;" alt="Munir Ahmed Elsangedy"/><br /><sub><b>Munir Ahmed Elsangedy</b></sub></a><br /><a href="https://github.com/elsangedy/use-input-mask/commits?author=elsangedy" title="Code">💻</a> <a href="https://github.com/elsangedy/use-input-mask/commits?author=elsangedy" title="Documentation">📖</a></td>
    <td align="center"><a href="http://twitter.com/renatorib_"><img src="https://avatars2.githubusercontent.com/u/3277185?v=4" width="100px;" alt="Renato Ribeiro"/><br /><sub><b>Renato Ribeiro</b></sub></a><br /><a href="https://github.com/elsangedy/use-input-mask/commits?author=renatorib" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LIENSE

MIT

[license-badge]: https://img.shields.io/npm/l/use-input-mask.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/use-input-mask.svg?style=flat-square
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[npmcharts]: http://npmcharts.com/compare/use-input-mask
