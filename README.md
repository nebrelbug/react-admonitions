# remarkable-admonitions

[![npm](https://img.shields.io/npm/v/remarkable-admonitions.svg?style=popout)](https://www.npmjs.com/package/remarkable-admonitions)

An admonitions component for React. Based off [remarkable-admonitions](https://github.com/favoloso/remarkable-admonitions), with CSS specifically designed for Docusaurus (though it looks good anywhere).

<img src="assets/preview.png" width="680" />

## Installation

With npm:

```sh
npm install --save react-admonitions
```

or with Yarn:

```sh
yarn add react-admonitions
```

## Usage

```js
import Admonition from 'react-admonitions'

// The CSS
import 'react-admonitions/style.css'
```
### Styled Components

```js
import Admonition from 'react-admonitions/dist/styled.js'
```
### Example

```jsx
<Admonition
    type="warning"
    title="Things could go wrong"
    content="Be careful with extending stuff"
    iconType="svg"
/>
```

## Component Props

The component has the following props:

| Option     | Default | Description                                                                                                                                                                   |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`iconType`** | `svg` | Allows to use a different method to render admonition icons. By default it uses `svg` ([Octicons](https://octicons.github.com)). Choose `emoji` to use unicode emoji. |
| **`type`** | none | Options: `warning`, `important`, `caution`, `tip`, `notes` |
| **`title`** | none | The title of your admonition |
| **`content`** | none | The content of your admonition |