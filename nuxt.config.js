
export default {
	mode: 'universal',

	/*
	 * Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	 * Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '~/plugins/vuemask.client.js', ssr: false }
	],

	components: true,

	/*
	 * Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
		['nuxt-fontawesome', {
			component: 'fa', //customize component name
			imports: [{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faPlus']
			},
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faChevronDown']
			},
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faTimes']
			},
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faPen']
			},
			{
				set: '@fortawesome/free-regular-svg-icons',
				icons: ['faTrashAlt']
			},
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faExclamationCircle']
			},
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faCheck']
			}
			]
		}]
	],

	/*
	 * Nuxt.js modules
	 */
	modules: [],

	/*
	 * Build configuration
	 */
	build: {
		/*
		 * You can extend webpack config here
		 */
		extend(config, ctx) {
		}
	},
}
