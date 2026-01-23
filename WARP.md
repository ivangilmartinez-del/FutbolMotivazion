# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
FútbolMotiva is a static HTML website designed to provide motivational content, tips, and inspiration for football players. The site is built with vanilla HTML, CSS, and JavaScript without any build system or framework dependencies.

## Architecture
The project follows a simple multi-page static website structure:
- **index.html**: Main landing page with navigation, hero section, motivation cards, image gallery with interactive slider, tips section, and footer
- **motivacion.html**: Standalone HTML snippet containing an auto-scrolling image slider (appears to be unused or legacy code)
- **style.css**: All styling including responsive layouts, animations, and slider controls
- **script.js**: Interactive image slider with previous/next button controls
- **images/**: Directory for local images (currently empty; project uses external URLs)

### Key Components
- **Header Navigation**: Fixed navigation bar with links to different sections (#inicio, #motivacion, #tips, #contacto)
- **Hero Section**: Full-width hero with background image and call-to-action button
- **Motivation Cards**: Flexbox card layout with hover animations promoting discipline, teamwork, and positive attitude
- **Image Gallery**: Static grid display of football images with hover effects
- **Interactive Slider**: Manual carousel with prev/next buttons for browsing football images
- **Tips Section**: Simple list of practical football training advice

### Important Technical Details
- The project uses external image URLs from Bing (tse*.mm.bing.net) rather than local assets
- script.js controls the `.slider-track` element within `.slider-control` container
- There's duplicate image markup: both a static `.galeria` grid and a controllable `.slider-control` carousel
- `motivacion.html` contains an auto-scrolling slider using CSS animations, but it's not referenced in index.html

## Development Commands
This is a static website with no build process or dependencies. Open `index.html` directly in a browser to view the site.

### Viewing the Site
```pwsh
# Option 1: Open directly in default browser
Start-Process index.html

# Option 2: Start a local HTTP server (if Python is available)
python -m http.server 8000

# Option 3: Start a local HTTP server (if Node.js is available)
npx http-server -p 8000
```

### Testing
No automated tests exist. Manual testing should cover:
- Navigation links scroll to correct sections
- Image slider responds to prev/next button clicks
- Hover effects on cards and images work correctly
- Responsive layout on different screen sizes

## Common Tasks
### Adding New Images
Images are currently loaded from external URLs. To add local images:
1. Place image files in the `images/` directory
2. Update the `src` attributes in index.html to reference `images/filename.ext`
3. Update both `.galeria` and `.slider-track` sections if adding to the slider

### Modifying Slider Behavior
The slider configuration is in script.js:
- `slideWidth`: Currently 190px (180px image + 10px margin)
- Adjust this value if image dimensions change
- `visibleSlides` is calculated based on container width

### Styling Changes
All styles are in a single style.css file organized by component:
- Color scheme: Dark blue (#2c3e50), green (#27ae60, #2ecc71), blue (#3498db), orange (#e67e22)
- Font: Montserrat (loaded from Google Fonts)
- All sections use consistent padding (60px vertical, 20px horizontal)

## Known Issues and Considerations
- `motivacion.html` exists but is not integrated into the main site
- External image URLs may break if sources change; consider downloading images locally
- No mobile menu implementation (navigation may overflow on small screens)
- Script tag is incorrectly placed at the end of script.js (line 23) instead of in HTML
- No error handling if slider elements are missing
