import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";
import UserEdit from "./components/UserEdit";

export const routes = [
  { path: "", component: MainPage },
  {
    path: "/user",
    component: UserPage,
    children: [
      // { path: "", component: UserPage },
      { path: "edit", component: UserEdit }
    ]
  },
  { path: "/user/:id", component: UserPage }
];
