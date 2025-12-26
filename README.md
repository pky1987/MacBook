# MacBook Pro Showcase

A modern, interactive web application showcasing the MacBook Pro with 3D models, performance highlights, and AI features. Built with React, Three.js, and cutting-edge web technologies.

![MacBook Pro](public/title.png)

## ✨ Features

### 🖥️ Interactive 3D Product Viewer
- **3D MacBook Models**: View detailed 3D models of MacBook Pro 14" and 16" in Silver and Space Black
- **Real-time Customization**: Switch between colors and sizes with smooth transitions
- **Dynamic Screen Content**: Watch feature videos and gameplay directly on the 3D model screen

### 🚀 Performance Highlights
- **Visual Performance Gallery**: Interactive performance images with smooth animations
- **Technical Specifications**: Showcase of MacBook Pro's capabilities

### 🤖 AI-Powered Features
- **Email AI**: Intelligent email summarization and reply drafting
- **Image AI**: AI-powered image generation and editing
- **Summarize AI**: Instant summarization of articles and documents
- **Writing Tool**: AI-assisted content creation and editing

### 📱 Responsive Design
- **Mobile Optimized**: Fully responsive design for all devices
- **Touch Interactions**: Optimized touch controls for mobile users
- **Adaptive Layout**: Dynamic layouts that adapt to screen sizes

### 🎨 Modern UI/UX
- **Smooth Animations**: GSAP-powered animations and transitions
- **Professional Design**: Apple-inspired design language
- **Dark/Light Themes**: Adaptive color schemes

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Modern React with concurrent features
- **Vite** - Fast build tool and development server

### 3D Graphics & Visualization
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - High-performance animation library
- **ScrollTrigger** - GSAP plugin for scroll-based animations

### State Management
- **Zustand** - Lightweight state management solution

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - Fast React development

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mac-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── models/          # 3D model components
│   │   ├── Macbook.jsx
│   │   ├── Macbook-14.jsx
│   │   └── Macbook-16.jsx
│   ├── three/           # Three.js utilities
│   │   ├── ModelSwitcher.jsx
│   │   └── StudioLights.jsx
│   ├── Feature.jsx      # AI features section
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Hero section with video
│   ├── Highlights.jsx   # Performance highlights
│   ├── Navbar.jsx       # Navigation bar
│   ├── Performance.jsx  # Performance gallery
│   ├── ProductView.jsx  # 3D product viewer
│   └── Showcase.jsx     # Product showcase
├── store/               # State management
│   └── index.js         # Zustand store
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles

public/                  # Static assets
├── models/              # 3D model files (.glb)
├── videos/              # Video assets
├── fonts/               # Custom fonts
└── *.png/svg            # Images and icons

constant/                # Application constants
└── index.js
```

## 🎮 Usage

### 3D Model Interaction
- **Color Selection**: Click on color swatches to change MacBook color
- **Size Selection**: Toggle between 14" and 16" models
- **Rotation**: Drag to rotate the 3D model (desktop)
- **Zoom**: Scroll to zoom in/out on the model

### Navigation
- **Smooth Scrolling**: Navigate through different sections
- **Responsive Menu**: Mobile-friendly navigation menu

### Performance Gallery
- **Interactive Images**: Hover/click on performance images for details
- **Scroll Animations**: Images animate into view as you scroll

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Test on multiple devices and browsers
- Ensure responsive design works across all breakpoints

## 📄 License

This project is for educational and demonstration purposes. All assets and branding are property of Apple Inc.

## 🙏 Acknowledgments

- **Apple Inc.** for the MacBook Pro design inspiration
- **Three.js** community for 3D graphics capabilities
- **React** ecosystem for modern web development tools

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React, Three.js, and modern web technologies**
