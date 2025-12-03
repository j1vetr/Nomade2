# Design Guidelines: Maison Nomade Tourism Contact Page

## Project Overview
A modern, mobile-responsive single-page contact website for Maison Nomade Tourism (English only).

## Visual Design System

### Color Palette
**Background**: #1e2e52 (fixed, dark navy blue)
**Content Colors**: 
- White for primary text and buttons
- Light gray tones for secondary text and helper content
- Subtle opacity variations for depth

### Typography
**Font Family**: Inter or Poppins (modern, clean sans-serif)
**Hierarchy**:
- Title: Large, bold, uppercase
- Helper text: Medium, regular weight
- Footer: Small, gray text
- Buttons: Medium, semi-bold

### Layout Structure
**Vertical Flow** (top to bottom):
1. Logo (provided image: logo_1760818509957.png)
2. Main title
3. Contact buttons grid (5 buttons)
4. Helper description text
5. Footer copyright

**Centering**: All content vertically and horizontally centered using full viewport height (min-h-screen, flex, items-center, justify-center)

**Responsive Grid**:
- Mobile: Single column layout
- Desktop: Two-column grid for buttons

## Component Specifications

### Contact Buttons (5 total)
**Buttons with links**:
1. Telegram → https://t.me/faklllp
2. WhatsApp → https://wa.me/375333712473
3. Instagram → https://www.instagram.com/maison.nomade.tourism/
4. Website → https://maison-nomade-tourism.com/
5. Phone → tel:+375333712473

**Button Design**:
- Wide, rounded corners (generous border-radius)
- Soft shadow for depth
- Icons on left (Telegram, WhatsApp, Instagram, Website/Globe, Phone icons)
- Arrow icon (→) on right
- Smooth hover/tap effects: scale-[1.03] with subtle glow/shimmer
- External links open in new tab (target="_blank", rel="noopener noreferrer")
- tel links open natively

## Content (English)

- **Title**: "CHOOSE A CONVENIENT MESSENGER TO CONTACT US"
- **Helper**: "Make your trip easier with our support team that works flawlessly and personally"
- **Buttons**: Telegram, WhatsApp, Instagram, Website, Call us
- **Footer**: ©2025 MAISON NOMADE

## Animations & Interactions

### Entry Animation
Smooth fade-in effect for all elements on page load

### Button Interactions
- Hover/tap: Slight scale increase (scale-[1.03])
- Subtle glow or shimmer effect on hover
- Smooth transitions for all state changes

### Mobile Behavior
Page must display immediately in full viewport on mobile devices without scrolling

## Technical Requirements

### SEO & Schema
Include JSON-LD Schema (Organization type):
- Organization name: "Maison Nomade Tourism"
- URL: https://maison-nomade-tourism.com/
- Social profiles: Instagram, LinkedIn
- Contact: +375333712473, info@mn-tourism.com

### Accessibility
- HTML lang attribute updates with language selection
- Proper semantic HTML structure
- Touch-friendly button sizes for mobile

## Images
**Logo**: Use provided logo image (logo_1760818509957.png) at top of page, appropriate size for mobile and desktop viewing

**No Hero Image**: This is a contact-focused page with centered content, no large hero section needed