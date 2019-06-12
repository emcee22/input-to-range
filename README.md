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
	const [labels, setLabels] = useState([['10-30', '150-170']]);

	return (
		<div>
			<InputToRange
				useLabels={true}
				labels={labels}
				onChange={ev => {
					console.log(ev.labels); // use labels
					console.log(ev.ranges); // use ranges
				}}
			/>
		</div>
	);
}
```

## Development

In the project directory, you can run:

`npm run build`

`npm run test`

## Properties and Events

### labels

> `array of number or strings like discribed above`

This is useful if you want to start with default values

### useLabels

> `boolean`

If you want to use the build in labels or not

### onChange

> `function`

When you create a new label it will call this function with a property of this type:

{
labels: ['100', '101-103'],
ranges: [[100], [101,102,103]]
}

## BUGS

- removing a label should trigger onChange event

## @TODO -> props that need implementation

`allowIntersection` // don't allow duplicates inside the 2d arrays
`onlyPossitiveNumbers` // allow only positive numbers
`onlyNegativeNumbers` // allow only positive numbers
`keys` // override the existing keys SPACE and ENTER
`useDefaultStyles` // use default styles or not

> Click here for the demo:
> [InputToRange demo on firebase](https://inputtorange.firebaseapp.com/)

## LICENSE

MIT
