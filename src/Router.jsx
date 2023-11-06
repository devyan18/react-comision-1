import { Route, Routes } from "react-router-dom";
import { HomePage, ProfilePage, TasksPage } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
export default Router;
