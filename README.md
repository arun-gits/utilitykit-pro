# UtilityKit Pro

A collection of powerful client-side utility tools built with Next.js, React, and TypeScript.

## Features

- **Text Tools**
  - Copy Cleaner - Clean and format text
  - Text Divider - Split text into sentences
  - Character Counter - Count characters, words, and sentences
  - Case Converter - Convert text to various cases

- **Data Tools**
  - Date Difference Calculator - Calculate time between dates
  - Decimal ↔ Fraction Converter - Convert between number formats
  - Timezone Converter - View time in different timezones
  - Fake Data Generator - Generate random test data
  - ASCII Table Viewer - View ASCII character codes

## Key Features

- All tools run entirely in the browser
- No data is sent to any server
- Instant results with no loading time
- Copy results with one click
- Responsive design for all devices

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Utilities:** clsx

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/utilitykit-pro.git
   cd utilitykit-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── [tool]/            # Tool pages
├── components/            # Shared components
└── styles/               # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 