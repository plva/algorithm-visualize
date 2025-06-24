# Algorithm Visualizations

Interactive step-by-step visualizations of algorithms and data structures. This project helps learners understand complex algorithms through animated, interactive demonstrations.

## 🌟 Features

- **Step-by-Step Animations**: Watch algorithms execute frame by frame
- **Interactive Controls**: Play, pause, and step through at your own pace
- **Educational Focus**: Detailed explanations of algorithm logic
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface built with modern web technologies

## 🚀 Live Demo

Visit the live site: [https://plva.github.io/algorithm-visualize](https://plva.github.io/algorithm-visualize)

## 📋 Available Visualizations

### Currently Available

#### Dynamic Programming
- **min-cost-climbing-stairs**: Dynamic programming solution with step-by-step visualization of minimum cost path calculation
- **pascals-triangle-row**: Visualize the generation of a specific row in Pascal's Triangle using dynamic programming

### Coming Soon
- More dynamic programming problems
- Graph algorithms
- Sorting algorithms
- Tree traversals
- And many more!

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
algorithm-visualize/
├── index.html          # Main landing page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript functionality
├── README.md           # This file
├── problems/           # Individual problem visualizations
│   ├── min-cost-climbing-stairs.html  # Min Cost Climbing Stairs visualization
│   └── pascals-triangle-row.html      # Pascal's Triangle Row visualization
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/plva/algorithm-visualize.git
   cd algorithm-visualize
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Visit the site**
   - Navigate to `http://localhost:8000` (if using a local server)
   - Or just open `index.html` directly in your browser

## 📝 Adding New Visualizations

To add a new problem visualization:

1. **Create the visualization file**
   - Add a new HTML file in the `problems/` directory
   - Name it with the problem number (e.g., `123.html`)

2. **Update the problems list**
   - Edit `script.js` and add the new problem to the `problems` array
   - Include: id, title, description, difficulty, tags, and filename

3. **Test locally**
   - Open the new visualization file in your browser
   - Ensure it works correctly and is responsive

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add visualization for problem #123"
   git push origin main
   ```

## 🎨 Customization

### Styling
- Modify `styles.css` to change colors, fonts, and layout
- CSS custom properties (variables) are used for easy theming
- The design is fully responsive and mobile-friendly

### Adding Features
- Edit `script.js` to add new interactive features
- The code is modular and well-commented for easy extension

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-visualization
   ```
3. **Add your visualization**
4. **Test thoroughly**
5. **Submit a pull request**

### Guidelines for New Visualizations

- Keep the HTML structure consistent with existing visualizations
- Use semantic HTML and accessible design patterns
- Ensure the visualization is responsive and works on mobile
- Include clear explanations and comments in your code
- Test across different browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the need for better algorithm visualization tools
- Built for the algorithm learning community
- Uses modern web standards and best practices

## 📞 Contact

- **GitHub**: [@plva](https://github.com/plva)
- **Issues**: [GitHub Issues](https://github.com/plva/algorithm-visualize/issues)

## Sanity Check

To verify that your environment is set up correctly and all workflows are working, run:

```bash
npm run sanity
```

This script will:
- Run all tests
- Build the project for production
- Report success if everything passes

You should see:

```
🧪 Running tests...
🏗️ Building project...
✅ All sanity checks passed!
```

---

⭐ If you find this project helpful, please give it a star on GitHub! 