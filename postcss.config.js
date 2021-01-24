module.exports = {
	plugins: [
		[
			"postcss-preset-env",
			{
				stage: 1,
				autoprefixer: {
					grid: true,
					supports: false,
				},
				features: {
					'blank-pseudo-class': true,
					'focus-visible-pseudo-class': true,
					'focus-within-pseudo-class': true,
					'has-pseudo-class': true
				}
			}
		],
	],
};
