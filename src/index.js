import React, { useState } from 'react';
import './InputToRange.css';
import {
	finalPattern,
	defaultKeys,
	errorMessage
} from './InputToRange.constants.js';
import { createMultipleRangesFromArrayOfValues } from './InputToRange.utils';

export const InputToRange = props => {
	const {
		ignoreDefaultStyles,
		hideLabels,
		labels,
		onChange,
		allowIntersection, // @TODO -> idea is not to allow same numbers twice
		onlyPossitiveNumbers, // @TODO -> allow only positive numbers
		onlyNegativeNumbers, // @TODO -> allow only positive numbers
		keys, // @TODO -> idea is to support more than just SPACE + ENTER
		...restOfProps
	} = props;

	const [inputState, setInputState] = useState('');
	const [labelsState, setLabelsState] = useState([]);
	const [errorState, setErrorState] = useState(false);

	// update the inside state with the props labels property
	React.useEffect(() => {
		if (!labels) return;
		if (!Array.isArray(labels)) {
			throw new Error(
				'labels property must be an array. Example: ["123", "150-190"]'
			);
		}
		labels && setLabelsState(labels);
	}, [labels]);

	const handleInputChange = event => {
		const { value } = event.target;
		setInputState(value);
		errorState && setErrorState(false);
	};

	const emitOnChange = labelState => {
		// create an array of ranges based on the current labels
		let rangeArrays = createMultipleRangesFromArrayOfValues(labelState);

		// trigger on change event with the new data
		onChange &&
			onChange({
				labels: labelState,
				ranges: rangeArrays
			});
	};

	const handleKeyPress = event => {
		const code = event.which || event.keyCode;
		if (defaultKeys.indexOf(code) > -1) {
			event.preventDefault();

			const regex = RegExp(finalPattern);
			if (!regex.test(inputState)) {
				setErrorState(true);
				return;
			}

			// update the labels
			const updatedLabelState = [...labelsState, inputState];
			setLabelsState(updatedLabelState);

			emitOnChange(updatedLabelState);

			// reset the input
			setInputState('');
		}
	};

	const removeLabel = key => {
		const newLabelsState = labelsState.filter((label, k) => k !== key);
		setLabelsState(newLabelsState);

		emitOnChange(newLabelsState);
	};

	const createLabels = () => {
		return labelsState.map((label, key) => {
			return (
				<span
					key={key}
					className="InputToRange__labels-container__label"
				>
					{label}
					<button
						className="InputToRange__labels-container__label__close"
						onClick={() => {
							removeLabel(key);
						}}
					>
						x
					</button>
				</span>
			);
		});
	};

	return (
		<div className={!ignoreDefaultStyles ? 'InputToRange' : ''}>
			{!hideLabels && (
				<div className="InputToRange__labels-container">
					{createLabels()}
				</div>
			)}
			<div className="InputToRange__input-container">
				<input
					className="InputToRange__input-container__input"
					type="text"
					value={inputState}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					{...restOfProps}
				/>
			</div>

			{errorState && (
				<p className="InputToRange__Error">{errorMessage}</p>
			)}
		</div>
	);
};
