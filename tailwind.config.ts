
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
				neon: {
					cyan: '#0ff',
					purple: '#f0f',
					pink: '#ff66c4',
					blue: '#5865f2'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(3px)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'background-pan': {
					'0%': { backgroundPosition: '0% center' },
					'100%': { backgroundPosition: '-200% center' }
				},
				'smoke-drift': {
					'0%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
					'50%': { transform: 'translateY(-15px) scale(1.1)', opacity: '0.2' },
					'100%': { transform: 'translateY(-30px) scale(1)', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'background-pan': 'background-pan 3s linear infinite',
				'smoke-drift': 'smoke-drift 8s ease-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out'
			},
			backgroundImage: {
				'cyberpunk-gradient': 'linear-gradient(45deg, #0ff, #f0f, #0ff)',
				'neon-glow': 'linear-gradient(90deg, rgba(0,255,255,0) 0%, rgba(0,255,255,0.5) 50%, rgba(0,255,255,0) 100%)',
				'smoke-texture': 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22%3E%3Cdefs%3E%3ClinearGradient id=%22a%22 gradientUnits=%22userSpaceOnUse%22 x1=%220%22 x2=%22512%22 y1=%220%22 y2=%22512%22%3E%3Cstop offset=%220%22 stop-color=%22%23120024%22/%3E%3Cstop offset=%221%22 stop-color=%22%23070B34%22/%3E%3C/linearGradient%3E%3CradialGradient id=%22b%22 cx=%22256%22 cy=%22256%22 r=%22256%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop offset=%220%22 stop-color=%22%23160029%22 stop-opacity=%221%22/%3E%3Cstop offset=%221%22 stop-color=%22%23070B34%22 stop-opacity=%221%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill=%22url(%23a)%22 height=%22512%22 width=%22512%22/%3E%3Crect fill=%22url(%23b)%22 height=%22512%22 width=%22512%22/%3E%3C/svg%3E")'
			},
			boxShadow: {
				'neon-cyan': '0 0 5px theme("colors.neon.cyan"), 0 0 20px theme("colors.neon.cyan")',
				'neon-purple': '0 0 5px theme("colors.neon.purple"), 0 0 20px theme("colors.neon.purple")',
				'neon-pink': '0 0 5px theme("colors.neon.pink"), 0 0 20px theme("colors.neon.pink")',
				'neon-box': '0 0 10px rgba(0, 255, 255, 0.5), inset 0 0 15px rgba(0, 255, 255, 0.3)'
			},
			dropShadow: {
				'neon-text': '0 0 2px rgba(0, 255, 255, 0.7)'
			},
			width: {
				'128': '32rem',
			},
			height: {
				'128': '32rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
