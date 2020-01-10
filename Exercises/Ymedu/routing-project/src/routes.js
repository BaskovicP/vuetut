import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";

export const routes = [
  { path: "", component: MainPage },
  { path: "/user", component: UserPage },
  { path: "/user/:id", component: UserPage }
];
