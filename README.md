# Rehabilitation Aids - Orthopedic & Rehabilitation Products Website

A responsive static website for Rehabilitation Aids, a Delhi-based manufacturer and exporter of orthopedic appliances, rehabilitation supports, fracture aids, and hospital supplies.

## 📁 Project Structure

```
Project-2-/
├── index.html          # Home page with company overview and product highlights
├── products.html       # Product catalog with filters and pricing
├── about.html          # Company story, mission, team, and achievements
├── contact.html        # Contact form and office details
├── styles.css          # Responsive layout and visual design
├── script.js           # Navigation and interactive page behavior
└── README.md           # Project documentation
```

## 🎯 Features

### Home Page (`index.html`)
  - Hero section with Rehabilitation Aids branding
- Manufacturing and quality commitment messaging
- Featured rehabilitation product categories
- Customer testimonial section
- Clear call-to-action to products and contact
- Local image assets and responsive layout

### Products Page (`products.html`)
- Rehabilitation and orthopedic product catalog
- Filter by category and price range
- Product cards with local image support
- Add to cart interaction (demo)
- Responsive product layout for desktop and mobile

### About Page (`about.html`)
- Company history and manufacturing focus
- Mission, vision, and values section
- Team profiles and service commitment
- Achievement statistics and business credibility

### Contact Page (`contact.html`)
- Office address and Delhi contact details
- Phone and email information for enquiries
- Contact form with submission feedback
- FAQ section for common buyer questions
- Local image assets for office/map visuals

## 🚀 Getting Started

### Open the Website Locally

1. **Recommended: Local server**
   ```bash
   cd /workspaces/Project-2-
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

2. **Direct open**
   - Open `index.html` directly in a browser
   - Note: some interactions may be limited under `file://`

### Recommended Browsers
- Chrome
- Firefox
- Edge
- Safari
- Mobile browsers on Android and iOS

## 📦 Dependencies

This project uses no local npm dependencies.

- `styles.css` for all styling
- `script.js` for menu, filtering, and form behavior
- Font Awesome CDN for icons
- Local image assets stored in `assets/images`

## 🛠️ Customization

### Update Company Information
Change the company name, address, email, and phone across:
- `index.html`
- `about.html`
- `contact.html`
- `products.html` (footer section)

### Update Products
Edit the `products` array in `products.html`:

```javascript
const products = [
  {
    id: 1,
    name: "Cervical Collar",
    category: "cervical",
    price: 2999,
    rating: 4.9,
    image: "assets/images/product-5.jpg",
    description: "High-quality cervical collar for neck support during recovery."
  },
  // Add or update product objects...
];
```

### Change Visual Style
Update CSS variables and styles in `styles.css` to change colors, typography, and spacing.

## 📱 Responsive Design

- Mobile-first layout
- Tablet breakpoint for multi-column content
- Desktop layout with full navigation and page sections
- Touch-friendly buttons and responsive images

## ✅ Current Branding and Contact
- Company: Rehabilitation Aids
- Email: `info@rehabilitationaids.net`
- Phone: `+91 95601 67000`
- Address: `D-98, Gali No.2, 3rd Pusta, Sonia Vihar, Delhi 110094`

## 📝 Project Pages

| Page | Purpose |
|------|---------|
| `index.html` | Brand introduction, product categories, testimonials |
| `products.html` | Browse rehabilitation product catalog |
| `about.html` | Company story, mission, team, achievements |
| `contact.html` | Contact details, form, FAQ |

## 🌟 Notes

- All images are served locally from `assets/images`
- The site is built with static HTML, CSS, and vanilla JavaScript
- The product list is easily customizable in `products.html`

## ⚠️ Important

This website is a static project for demonstration and marketing. It does not include a backend or live e-commerce checkout.


✨ **Modern Design** - Professional gradient backgrounds and animations
📱 **Mobile First** - Optimized for all device sizes
🎯 **User Friendly** - Intuitive navigation and clear CTAs
⚡ **Fast Loading** - Minimal dependencies, pure vanilla JavaScript
🔧 **Easy to Customize** - Well-organized code with clear sections
♿ **Accessible** - Semantic HTML, keyboard navigation support

## 📞 Contact Information (Default)

- **Email**: info@rehabilitationaids.net
- **Phone**: +91 95601 67000
- **Address**: D-98, Gali No.2, 3rd Pusta, Sonia Vihar, Delhi 110094
- **Hours**: Mon-Sat 9AM-7PM IST

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

**Created for**: Rehabilitation Aids – Orthopedic Appliances & Rehabilitation Products  
**Last Updated**: 2024  
**Version**: 1.0