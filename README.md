
## Overview
**NeuroBuddy** is an assistive app designed for neurodiverse individuals, particularly autistic children, offering daily routine management, AAC communication tools, and interactive learning modules. Built for inclusivity and accessibility.

## Features
- Visual Scheduler with drag-and-drop tasks
- AAC Communication Board for non-verbal users
- Calm Zone with sensory-friendly content
- Personalized learning games
- Routine suggestions powered by AI
- Text-to-Speech & Speech-to-Text support
- Parent/Teacher Dashboard for progress tracking

## Tech Stack
- **Frontend**: Flutter
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **AI/ML**: Routine Suggestion Engine, Gemini API Integration
- **Cloud Storage**: Firebase Storage / AWS S3
- **Hosting**: Google IDX / Firebase Hosting
- **Analytics**: Firebase Analytics

## Setup Instructions
```bash
# Clone Repo
git clone https://github.com/yourusername/NeuroBuddy.git
cd NeuroBuddy

# Setup Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Setup Flutter Frontend
cd frontend
flutter pub get
flutter run

