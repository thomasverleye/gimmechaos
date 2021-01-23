export function setRandomColorValue(color: HTMLInputElement) {
	color.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
