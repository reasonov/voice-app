// nuxt.config.ts
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
	tailwindcss: {
		configPath: "tailwind.config",
		exposeConfig: false,
		injectPosition: undefined,
		viewer: true,
	},
	devtools: { enabled: false },
	app: {
		head: {
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Inter:wght@400;500;600&display=swap",
				},
			],
		},
	},
})
