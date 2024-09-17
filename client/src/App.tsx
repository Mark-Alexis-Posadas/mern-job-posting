import { FC } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Profile } from "./pages/Profile";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
