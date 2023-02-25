# my-react-typescript-package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

This is a lightweight version of the Raven bank UI , visit the website ["Raven bank"](https://getravenbank.com) for more.



It is simple React counter.

[**Live Demo**](https://getravenbank.com/)

## Installation:

```bash
npm install raven-bank-ui --save-dev
```

or

```bash
yarn add -D raven-bank-ui
```

## Usage :

Add `RavenButton` for example to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RavenButton } from 'raven-bank-ui'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>My Raven Button</h2>
            <RavenButton />
        </div>
        <hr />
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/raven-bank-ui
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/gapon2401/my-react-typescript-package/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package