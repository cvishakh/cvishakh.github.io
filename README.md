# Vishakh Cheruparambath | MyOneSpace
> Welcome to my personal space on the web! I'm a masters student passionate about intelligent systems and real-world innovation. Explore my projects, skills, and experience in one place.  
>  
> Want to make one? – This website is built on a simple, clean, and responsive template tailored for ML/ Data/ AI Engineers. Featuring elegant design with improved typography, human-friendly layouts, and interactive components that create an engaging experience.

> https://cvishakh.github.io/

[![Website](https://img.shields.io/website?label=Vishakh%27s%20Portfolio&style=flat-square&url=https%3A%2F%2Fcvishakh.github.io)](https://cvishakh.github.io/)
[![Medium](https://img.shields.io/badge/Medium-Follow-black?style=flat-square&logo=medium)](https://medium.com/@cvishakh)
[![DM me!](https://img.shields.io/badge/ask%20me-linkedin-1abc9c.svg)](https://www.linkedin.com/in/cvishakh/)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

### Homepage Preview
<p align="center"> 
  <kbd>
    <a href="https://cvishakh.github.io/" target="_blank"><img src="samples/web_preview.gif">
  </a>
  </kbd>
</p>

## Features
- Fully responsive and mobile-optimized design
- Valid HTML5 & CSS3 with modern styling
- Enhanced typography with improved line-height and letter-spacing for readability
- Central alignment throughout for clean visual hierarchy
- Branch structure for displaying multiple roles at the same organization
- Interactive hover effects and smooth transitions
- Accessible and SEO-friendly structure
- Easy to customize and integrate

## Sections
This portfolio includes the following sections:

- **HomePage**: 
  - Hero section with professional introduction
  - Three-paragraph biography for better readability
  - Contact information and social media links with enhanced styling
  - Quick navigation cards to Profile, Gallery, Blog, and Projects
  - Organization affiliations section

- **Profile**: 
  - Interactive timeline of career and academic journey
  - Branch structure for displaying multiple roles at same organization
  - Event cards with improved visual hierarchy and spacing
  - Contact button for direct email communication
  - Attachment links for certificates and references

- **Gallery**: 
  - Responsive photo grid with masonry layout
  - GPS metadata integration for location tagging
  - Click-to-expand image viewer
  - Seamless Medium integration

- **Blog**: 
  - Curated articles published via [Medium](https://medium.com/@cvishakh)
  - Clean card-based layout for article previews
  - Publication dates and snippets for quick overview

- **Projects**: 
  - Grid layout showcasing completed and ongoing projects
  - Technology tags for each project
  - Project descriptions and implementation details
  - Interactive cards with hover effects


## Design Improvements
- **Color Scheme**: Professional grey tones with accent blue (#4da6ff)
- **Typography**: Clean Segoe UI font with optimized line-height (1.6-1.7) for enhanced readability
- **Spacing**: Generous padding and margins for better visual breathing room
- **Interactive Elements**: Enhanced hover states, animations, and transitions
- **Cards**: Subtle backgrounds with improved borders and shadows for depth
- **Central Alignment**: All content centered with appropriate max-widths for optimal reading


## Steps to follow
To try and implement your own portfolio using this template, follow these steps:

- Clone the repository to your local machine via HTTPS:
```
git clone https://github.com/cvishakh/cvishakh.github.io.git
```

- **Customize Content**:
  - Modify the content in `index.html` to update your introduction, social links, and quick facts
  - Edit `timeline.html` to update your career timeline, education, and professional journey
  - Update `photos.html` with your photo collection and gallery content
  - Configure `blogs.html` to link to your Medium articles
  - Showcase your work in `projects.html` with descriptions and technology tags

- **Photo Gallery Setup**:
  - Add or remove images from the `./photos` directory as per your requirement
  - Use `extract_metadata.py` to extract GPS metadata (latitude & longitude) from JPEG images
  - This generates a `photos_metadata.json` file automatically for location tagging

- **Branch Structure**:
  - Use the branch structure in timeline.html to display multiple roles at the same organization
  - Perfect for showing career progression or concurrent positions

- **Deployment**:
  - I highly recommend using [Github Pages](https://pages.github.com/) to deploy (EASIEST WAY)
  - Create a github repository named `<your-github-username>.github.io`
  - Push your code to the `main` branch
  - Your portfolio will be live at `https://<your-github-username>.github.io`


## File Structure
```
cvishakh-portfolio/
├── index.html              # Homepage with hero section and navigation
├── timeline.html           # Career timeline with branch structure
├── photos.html             # Photo gallery with GPS integration
├── blogs.html              # Blog articles from Medium
├── projects.html           # Project showcase
├── README.md              # Project documentation
├── extract_metadata.py     # GPS metadata extraction script
├── photos_metadata.json    # Generated GPS coordinates for photos
├── assets/                # Certificates and documents
├── images/                # Website images and icons
└── photos/                # Photo gallery images
```

## Tools Used
* **[GitHub Pages](https://pages.github.com/)** – To host the static website (HTML, CSS, JS)
* **[Google Fonts](https://fonts.google.com/)** – For custom web typography
* **[Pillow (PIL)](https://python-pillow.org/)** – To extract EXIF GPS data from images in Python
* **[JSON](https://www.json.org/json-en.html)** – To store and manage photo metadata
* **Font Awesome** – For social media and icon integration

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

⭐ Star this project if you find it helpful! 

