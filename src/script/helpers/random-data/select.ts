export function setRandomSelectOption(select: HTMLSelectElement) {
	const options = select.getElementsByTagName('option');
	if (!options || options.length < 2) {
		return
	}

	select.selectedIndex = Math.floor(Math.random() * options.length);
}
