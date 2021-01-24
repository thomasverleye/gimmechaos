import { scribbles } from './scribbles';

import { CARD_WIDTH, CARD_HEIGHT, CARD_BLEED, LOGO_MAX_DIMENSION_HORIZONTAL, LOGO_MAX_DIMENSION_VERTICAL } from './constants';
import { formatRenderData } from './helpers/format-render-data';

export function render(canvas: HTMLCanvasElement, form: HTMLFormElement) {
	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('No context no fun');
	}

	const data = formatRenderData(form);

	canvas.width = CARD_WIDTH;
	canvas.height = CARD_HEIGHT;

	const logo = new Image();
	logo.onload = () => {
		let renderWidth = LOGO_MAX_DIMENSION_HORIZONTAL * data.scale;
		let renderHeight = logo.naturalHeight / logo.naturalWidth * renderWidth;
		if (logo.naturalHeight > logo.naturalWidth) {
			renderHeight = LOGO_MAX_DIMENSION_VERTICAL * data.scale;
			renderWidth = logo.naturalWidth / logo.naturalHeight * renderHeight;
		}

		const x = (CARD_WIDTH - (CARD_BLEED * 2) - renderWidth) / 100 * data.x + CARD_BLEED;
		const y = (CARD_HEIGHT - (CARD_BLEED * 2) - renderHeight) / 100 * data.y + CARD_BLEED;

		ctx.drawImage(logo, x, y, renderWidth, renderHeight);
		ctx.globalCompositeOperation = "source-in";
		ctx.globalAlpha = 1;

		// Logo Color
		ctx.fillStyle = data.color;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.globalCompositeOperation = 'destination-over';

		// Background Color
		ctx.fillStyle = data.background;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		document.getElementById('card').style.backgroundColor = data.background + 'ee';
	};
	logo.src = (data.image) ? data.image : scribbles[data.scribble];
}
