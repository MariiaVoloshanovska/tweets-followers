import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("pages/Home"));
const Tweets = lazy(() => import("pages/Tweets"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;