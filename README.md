# ntravels

A clean, scalable travel showcase website to document my journey around the world.


## Features

- **Progress Tracking**: Visual progress bar showing journey completion (9/100 countries)
- **Country Showcase**: Dynamic cards displaying visited countries with flags, descriptions, and dates
- **Next Up Section**: Showcase upcoming travel plans with special styling
- **Statistics Dashboard**: Real-time stats including countries visited, continents, miles traveled, and days on the road
- **Fully Responsive**: Optimized for all devices with mobile-first design
- **Performance Optimized**: Clean separation of HTML, CSS, and JavaScript
- **Modern Design**: Sage green color palette with elegant serif typography
- **Easy Content Management**: Simple data structure for adding new countries
- **Scalable Architecture**: Built to grow with additional features

## Architecture & Design

### File Structure

```
ntravels/
├── index.html              # Main HTML structure
├── assets/
│   ├── css/
│   │   └── styles.css      # All CSS styles
│   └── js/
│       └── main.js         # Main JavaScript functionality
├── data/
│   └── countries.js        # Country data and content
├── docs/
│   ├── images/            # Screenshots and documentation images
│   └── CONTRIBUTING.md    # Contribution guidelines
├── README.md              # Project documentation
├── LICENSE                # MIT License
└── .gitignore            # Git ignore rules
```

### Clean Architecture Features

**Modular Structure:**
- **HTML**: Clean semantic structure with proper sections
- **CSS**: Organized with CSS custom properties and component-based classes
- **JavaScript**: Separated into main functionality and data files
- **Data**: Countries stored in dedicated JavaScript file for easy management

**Responsive Design:**
- Mobile-first approach with CSS Grid and Flexbox
- Smooth animations and transitions using CSS transforms
- Fixed navigation with scroll effects and backdrop blur
- Optimized touch interactions for mobile devices

**Performance Optimized:**
- Minimal dependencies (pure HTML/CSS/JS)
- Efficient DOM manipulation with minimal reflows
- CSS animations using GPU acceleration
- Modular loading with separate script files

### Data Structure

Countries are stored in `data/countries.js`:

```javascript
// Visited countries
let visitedCountries = [
    {
        name: "Guatemala",
        flag: "🇬🇹",
        description: "Ancient Mayan ruins and volcanic landscapes",
        date: "June 2024",
        continent: "North America"
    }
];

// Upcoming travel plans
let nextUpCountries = [
    {
        name: "Philippines",
        flag: "🇵🇭",
        description: "Tropical archipelago with stunning islands",
        planned: "March 2026"
    }
];
```

### Styling System

**CSS Custom Properties in `assets/css/styles.css`:**
```css
:root {
    --dark-sage: #374151;
    --sage-green: #9ca3af;
    --warm-beige: #fef7ed;
    --accent-terracotta: #dc2626;
    /* ... */
}
```

**Component-Based Classes:**
- `.country-card` - Reusable country display component
- `.stat-item` - Statistics display component
- `.section` - Page section wrapper
- `.fade-in` - Animation utility class

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Grid, Flexbox, Custom Properties
- **Typography**: Georgia serif font for elegant travel journal feel
- **Color Scheme**: Sage green palette with warm accents
- **Animations**: CSS Transitions & Transforms
- **Icons**: Unicode Emojis (no external dependencies)
- **Hosting**: GitHub Pages ready
