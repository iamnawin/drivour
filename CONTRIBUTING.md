# Contributing to Drivour

First off, **thank you** for considering contributing to Drivour! 🎉

We're building this in public and every contribution matters — whether it's code, design, documentation, or just spreading the word.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)

---

## Code of Conduct

**Be kind. Be respectful. Be collaborative.**

We're all here to build something cool together. Harassment, discrimination, or toxic behavior of any kind will not be tolerated.

---

## How Can I Contribute?

### 🐛 Report Bugs

Found a bug? [Open an issue](https://github.com/iamnawin/drivour/issues/new) with:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your device/OS info

### 💡 Suggest Features

Have an idea? We'd love to hear it!
- Check [existing issues](https://github.com/iamnawin/drivour/issues) first
- Open a new issue with tag `enhancement`
- Describe the problem it solves
- Explain how it works

### 🎨 Improve Design

Design contributions are highly valued:
- UI mockups (Figma, Sketch, etc.)
- Icon designs
- Branding materials
- User flow diagrams

Share in Discussions or create an issue with tag `design`.

### 📝 Write Documentation

Help others understand Drivour:
- Improve README clarity
- Add code comments
- Write tutorials or guides
- Create video walkthroughs

### 💻 Write Code

Ready to code? Here's what we need:

**High Priority:**
- Google Maps integration
- Filter system (category, distance, time)
- Route optimization algorithm
- Trending score calculation

**Good First Issues:**
- Look for `good first issue` label
- Usually small, well-defined tasks
- Great for getting familiar with codebase

---

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git
- Expo Go app on your phone
- VS Code (recommended)

### Step-by-Step Setup

```bash
# 1. Fork the repo on GitHub

# 2. Clone YOUR fork
git clone https://github.com/iamnawin/drivour.git
cd drivour

# 3. Add upstream remote (original repo)
git remote add upstream https://github.com/ORIGINAL_OWNER/drivour.git

# 4. Install dependencies
npm install

# 5. Start development server
npm start

# 6. Scan QR code with Expo Go app
```

### Project Structure Overview

```
src/
├── screens/          # Full-screen views (RouteInput, Discovery, etc.)
├── components/       # Reusable UI components
│   ├── common/       # Generic components (Button, Card, etc.)
│   └── specific/     # Feature-specific components
├── navigation/       # Navigation config
├── services/         # API calls, external services
├── utils/            # Helper functions, constants
└── assets/           # Images, fonts, icons
```

### Running Tests (Coming Soon)

```bash
npm test
```

---

## Coding Guidelines

### Style Guide

We use JavaScript Standard Style with minor tweaks:

**General:**
- Use functional components (React Hooks)
- Use `const` over `let` when possible
- Destructure props
- Keep functions small and focused

**Naming:**
- Components: `PascalCase` (e.g., `RouteInputScreen`)
- Variables/functions: `camelCase` (e.g., `getUserLocation`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`)
- Files: Match component name (e.g., `RouteInputScreen.js`)

**Example:**

```javascript
// ✅ Good
const RouteCard = ({ route, onPress }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handlePress = () => {
    setIsExpanded(!isExpanded);
    onPress(route.id);
  };
  
  return (
    <TouchableOpacity onPress={handlePress}>
      {/* ... */}
    </TouchableOpacity>
  );
};

// ❌ Bad
function routecard(props) {
  var expanded = false;
  
  return (
    <TouchableOpacity onPress={() => { 
      expanded = !expanded; 
      props.onPress(props.route.id); 
    }}>
      {/* ... */}
    </TouchableOpacity>
  );
}
```

### Component Structure

1. Imports (React, libraries, local)
2. Component definition
3. Helper functions (if small)
4. Styles (StyleSheet at bottom)

```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/common/Button';

export default function MyScreen({ navigation }) {
  const [state, setState] = useState(null);
  
  const handleAction = () => {
    // logic here
  };
  
  return (
    <View style={styles.container}>
      <Text>Content</Text>
      <Button onPress={handleAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

### Comments

- Use comments to explain **why**, not **what**
- Comment complex logic or algorithms
- Add JSDoc for utility functions

```javascript
// ❌ Bad - obvious
// Set the user name
setUserName('John');

// ✅ Good - explains reasoning
// Using default name until user completes onboarding
setUserName('John');
```

---

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

**Format:**
```
<type>(<scope>): <subject>

<body (optional)>

<footer (optional)>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, missing semicolons)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance (dependencies, build)

**Examples:**

```
feat(discovery): add category filter component

Adds a new FilterChip component that allows users to filter 
places by category (food, shopping, etc.)

Closes #23
```

```
fix(navigation): resolve route input validation bug

Users can now submit empty start location and app won't crash

Fixes #45
```

```
docs: update README with installation steps
```

---

## Pull Request Process

### Before Submitting

1. **Create a branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Test your changes:**
   - Run on iOS and Android (if possible)
   - Check for console errors
   - Verify UI on different screen sizes

3. **Update documentation:**
   - Add/update comments
   - Update README if needed
   - Add to CHANGELOG (if applicable)

### Submitting PR

1. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open PR on GitHub:**
   - Clear title describing the change
   - Reference related issues (`Fixes #123`)
   - Add screenshots/GIFs for UI changes
   - Fill out the PR template

3. **PR Template:**
   ```markdown
   ## What does this PR do?
   Brief description of changes
   
   ## Type of change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   
   ## Screenshots (if applicable)
   [Add screenshots here]
   
   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-reviewed code
   - [ ] Commented complex parts
   - [ ] No new warnings
   - [ ] Tested on device
   
   ## Related Issues
   Closes #123
   ```

### Review Process

- Maintainers will review within 48-72 hours
- Address feedback by pushing new commits
- Once approved, maintainers will merge
- Your contribution will be acknowledged in CONTRIBUTORS.md!

---

## Issue Guidelines

### Creating Issues

**Use templates:** We have templates for:
- Bug reports
- Feature requests
- Documentation improvements

**Good issue example:**

```
**Title:** Map view crashes when selecting multiple categories

**Description:**
When I select "Food" and "Shopping" categories simultaneously, 
the map view crashes on Android.

**Steps to reproduce:**
1. Go to Discovery screen
2. Enable "Food" filter
3. Enable "Shopping" filter
4. App crashes

**Expected:**
Both filters should work together

**Actual:**
App crashes with error: [paste error here]

**Environment:**
- Device: Samsung Galaxy S21
- OS: Android 12
- App version: 0.1.0
```

### Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or improvement
- `documentation`: Documentation needed
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `question`: Further information requested

---

## Questions?

**Stuck? Need help?**
- Check [existing issues](https://github.com/iamnawin/drivour/issues)
- Ask in [Discussions](https://github.com/iamnawin/drivour/discussions)
- Reach out on Discord (coming soon)

---

## Recognition

Every contributor gets:
- Credit in CONTRIBUTORS.md
- Mention in release notes
- Our eternal gratitude! 🙏

**Top contributors** may be invited to join the core team.

---

## Thank You!

Your contribution makes Drivour better for everyone. Let's build something amazing together! 🚀

**Happy coding!** 💻✨
