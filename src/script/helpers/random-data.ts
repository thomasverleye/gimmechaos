import { setRandomSelectOption } from './random-data/select';
import { setRandomColorValue } from './random-data/color';
import { setRandomRangeValue } from './random-data/range';

(function () {
	const scribbles = document.getElementById('scribbles');
	if (scribbles && scribbles instanceof HTMLSelectElement) {
		setRandomSelectOption(scribbles);
	}

	const background = document.getElementById('background');
	if (background && background instanceof HTMLInputElement) {
		setRandomColorValue(background);
	}

	const color = document.getElementById('color');
	if (color && color instanceof HTMLInputElement) {
		setRandomColorValue(color);
	}

	const scale = document.getElementById('scale');
	if (scale && scale instanceof HTMLInputElement) {
		setRandomRangeValue(scale);
	}

	const x = document.getElementById('x');
	if (x && x instanceof HTMLInputElement) {
		setRandomRangeValue(x);
	}

	const y = document.getElementById('y');
	if (y && y instanceof HTMLInputElement) {
		setRandomRangeValue(y);
	}
}());
