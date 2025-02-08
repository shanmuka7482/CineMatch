# CineMatch

CineMatch is a movie recommendation system that provides personalized movie suggestions based on user preferences. It utilizes a machine learning model on the backend and a React-based frontend for an intuitive user experience.

## Features
- Movie recommendations based on user input
- Interactive and responsive UI
- Backend powered by Flask and a machine learning model
- Deployment-ready configuration for Vercel

## Tech Stack
### Frontend
- React.js
- HTML, CSS, JavaScript

### Backend
- Python (Flask)
- Machine Learning (custom model in `mlModel.py`)
- Pandas, NumPy (for data handling)

## Installation & Setup
### Prerequisites
- Python 3.x
- Node.js and npm

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```sh
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm start
   ```

## Deployment
- The backend is configured for deployment via Vercel (`vercel.json` file present).
- The frontend build files are located in `build/`.

## File Structure
```
CineMatch-main/
│── backend/
│   │── app.py  # Flask server
│   │── mlModel.py  # Machine Learning model
│   │── movies1.csv  # Movie dataset
│   │── requirements.txt  # Dependencies
│   │── vercel.json  # Deployment config
│── frontend/
│   │── src/  # React source files
│── build/  # Production-ready frontend files
```



## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request


