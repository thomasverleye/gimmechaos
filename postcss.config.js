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
					'blank-pseudo-class': false,
					'focus-visible-pseudo-class': false,
					'focus-within-pseudo-class': false,
					'has-pseudo-class': false
				}
			}
		],
	],
};
