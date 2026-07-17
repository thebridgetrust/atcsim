[![CI](https://github.com/thebridgetrust/atcsim/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/thebridgetrust/atcsim/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

# AeroControl

AeroControl is a modernized browser-based air traffic control simulator.

The project is under active development. The public product name is **AeroControl**, while the GitHub repository remains named `atcsim` during the identity transition.

## Developer quick start

### Requirements

- Git
- Node.js 24
- npm 11

### Installation

```bash
git clone https://github.com/thebridgetrust/atcsim.git
cd atcsim
npm ci
npm run build
npm start
```

The application is then available at:

```text
http://localhost:3003
```

## Testing

Run the complete test suite with coverage:

```bash
npm test
```

Run the production build:

```bash
npm run build
```

Continuous integration runs changed-lines linting, the production build, and the test suite for pull requests targeting `main`.

## Documentation

- [Command reference](documentation/commands.md)
- [Airport guide directory](documentation/airport-guides/airport-guide-directory.md)
- [Airport format](documentation/airport-format.md)
- [Airport file standards](documentation/airport-file-standards.md)
- [Development tools](tools/README.md)

## Project heritage

AeroControl is derived from the open-source [openScope Air Traffic Control Simulator](https://github.com/openscope/openscope).

The original project and its contributors remain acknowledged through the repository history, copyright notices, and MIT license. AeroControl is an independent modernization effort and is not presented as the official openScope project.

## License

This project is distributed under the [MIT License](LICENSE.md).
