import './style.css';

import './script/helpers/random-data';
import { render } from './script/render';

(function () {
	const hero = document.getElementById('hero');
	const card = document.getElementById('card');
	const form = document.getElementById('form');
	const renderer = document.getElementById('renderer');
	const controls = document.getElementById('controls');
	const showInterfaceToggles = document.querySelectorAll('[show-interface-toggle]');

	let downloadCounter = 0;
	let reqId: number;

	if (
		!hero || !(hero instanceof HTMLElement) ||
		!card || !(card instanceof HTMLElement) ||
		!form || !(form instanceof HTMLFormElement) ||
		!renderer || !(renderer instanceof HTMLCanvasElement) ||
		!controls || !(controls instanceof HTMLFieldSetElement) ||
		!showInterfaceToggles || showInterfaceToggles.length < 1
	) {
		return;
	}

	render(renderer, form);

	const controlsChangeHandler = (e: MouseEvent) => {
		if (!e.target || !(e.target instanceof HTMLElement) || !e.target.hasAttribute('id')) {
			return;
		}

		render(renderer, form);
	}

	controls.addEventListener('change', controlsChangeHandler);

	const controlsClickHandler = (e: MouseEvent) => {
		if (!e.target || !(e.target instanceof HTMLElement) || !e.target.hasAttribute('id')) {
			return;
		}

		switch (e.target.id) {
			case 'export':
				downloadCounter++;
				const link = document.createElement('a');
				link.download = `gimme-chaos-bussines-card-final-${downloadCounter}.png`;
				link.href = renderer.toDataURL();
				link.target = "_blank";
				link.click();
				return;
			case 'share':
				// do the share stuff here
				return;
		}
	}

	controls.addEventListener('click', controlsClickHandler);

	const toggleClickHandler = (e: MouseEvent) => {
		if (card.classList.contains('show-interface')) {
			card.classList.remove('show-interface');
		} else {
			card.classList.add('show-interface');
		}
	}

	showInterfaceToggles.forEach((el) => {
		el.addEventListener('click', toggleClickHandler);
	});

	// Show card now
	card.style.display = 'block';
	hero.style.display = 'none';
}());
