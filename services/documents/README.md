# Boilerplate Express TypeScript Project

This is a boilerplate Express.js application written in TypeScript, configured with Biome for code linting and formatting, and Jest with Supertest for testing.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the application in development mode with hot reloading:
```bash
npm run dev
```

The server will start on port 3000 by default.

## Building

To build the project for production:
```bash
npm run build
```

## Running

To run the built application:
```bash
npm start
```

## Testing

To run the tests:
```bash
npm test
```

Tests use Jest and Supertest to test the Express routes.

## Code Quality

### Linting
To check for linting issues:
```bash
npm run lint
```

### Formatting
To format the code:
```bash
npm run format
```

## Project Structure

- `src/`: Source code directory
  - `app.ts`: Main application file
- `tests/`: Test files
  - `app.test.ts`: Tests for the app
- `dist/`: Compiled JavaScript output (after build)
- `biome.json`: Biome configuration
- `jest.config.js`: Jest configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## Troubleshooting

- Ensure Node.js and npm are installed.
- If you encounter TypeScript errors, check `tsconfig.json`.
- For Biome issues, refer to the `biome.json` configuration.
- For test issues, check `jest.config.js`.