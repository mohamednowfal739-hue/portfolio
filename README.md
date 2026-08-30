# Portfolio - Mohamed Nowfal M.S

A modern, fully responsive personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer and Computer Science student.

## Features

✨ **Modern Design**
- Clean glassmorphism UI with smooth animations
- Responsive design for all devices
- Beautiful gradient elements and hover effects
- Smooth scroll progress indicator

🎯 **Sections**
- Hero section with typing animation
- About me section with statistics
- Skills showcase with 6+ technical skills
- Projects grid highlighting key projects
- Experience & Education timeline
- Certifications section
- Contact form with email integration

⚙️ **Functionality**
- Mobile-responsive navigation with hamburger menu
- Smooth scroll navigation
- Intersection Observer for reveal animations
- Dynamic typing effect
- Scroll progress bar
- Working contact form

## Project Structure

```
portfolio/
├── index.html       # Main HTML file
├── style.css        # All styling (single file)
├── script.js        # JavaScript functionality
├── profile.jpg      # Profile photo (add your own)
└── README.md        # This file
```

## How to Use

1. **Clone or Download**
   ```bash
   git clone https://github.com/mohamednowfal739-hue/portfolio.git
   cd portfolio
   ```

2. **Add Your Profile Photo**
   - Replace `profile.jpg` with your own profile photo
   - If no image is found, the site shows initials "MN"

3. **Open in Browser**
   - Open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`

4. **Deploy to GitHub Pages**
   - Push to your `portfolio` repository
   - Go to Settings → Pages
   - Set source to `main` branch
   - Your portfolio will be live at `https://yourusername.github.io/portfolio/`

## Customization

### Update Personal Information

Edit `index.html` to change:
- Your name and title
- About me text
- Skills list
- Projects
- Contact email and phone
- Social media links

### Change Colors

Edit CSS variables in `style.css`:
```css
:root {
  --peach: #C96852;           /* Primary color */
  --peach-dark: #9F4938;      /* Primary dark */
  --bg: #FAF6F2;              /* Background */
  --text: #211A17;            /* Text color */
  /* ... more colors */
}
```

### Modify Styling

All CSS is in `style.css`. Key sections:
- Layout: Grid and Flexbox layouts
- Components: Button, card, and form styles
- Animations: Smooth transitions and keyframe animations
- Responsive: Media queries for mobile optimization

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
  - CSS Grid & Flexbox
  - CSS Variables
  - Media Queries
  - Keyframe Animations
- **Vanilla JavaScript** - No dependencies
  - Typing animation effect
  - Intersection Observer API
  - Mobile menu toggle
  - Form handling

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- ⚡ Lightweight - Single HTML, CSS, and JS file
- 🎯 Optimized - Minimal dependencies
- 📱 Mobile-first - Responsive design
- ♿ Accessible - Semantic HTML and ARIA labels

## Animations

- Scroll progress bar animation
- Reveal animations on scroll (Intersection Observer)
- Typing effect for hero section
- Hover effects on all interactive elements
- Smooth transitions throughout

## Contact Section

The contact form opens the default email client with:
- Pre-filled subject line
- Pre-filled body with name and email
- Your contact email as recipient

To change the recipient email, edit line in `script.js`:
```javascript
window.location.href = `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;
```

## Future Enhancements

- [ ] Add blog section
- [ ] Integrate with actual email service
- [ ] Add dark mode toggle
- [ ] Portfolio filter by category
- [ ] Testimonials section
- [ ] Statistics/Analytics
- [ ] Language switcher
- [ ] PDF resume download

## License

MIT License - Feel free to use this as a template for your own portfolio

## Author

**Mohamed Nowfal M.S**
- Full Stack Developer
- B.Tech Computer Science & Business Systems
- GitHub: [@mohamednowfal739-hue](https://github.com/mohamednowfal739-hue)
- LinkedIn: [Mohamed Nowfal](https://www.linkedin.com/in/mohamed-nowfal-a9b756328)
- Email: mohamednowfal739@gmail.com

---

**Made with ❤️ using HTML, CSS & JavaScript**
