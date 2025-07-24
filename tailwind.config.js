module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            colors: {
                primary: '#C0E35B',  // Main background green
                secondary: '#586835', // Muted olive green (secondary)
                success: "#4CAF50",   // Success color (used for success messages, alerts)
                danger: "#D32F2F",    // Danger color (used for errors, warnings)
                warning: "#FF9800",   // Warning color (used for warnings)
                info: "#2196F3",      // Info color (used for informational messages)
                light: '#F1F9C5',    // Light accent (for subtle background elements)
                dark: "#333333",      // Dark text or background (for text)
                muted: "#B0BEC5",     // Muted color (for less important text)
                accent: '#8F9E3A',   // Button accent (inactive buttons)
                background: "#F4F4F9",// Background color for light themes
                active: '#74D300',   // Active button background
                text: '#2D2D2D',     // Main text color
                actionBlue: '#1E73BE',
                orangeBorder: '#D89938',    //Card borders, icons, light outlines
                orangeText: '#D28A1E',	//Button text(like "DENY"), icons
                orangeButton: '#C0761A'
            }
        },
    },
    plugins: [],
};
