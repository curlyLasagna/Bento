// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

// TODO
// - Change links
// - Apply dark mode to images and its border
// - Integrate Microsoft todo with get list
const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'お早うございます 🍳',
	greetingAfternoon: 'こんにちは ☀',
	greetingEvening: 'こんばんは 🌙',
	greetingNight: 'おやすみなさい 😴',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/https://github.com/curlyLasagna',
		},
		{
			id: '2',
			name: 'Blackboard',
			icon: 'mail',
			link: 'https://blackboard.towson.edu/ultra/course',
		},
		{
			id: '3',
			name: 'Udemy',
			icon: 'graduation-cap',
			link: 'https://www.udemy.com/',
		},
		{
			id: '4',
			name: 'Personal Website',
			icon: 'user',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: '9anime',
			icon: 'tv',
			link: 'https://9anime.to/home',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: '可愛いくてごめん',
					link: 'https://www.youtube.com/watch?v=MPywGQPLJPo',
				},
				{
					name: 'ちゅ♡ちゅ♡ちゅ♡ぱにぱっ♡',
					link: 'https://www.youtube.com/watch?v=kirh9QQ6msM',
				},
				{
					name: '「SS」',
					link: 'https://www.youtube.com/watch?v=OvYGReapTIs',
				},
				{
					name: '「ノンフィクション」',
					link: 'https://www.youtube.com/watch?v=P8sWM0zWAu0',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'イジらないで、長瀞さん',
					link: 'https://nagatoro-san.com/',
				},
				{
					name: 'Hacker News',
					link: 'https://news.ycombinator.com/',
				},
				{
					name: '彼女お借りします',
					link: 'https://kanojo-okarishimasu.com',
				},
				{
					name: 'MyAnimeList',
					link: 'https://myanimelist.net/profile/curliestfry420',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
