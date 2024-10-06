import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Category from './Components/Category';
import Quiz from './Components/Beginner/Quiz';
import ExpertPage from './Components/Expert/ExpertPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category" element={<Category />} />
        <Route path="/beginner/quiz" element={<Quiz />} />
        <Route path="/expert/expertpage" element={<ExpertPage />} />
      </Routes>
    </Router>
  );
}

export default App;