import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors from the palette
				'forest-green': {
					50: '#f0f4f1',
					100: '#dce8de',
					200: '#b9d1bd',
					300: '#8fb497',
					400: '#689371',
					500: '#48524A',
					600: '#3a423c',
					700: '#2F3C33',
					800: '#252e28',
					900: '#1f261f',
				},
				'lime-green': {
					50: '#f7fee7',
					100: '#ecfccb',
					200: '#d9f99d',
					300: '#bef264',
					400: '#a3e635',
					500: '#85CC17',
					600: '#65a30d',
					700: '#4d7c0f',
					800: '#3f6212',
					900: '#365314',
				},
				'sage-green': {
					50: '#f6f7f6',
					100: '#e3e6e3',
					200: '#c7cdc7',
					300: '#a3aca3',
					400: '#7a857a',
					500: '#5d685d',
					600: '#48524A',
					700: '#3c443c',
					800: '#323832',
					900: '#2b2f2b',
				},
				'cream': {
					50: '#F3FFDE',
					100: '#eeffd5',
					200: '#dfffab',
					300: '#cbff76',
					400: '#b5ff42',
					500: '#9eff0d',
					600: '#7dd100',
					700: '#5ea000',
					800: '#4a7d00',
					900: '#3e6600',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-primary': 'linear-gradient(135deg, #85CC17 0%, #2F3C33 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #F3FFDE 0%, #85CC17 100%)',
				'gradient-accent': 'linear-gradient(135deg, #48524A 0%, #2F3C33 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;