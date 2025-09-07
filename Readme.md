# 🤖 Interview Prep AI  

Interview Prep AI is an AI-powered platform that helps candidates prepare for technical interviews. It generates **custom interview questions**, provides **detailed answers**, to build confidence before real interviews.  

---
---
## 📂 Project Structure  

```

Code-editor/
├── backend/            # Node.js/Express backend
├── frontend/
│   └── interview-prep-ai/    # React frontend
└── README.md

````

---

## 📑 Table of Contents  

- [Getting Started](#-getting-started)  
- [Backend Setup](#-backend-setup)  
- [Frontend Setup](#-frontend-setup)  
- [Usage](#-usage)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## ✅ Getting Started  

### Prerequisites  
- [Node.js](https://nodejs.org/)  
- npm (comes with Node.js)  

---

## 🧪 Backend Setup  

```bash
cd backend
npm install
npm run dev
````

🔐 Create a **.env** file inside the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_api_key
CLIENT_URI=your_client_URI
PORT=8000
```

---

## 🎨 Frontend Setup

```bash
cd frontend/interview-prep-ai
npm install
npm run dev
```

---

## ▶️ Usage
1. Sign up / Log in

2. Create a session – Choose role, experience, and focus topics

3. Get questions & answers – AI generates interview Q&A

4. Review concepts – Instant explanations for tricky topics


---


## 🚀 Features  

- **AI-Generated Questions** – Tailored to role, experience level, and topics of interest.  
- **Detailed Explanations** – Beginner-friendly answers with examples and code snippets.  
- **Interactive Practice** – Simulates a real interview experience.  
- **Concept Revision** – Quick concept explanations for last-minute prep.  
- **Custom Sessions** – Create personalized mock interview sessions.  
- **Multi-Domain Support** – DSA, Web Dev, AI/ML,Frontend, Backend, Full Stack or UI/UX  

---
## 🛠️ Tech Stack  

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **AI:** OpenAI / Gemini API (LLM for question-answer generation)  
- **Authentication:** JWT-based auth  
- **Deployment:** Vercel (frontend) + Render(backend)  


## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

```

