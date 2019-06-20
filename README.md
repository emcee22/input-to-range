## Description

<h3><b>InputToRange</b> - a react component that generates range of numbers from an input.</h3>

## The InputToRange component

Created as a helper for configurations steps in different apps, for example you may have a e-book app where you can the author can configure his book chapters:

Chapter 1: `1-10` (1 to 10 pages)
Chapter 2: `11-76` (11 to 76 pages)
etc...

> Click here for the demo:
> [InputToRange demo on firebase](https://inputtorange.firebaseapp.com/)

## Installation

Distributed via npm which is bundled with node and should be installed as one of your project's dependencies:

```
npm install --save input-to-range
```

This package also depends on react and react-dom. Please make sure you have those installed as well.

## Usage

```jsx
import React from 'react';
import { InputToRange } from 'input-to-range';

function App() {
	const [labels, setLabels] = useState(['10-30', '150-170']);

	return (
		<div>
			<InputToRange
				labels={labels}
				onChange={ev => {
					console.log(ev.labels); // labels
					console.log(ev.ranges); // ranges
				}}
			/>
		</div>
	);
}
```

## Development

In the project directory, you can run:

`npm run build` -> runs tests and creates the build

`npm run test` -> runs tests

`npm run watch` -> watches over files for development

## Properties and Events

### labels

> `array of number or strings like discribed above`

This is useful if you want to start with default values

### hideLabels

> `boolean`

Show/Hide the built in labels

### ignoreDefaultStyles

> `boolean`

If set on true no default styles will be applied

### onChange

> `function`

When you create a new label it will call this function with a property of this type:

{
labels: ['100', '101-103'],
ranges: [[100], [101,102,103]]
}

## BUGS

## @TODO -> props that need implementation

`allowIntersection` // don't allow duplicates inside the 2d arrays<br/>
`onlyPossitiveNumbers` // allow only positive numbers<br/>
`onlyNegativeNumbers` // allow only positive numbers<br/>
`keys` // override the existing keys SPACE and ENTER<br/>

> Click here for the demo:
> [InputToRange demo on firebase](https://inputtorange.firebaseapp.com/)

## LICENSE

MIT
