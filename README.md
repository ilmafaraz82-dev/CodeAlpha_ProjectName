# Flashcard Quiz App

A production-quality flashcard study app built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** — functional components + hooks
- **Vite** — lightning-fast dev server & build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — 3D card flip & page transitions
- **Lucide React** — icon library

## File Structure

```
flashcard-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               # React root mount
    ├── App.jsx                # Root component — owns all state
    ├── index.css              # Global styles + CSS custom properties
    ├── utils/
    │   └── storage.js         # localStorage helpers + default cards
    ├── hooks/
    │   ├── useCards.js        # CRUD operations for the card deck
    │   ├── useToast.js        # Toast notification state
    │   └── useKeyboard.js     # Arrow key + Space keyboard shortcuts
    └── components/
        ├── Header.jsx         # Logo + Study / Manage Deck tab bar
        ├── ProgressBar.jsx    # "Card X of Y" + animated progress bar
        ├── Flashcard.jsx      # 3D flip card (front = question, back = answer)
        ├── Controls.jsx       # Prev / Flip / Next buttons + kbd hints
        ├── EmptyState.jsx     # Shown when deck is empty
        ├── CardForm.jsx       # Add-new-card form with validation
        ├── CardItem.jsx       # Single card row with inline edit/delete
        ├── DeckManager.jsx    # Manage Deck view (form + list)
        └── Toast.jsx          # Slide-up notification banner
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Features

### Study Mode
- **3D card flip** — CSS `rotateY` + `preserve-3d`, animated with Framer Motion
- **Card transitions** — smooth fade/scale between cards via `AnimatePresence`
- **Progress bar** — gradient fill tracks position through the deck
- **Dot indicators** — up to 8 dots show current position

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `←` | Previous card |
| `→` | Next card |
| `Space` | Flip card |

### Manage Deck
- Add cards with question + answer (both fields required)
- Inline editing — no modal needed
- Delete with a single click
- All data persisted to `localStorage`

### UX Details
- Toast notifications for add / update / delete
- Basic validation prevents empty cards
- Empty state with CTA when deck is empty
- Animated view transitions between Study and Manage
- Fully responsive (mobile + desktop)
