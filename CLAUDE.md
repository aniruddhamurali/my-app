# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aniruddha Murali. The repo contains a React frontend SPA and a Python Flask + Rasa chatbot backend.

## Commands

### Frontend (`my-app/` directory)

```bash
npm start          # Dev server on port 3000
npm run build      # Production build
npm test           # Run tests (interactive watch mode)
npm run deploy     # Build + deploy to GitHub Pages
```

### Backend (`backend/` directory)

```bash
python app.py                    # Run Flask dev server
rasa train                       # Train Rasa chatbot model
rasa run --enable-api            # Start Rasa server
rasa interactive                 # Interactive training session
```

### Docker (repo root)

```bash
docker-compose up --build        # Start both frontend and backend
```

## Architecture

### Frontend (`my-app/src/`)

React SPA with a single route (`/`) rendering a full-page layout. Navigation is hash-based for in-page sections.

- **`App.js`** — Router setup and Navbar
- **`components/Home/`** — Main landing page; hosts a p5.js animated neural network visualization
- **`components/IntroContainer/`**, **`ExperienceContainer/`**, **`ProjectContainer/`** — Sections of the home page
- **`components/ExperienceModal/`**, **`ProjectModal/`** — Detail modals opened on card click
- **`constants/`** — All static content (experience entries, project data, modal content) lives here as `.jsx`/`.js` files; this is where content edits should be made

The chatbot integration (`react-chatbot-kit`) exists in `src/components/Chat/` and `src/chatbot/` but is currently commented out in `App.js`.

### Backend (`backend/`)

- **`app.py`** — Minimal Flask app exposing a single `GET /time` endpoint (returns epoch time)
- **`rasa/`** — Rasa 3.x conversational AI chatbot
  - `domain.yml` — Intents, utterances, and slots (biographical Q&A: birthday, school, birth location)
  - `data/` — NLU training examples and conversation stories
  - `actions/` — Custom action handlers

### Deployment

- **GitHub Pages**: Static frontend deployed via `npm run deploy` (gh-pages); homepage set to `http://aniruddhamurali.github.io/my-app`
- **Render.com**: Configured via `my-app/render.yaml`
- **Docker**: `Dockerfile.client` (Node 16 → nginx) in `my-app/`, `Dockerfile.api` (Python 3.8-slim) in `backend/`
- **GitHub Actions**: `.github/workflows/claude.yml` (interactive `@claude` assistant) and `claude-code-review.yml` (automated PR reviews)
