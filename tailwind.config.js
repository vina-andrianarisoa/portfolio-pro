/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px',
				xl: '1200px',
				lg: '1024px',
				md: '768px',
				sm: '640px',
				xs: '480px'
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		textShadow: {
			glow: "0 0 5px #a855f7, 0 0 10px #4338ca, 0px 0px 20px #f472b6, 0 0 25px #4338ca, 0px 0px 30px #a855f7, 0 0 35px #f472b6"
		},
		boxShadow: {
			glow: '0 0 5px #a855f7, 0 0 10px #4338ca, 0px 0px 20px #f472b6, 0 0 25px #4338ca, 0px 0px 30px #a855f7, 0 0 35px #f472b6'
		},
		colors: {
			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
				hover: 'hsl(var(--primary-hover))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
				hover: 'hsl(var(--secondary-hover))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
				hover: 'hsl(var(--muted-hover))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
				hover: 'hsl(var(--accent-hover))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
			success: {
				DEFAULT: 'hsl(var(--success))',
				hover: 'hsl(var(--success-hover)',
				foreground: 'hsl(var(--success-foreground))'
			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
				hover: 'hsl(var(--destructive-hover)',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			dark: {
  				DEFAULT: 'hsl(var(--dark))',
  				foreground: 'hsl(var(--dark-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		backgroundImage: {
			"gradient-primary-light": "linear-gradient(90deg, hsl(260 80% 65) 0%, hsl(240, 60%, 55%) 50%, hsl(320, 75%, 70%) 100%)",
			"gradient-primary-dark": "linear-gradient(90deg, hsl(260 65% 50%) 0%, hsl(240, 55%, 45%) 50%, hsl(320, 65%, 60%) 100%)",
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
  		}
  	}
  },
  plugins: [
	require('tailwindcss-animate')
 ]
}