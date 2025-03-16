# FireCrawl App Generator

FireCrawl App Generator is an application that transforms your ideas into code with a simple text prompt. Select a template, describe what you want, and watch your application come to life.

![FireCrawl App Generator](https://github.com/firecrawl/app-generator/assets/preview.png)

## Features

- **Text-to-Code Generation**: Describe your application in natural language and get fully functioning code
- **Multiple Templates**: Support for various frameworks and technologies (Next.js, React, Vue.js, Express, React Native)
- **Customizable Output**: Edit and refine the generated code directly in the browser
- **Preview Mode**: See how your application will look and behave without leaving the browser
- **Export Options**: Download your code as a ZIP file or push directly to GitHub

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/firecrawl/app-generator.git
cd app-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Custom components inspired by shadcn/ui
- **Code Highlighting**: react-syntax-highlighter
- **Animation**: Framer Motion

## Project Structure

```
firecrawl/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   │   ├── ui/        # UI components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles and CSS
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   └── templates/     # Application templates
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Inspiration

This project is inspired by platforms like:

- [Bolt.new](https://bolt.new/) - for its streamlined app creation experience
- [Lovable.dev](https://lovable.dev/) - for its interface and code generation approach

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- Thanks to all the open-source projects that made this possible
- Special thanks to the community for their feedback and support 