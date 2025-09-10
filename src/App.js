# Alunim Points System - Hebrew

A daily points management system for Alunim School with Hebrew interface and RTL support.

## Features

- ✅ Hebrew interface with RTL (Right-to-Left) support
- ✅ Daily schedule with time slots
- ✅ Friday double points system (2-20 even numbers)
- ✅ Custom point addition/removal
- ✅ Student management
- ✅ Points history tracking
- ✅ Teacher authentication
- ✅ Responsive design

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/alunim-points-hebrew.git
cd alunim-points-hebrew
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open your browser:**
Visit `http://localhost:3000`

## Usage

### First Time Setup
1. Create an account (יצירת חשבון)
2. Add students (הוסף תלמיד)
3. Start managing daily points

### Daily Points System
- **Monday-Thursday**: 1-10 points
- **Friday**: 2-20 points (even numbers only) - נקודות כפולות!

### Features
- **Custom Points**: Add/remove any amount using the red custom points box
- **Time Slots**: Award points for specific class periods
- **History Tracking**: View complete points history for each student
- **Date Selection**: Manage points for any date

## Project Structure

```
src/
├── App.js                 # Main Hebrew points system component
├── index.css             # Tailwind CSS imports
├── index.js              # React entry point
└── ...
```

## Technologies Used

- **React** - UI Framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Hebrew/RTL Support** - Right-to-left text direction

## Development

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production  
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Adding Features

The main component is in `src/App.js`. Key areas:

- **Authentication**: Login/register forms
- **Student Management**: Add/edit students
- **Points System**: Daily schedule and custom points
- **History**: Points tracking and display

## Customization

### Hebrew Text
All interface text is in Hebrew. To modify:
- Look for text strings in the component
- Update placeholder text, labels, and messages

### School Schedule
To modify class times, update the `timeSlots` array:
```javascript
const timeSlots = [
  { id: '08:00', label: '08:00 - 08:50', name: 'שיעור 1' },
  // Add more time slots...
];
```

### Points Rules
Modify point ranges in `getPointsOptions()` function:
```javascript
const getPointsOptions = (dateString) => {
  if (isFriday(dateString)) {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; // Friday
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Weekdays
};
```

## Deployment

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/alunim-points-hebrew",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Deploy:
```bash
npm run deploy
```

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
```bash
npm i -g vercel
vercel
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

MIT License - feel free to use this for your school!

## Support

For questions or issues:
- Create an issue on GitHub
- Contact: [your-email@example.com]

---

**בהצלחה! (Good luck!)**

Built with ❤️ for Alunim School
