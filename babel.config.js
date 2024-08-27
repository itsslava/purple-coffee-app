module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@shared': './shared',
						'@widget': './widget',
						'@tokens': './shared',
						'@icons': './assets/icons',
						'@entities': './entities',
					},
					extensions: ['.ts', '.tsx'],
				},
			],
		],
	};
};
