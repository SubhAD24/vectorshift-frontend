# ⚡ VectorShift Pipeline Builder

A modern, visually stunning drag-and-drop pipeline builder for designing AI/ML workflows. Built with **React**, **ReactFlow**, and **Zustand** — featuring an immersive 3D glassmorphic UI, real-time graph validation, and full backend integration.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)
![ReactFlow](https://img.shields.io/badge/ReactFlow-11.8-ff0072?logo=reactflow)
![Zustand](https://img.shields.io/badge/Zustand-5.0-443d2e)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)

---

## 🚀 Features

### 🧩 Node Abstraction System
- Reusable `BaseNode` component that powers all node types
- **9 custom node types**: Input, Output, LLM, Text, Filter, Merge, Condition, API Call, Timer
- Each node supports dynamic inputs/outputs, custom fields, and delete functionality
- Easily extensible — create a new node in under 20 lines of code

### 🎨 Immersive 3D UI Design
- Deep space glassmorphic theme with animated aurora backgrounds
- Floating 3D nodes with hover depth effects and animated border glows
- Neon-accented handles, holographic toolbar chips, and particle starfield
- Smooth micro-animations and transitions throughout the entire interface
- CSS variable-based design system for consistent theming

### 📝 Smart Text Node
- Auto-resizing textarea that grows with content
- Dynamic variable detection — type `{{variableName}}` to automatically generate input handles
- Real-time parsing with visual variable tags

### ✅ Pipeline Validation
- Pre-submit validation checks:
  - At least one node exists
  - At least one edge exists
  - All nodes are connected (graph connectivity check)
- Professional error alerts with clear, actionable messages
- Loading state (`Submitting...`) to prevent duplicate submissions

### 🔗 Backend Integration
- Sends pipeline graph data to a FastAPI backend via REST API
- Backend calculates: **number of nodes**, **number of edges**, and **DAG status**
- Beautiful 3D result modal displays analysis with animated stats and DAG verification
- Environment variable support (`REACT_APP_API_URL`) for seamless production deployment

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|-------------|--------------------------------------|
| Framework   | React 18                             |
| Flow Engine | ReactFlow 11                         |
| State       | Zustand 5                            |
| Styling     | Vanilla CSS (3D Glassmorphism)       |
| Font        | Outfit + JetBrains Mono (Google Fonts) |
| Backend     | FastAPI + Pydantic (Python)          |
| Deployment  | Vercel (Frontend) + Render (Backend) |

---

## 📦 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/SubhAD24/vectorshift-frontend.git
cd vectorshift-frontend/frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be running at `http://localhost:3000`.

### Environment Variables

| Variable             | Description                     | Default                    |
|---------------------|---------------------------------|----------------------------|
| `REACT_APP_API_URL` | Backend API base URL            | `http://localhost:8000`    |

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── nodes/
│   │   ├── BaseNode.js          # Reusable node abstraction
│   │   ├── inputNode.js         # Input node
│   │   ├── outputNode.js        # Output node
│   │   ├── llmNode.js           # LLM node
│   │   ├── textNode.js          # Text node (auto-resize + variables)
│   │   ├── filterNode.js        # Filter node
│   │   ├── mergeNode.js         # Merge node
│   │   ├── conditionNode.js     # Condition node
│   │   ├── apiNode.js           # API Call node
│   │   └── timerNode.js         # Timer node
│   ├── App.js                   # Root component
│   ├── ui.js                    # ReactFlow canvas + drag-and-drop
│   ├── store.js                 # Zustand state management
│   ├── submit.js                # Pipeline submission + validation
│   ├── toolbar.js               # Draggable node toolbar
│   ├── draggableNode.js         # Draggable chip component
│   └── index.css                # 3D Glassmorphic design system
├── vercel.json                  # Vercel SPA rewrite config
└── package.json
```

---

## 🧪 How It Works

1. **Drag** nodes from the toolbar onto the canvas
2. **Connect** nodes by dragging from output handles to input handles
3. **Configure** each node using its built-in fields
4. **Delete** unwanted nodes with the ✕ button
5. **Submit** the pipeline — validation runs, then the backend analyzes the graph
6. **View results** — a 3D modal shows node count, edge count, and DAG status

---

## 🌐 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Set **Root Directory** to `frontend`
4. Add env variable: `REACT_APP_API_URL` = your backend URL
5. Deploy!

### Backend (Render)
1. Push backend to a separate GitHub repo
2. Create a new Web Service on [Render](https://render.com)
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

---

## 📄 License

This project was built as part of the **VectorShift Frontend Technical Assessment**.

---

<p align="center">
  Built with ❤️ using React, ReactFlow, and a passion for beautiful interfaces.
</p>
