Drivour 🚗✨
Drive. Discover. Devour.

Transform boring point-to-point navigation into an exploration experience. Drivour shows you trending spots, hidden gems, food, shopping, and chill places along your route — all curated and categorized.

🚧 Currently in MVP Development — Contributors Welcome!

The Problem We're Solving
Google Maps tells you the fastest route. We tell you the most interesting route.

Instead of just "Banjara Hills → Gachibowli in 30 mins," Drivour shows you:

🍽️ That trending biryani spot everyone's posting about
☕ A hidden cafe perfect for a quick break
📸 Instagrammable locations along the way
🛍️ Local markets worth a detour
Example: Your weekend drive becomes a curated experience with 8-10 stops instead of just a commute.

Core Features (Roadmap)
Phase 1: MVP (In Progress) ✅
 Route input (start/end)
 Google Maps integration
 Display POIs along route
 Basic filters (category, distance)
 Save routes locally
Phase 2: Discovery
 Instagram scraping for trending spots
 Trending score algorithm
 Custom categories (hidden gems, photogenic)
 User accounts & cloud save
 Social proof integration
Phase 3: Intelligence
 Personalization (learn preferences)
 Route optimization
 Group trip planning
 Post-trip analytics & sharing
 Gamification
Tech Stack
Frontend:

React Native (Expo)
React Navigation
React Native Maps
Zustand (state management)
Backend (Coming Soon):

Node.js + Express
PostgreSQL + PostGIS
Redis (caching)
n8n (scraping automation)
APIs:

Google Maps Platform
Instagram/Social scraping
Zomato/Swiggy (food data)
Getting Started
Prerequisites
Node.js 18+ & npm
Expo Go app (iOS/Android) for testing
Git
Installation
# Clone the repo
git clone https://github.com/iamnawin/drivour.git
cd drivour

# Install dependencies
npm install

# Start development server
npm start
Testing on Your Phone
Install Expo Go from App Store or Play Store
Scan the QR code from the terminal
App loads instantly on your phone!
Contributing
We're actively looking for contributors! Here's how you can help:

🎨 Design & UX
UI/UX improvements
Icon & logo design
Branding & marketing materials
User flow optimization
💻 Frontend Development
New screens (Discovery, Route Builder, Navigation)
Component library
Animations & transitions
Offline mode
🔧 Backend Development
API development (Node.js)
Database schema (PostgreSQL + PostGIS)
Scraping workflows (n8n, Python)
Trending algorithms
📊 Data & ML
Trending detection algorithms
Personalization models
Route optimization
POI scoring systems
📝 Documentation
Code documentation
User guides
API documentation
Tutorial videos
🧪 Testing & QA
Manual testing
Automated tests
Bug reports
Feature suggestions
Quick Contribution Guide
Fork the repo
Create a feature branch: git checkout -b feature/amazing-feature
Commit changes: git commit -m 'Add amazing feature'
Push to branch: git push origin feature/amazing-feature
Open a Pull Request
See CONTRIBUTING.md for detailed guidelines.

Project Structure
drivour/
├── src/
│   ├── screens/          # App screens (RouteInput, Discovery, etc.)
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation setup
│   ├── services/         # API calls, data services
│   ├── utils/            # Helper functions
│   └── assets/           # Images, fonts
├── App.js                # Main app entry
└── package.json
Roadmap & Milestones
Week 1-2: Core MVP

✅ Project setup
⏳ Google Maps integration
⏳ Basic route display
Week 3-4: Discovery Layer

⏳ Filter system
⏳ Category display
⏳ Trending data
Week 5-8: Backend & Intelligence

⏳ User accounts
⏳ Cloud saving
⏳ Personalization
Week 9-12: Polish & Launch

⏳ UI refinement
⏳ Performance optimization
⏳ Beta testing
⏳ Public launch
Community & Support
Issues: Found a bug? Open an issue
Discussions: Ideas or questions? Start a discussion
Discord: Join our Discord (Coming soon)
Twitter: @drivour (Coming soon)
Vision
Drivour isn't just a navigation app — it's a discovery platform that makes every drive an adventure. We're building this in public, with the community, for the community.

Long-term Goals
Expand to 50+ cities in India
Add curated route templates
Social features (share routes, follow friends)
Monetization via local business partnerships
API for third-party integrations
License
MIT License - feel free to use, modify, and distribute.

Credits & Acknowledgments
Created by: Naveen (@AIwithnobrain)

Built with the community — see CONTRIBUTORS.md for everyone who's helped make Drivour possible.

Special thanks to:

Expo team for amazing dev tools
Google Maps Platform
Open source community
Star History
If you like this project, give it a ⭐ to show support!

Ready to contribute? Check out CONTRIBUTING.md and join us in building the future of route discovery! 🚀
