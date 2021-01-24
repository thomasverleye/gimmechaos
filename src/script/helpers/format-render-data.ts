type RenderData = {
	readonly x: number;
	readonly y: number;
	readonly scale: number;
	readonly scribble: string;
	readonly image: string | null;
	readonly background: string;
	readonly color: string;
};

interface FormElements extends HTMLFormControlsCollection {
	x: HTMLInputElement;
	y: HTMLInputElement;
	scale: HTMLInputElement;
	scribble: HTMLInputElement;
	image: HTMLInputElement;
	background: HTMLInputElement;
	color: HTMLInputElement;
}

export function formatRenderData(form: HTMLFormElement): RenderData {
	const elements: FormElements = <FormElements>form.elements;

	let x: number = 0;
	if (
		typeof elements['x'].value === "string" &&
		!isNaN(parseFloat(elements['x'].value))
	) {
		x = parseFloat(elements['x'].value);
	}

	let y: number = 0;
	if (
		typeof elements['y'].value === 'string' &&
		!isNaN(parseFloat(elements['y'].value))
	) {
		y = parseFloat(elements['y'].value);
	}

	let scale: number = 0;
	if (
		typeof elements['scale'].value === 'string' &&
		!isNaN(parseFloat(elements['scale'].value))
	) {
		scale = parseFloat(elements['scale'].value);
	}

	let scribble: string = 'scribble-0';
	if (
		typeof elements['scribble'].value === 'string'
	) {
		scribble = elements['scribble'].value;
	}

	let image: string | null = null;
	if (
		elements['image'].files &&
		elements['image'].files.length > 0
	) {
		image = URL.createObjectURL(elements['image'].files[0]);
	}

	let background: string = '#000';
	if (
		typeof elements['background'].value === 'string'
	) {
		background = elements['background'].value;
	}

	let color: string = '#000';
	if (
		typeof elements['color'].value === 'string'
	) {
		color = elements['color'].value;
	}

	return {
		x: x,
		y: y,
		scale: scale,
		scribble: scribble,
		image: image,
		background: background,
		color: color
	};
};
