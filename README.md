# OrthoCare India - Orthopedic & Rehabilitation Products Website

A professional, responsive website for OrthoCare India, an established orthopedic and rehabilitation products company based in Mumbai. This website showcases products, company information, and provides customer contact capabilities.

## 📁 Project Structure

```
Project-2-/
├── index.html          # Home page
├── products.html       # Products catalog with filtering
├── about.html          # Company information and team
├── contact.html        # Contact form and support information
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript functionality and interactivity
└── README.md           # This file
```

## 🎯 Features

### Home Page (`index.html`)
- Eye-catching hero section with call-to-action
- Why Choose RehabCare section with 4 feature highlights
- Featured products showcase (6 products)
- Customer testimonials with ratings
- Call-to-action section
- Responsive navigation bar
- Professional footer with social links

### Products Page (`products.html`)
- Complete product catalog with 15 products
- Filter by category (Footwear, Braces, Mobility, Exercise, Back Support, Compression)
- Filter by price range
- Product cards with ratings and pricing
- Add to cart functionality
- Responsive grid layout

### About Page (`about.html`)
- Company story and mission
- Mission, Vision, and Values cards
- Expert team member profiles
- Achievement statistics
- Industry certifications
- Professional imagery

### Contact Page (`contact.html`)
- Contact information (address, phone, email, hours)
- Professional contact form with validation
- Frequently Asked Questions (FAQ)
- Responsive design for mobile
- Form success message

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: `#0066cc` - Main actions and highlights
- **Secondary Cyan**: `#00b4d8` - Accents and secondary actions
- **Success Green**: `#06d6a0` - Positive feedback
- **Gradient Purple**: Used for hero sections and backgrounds

### Responsive Design
- **Desktop**: Full multi-column layouts
- **Tablet**: Optimized 2-column layouts
- **Mobile**: Single column layouts with responsive navigation
- **Hamburger Menu**: Mobile-friendly navigation

### Interactive Elements
- Smooth scrolling navigation
- Hover animations on cards and buttons
- Mobile hamburger menu
- Back-to-top button
- Intersection Observer animations
- Counter animations for achievements
- Form validation

## 🚀 Getting Started

### Opening the Website

1. **Using a Local Server** (Recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if http-server installed)
   http-server
   ```
   Then visit: `http://localhost:8000`

2. **Direct File Opening**:
   - Simply open `index.html` in a web browser
   - Note: Some features may have limitations with the `file://` protocol

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📦 Dependencies

All dependencies are from CDN, no local installation required:

- **Font Awesome Icons**: For beautiful icons throughout the site
- **Google Fonts**: Modern, readable fonts (via system fonts)
- No jQuery or other frameworks - Pure vanilla JavaScript

## 🛠️ Customization

### Update Company Information
Edit the following files to customize company details:

1. **Company Name**: Replace "RehabCare" with your company name
2. **Contact Info**: Update email, phone, and address in:
   - `index.html` (footer)
   - `contact.html` (contact section)
3. **Products**: Modify the products array in `products.html`
4. **Team**: Update team member information in `about.html`
5. **Social Links**: Update footer social media links in all pages

### Add/Remove Products

Edit the `products` array in `products.html`:

```javascript
const products = [
    {
        id: 1,
        name: "Product Name",
        category: "footwear", // or braces, mobility, etc.
        price: 129.99,
        rating: 4.8,
        description: "Product description here"
    },
    // Add more products...
];
```

### Modify Colors

Update CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00b4d8;
    --success-color: #06d6a0;
    /* ... more colors ... */
}
```

## 📱 Mobile Optimization

The website is fully responsive with breakpoints at:
- **768px**: Tablet view (hamburger menu activates)
- **480px**: Mobile phone view (single column layouts)

## ✅ Product Categories Available

1. **Orthopedic Footwear** - Specialized shoes and insoles
2. **Braces & Supports** - Knee, ankle, wrist, elbow supports
3. **Mobility Aids** - Canes, walkers, crutches
4. **Exercise Equipment** - Resistance bands, foam rollers, massage guns
5. **Back Support** - Lumbar support, posture correctors, neck braces
6. **Compression Garments** - Compression socks and sleeves

## 🔒 Security Features

- HIPAA compliance ready (for healthcare data)
- Form input validation
- Cross-site scripting (XSS) safe practices
- Responsive security headers ready

## 📊 SEO Ready

- Semantic HTML structure
- Meta tags for search engines
- Mobile-friendly design
- Fast loading with CSS/JS optimization

## 🎓 Key JavaScript Features

1. **Mobile Menu Toggle**: Hamburger menu for mobile devices
2. **Active Link Highlighting**: Shows current page in navigation
3. **Smooth Scrolling**: Navigation links scroll smoothly to sections
4. **Scroll Animations**: Cards animate in when scrolled into view
5. **Back-to-Top Button**: Appears after scrolling down
6. **Form Validation**: Client-side form validation
7. **Counter Animation**: Animated statistics on achievement section

## 📝 Pages & Sections

| Page | Sections | Purpose |
|------|----------|---------|
| index.html | Hero, Features, Products, Testimonials, CTA | Landing page |
| products.html | Filters, Product Grid | Browse & filter products |
| about.html | Company Story, Mission, Team, Achievements | Company information |
| contact.html | Info, Contact Form, FAQ | Get in touch |

## 🎯 Call-to-Action Points

- Hero section button → Products page
- "View All Products" button → Products page
- "Shop Now" in CTA section → Products page
- Contact links in footer → Contact page

## 🔍 Popular Products

1. Orthopedic Running Shoes - $129.99
2. Premium Knee Brace - $79.99
3. Aluminum Folding Walker - $149.99
4. Therabody Massage Gun - $199.99
5. Lumbar Support Pillow - $89.99
6. Physical Therapy Resistance Bands - $24.99

## 🌟 Features Highlight

✨ **Modern Design** - Professional gradient backgrounds and animations
📱 **Mobile First** - Optimized for all device sizes
🎯 **User Friendly** - Intuitive navigation and clear CTAs
⚡ **Fast Loading** - Minimal dependencies, pure vanilla JavaScript
🔧 **Easy to Customize** - Well-organized code with clear sections
♿ **Accessible** - Semantic HTML, keyboard navigation support

## 📞 Contact Information (Default)

- **Email**: info@orthocareindia.com
- **Phone**: +91 (22) 4089-5500
- **Address**: D-12, Mahindra Industrial Estate, Kandivali East, Mumbai 400101
- **Hours**: Mon-Fri 9AM-6PM IST

## 📄 License

This website template is created for rehabilitation aids and orthopedic products businesses.

## 🚀 Future Enhancements

Potential additions to the website:
- E-commerce shopping cart integration
- Payment gateway integration
- Product image gallery
- Customer reviews system
- Blog section
- Live chat support
- Appointment booking
- Product comparison tool
- Newsletter signup
- Multiple language support

## 🤝 Support

For customization help or technical support, refer to the code comments and structure:
- CSS is organized by sections
- JavaScript functions are clearly labeled
- HTML uses semantic elements
- All code follows best practices

---

**Created for**: Rehabilitation Aids & Orthopedic Products Company  
**Last Updated**: 2024  
**Version**: 1.0