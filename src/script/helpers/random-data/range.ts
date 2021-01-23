export function setRandomRangeValue(range: HTMLInputElement) {
	if (
		!range.hasAttribute('min') ||
		!range.hasAttribute('max') ||
		!range.hasAttribute('step')
	) {
		return;
	}

	const min = parseFloat(range.getAttribute('min'));
	const max = parseFloat(range.getAttribute('max'));
	const step = parseFloat(range.getAttribute('step'));
	const minSteps = min / step;
	const maxSteps = max / step;

	range.value = `${(Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps) * step}`;
}
