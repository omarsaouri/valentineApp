import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import ReadyPage from "./pages/ReadyPage";
import QuizPage from "./pages/QuizPage";

import ValentinePage from "./pages/ValentinePage";
import FinalPage from "./pages/FinalPage";

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
