### News App Demo – Quick Start

A React + Vite demo styled with Tailwind CSS, with Pendo instrumentation and optional Firebase setup.

**🌐 Live Demo:** [https://news-app-demo-abd52.web.app](https://news-app-demo-abd52.web.app)

### Prerequisites

- Node.js 24+ (project declares `"engines": { "node": ">=24" }`)
- npm 10/11+ (bundled with Node 24)

### 1) Install

```bash
rm -rf node_modules package-lock.json
npm install
```

### 2) Run in dev

```bash
npm run dev
```

Vite will print a local URL (default `http://localhost:5173`).

### 3) Build & Preview

```bash
npm run build
npm run preview
```

### 4) Lint & Format

```bash
npm run lint        # check
npm run lint:fix    # auto-fix
npm run format      # prettier write
npm run format:check
```

### Pendo

The Pendo agent script is already embedded in `public/index.html` and `index.html`. Initialization runs on app start (`src/App.jsx`). No additional setup is required to see events (e.g., article and category clicks).

### Optional: Firebase

1. (Optional) Deploy to Firebase Hosting:

```bash
npm run build
firebase deploy
```

Project files `.firebaserc` and firebase.json are included; update the project id in `.firebaserc`.

### Troubleshooting

- If you see dependency resolution errors, ensure you’re on Node 24+, then:

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

- Tailwind + Vite are already version-aligned; avoid using legacy peer flags.

### Scripts

- **dev**: start Vite dev server
- **build**: production build
- **preview**: preview build locally
- **lint / lint:fix**: eslint
- **format / format:check**: prettier
