import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import ReadyPage from "./pages/ReadyPage";
import FinalPage from "./pages/FinalPage";
import ValentinePage from "./pages/ValentinePage";

function App() {
  return (
    <main className="bg-background h-dvh w-full flex justify-center items-center">
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/ready" Component={ReadyPage} />
        <Route path="/quiz" Component={QuizPage} />
        <Route path="/valentine" Component={ValentinePage} />
        <Route path="/final" Component={FinalPage} />
      </Routes>
    </main>
  );
}

export default App;
