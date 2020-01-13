import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";
import UserEdit from "./components/UserEdit";
import MainTop from "./components/MainTop";

export const routes = [
  {
    path: "*",
    components: {
      default: MainPage,
      "main-top": MainTop
    },
    children: [{ path: "kola", components: { "main-top": MainTop } }]
    // This one is tested with http://localhost:8080/#/fsdfs/kola
  },
  {
    path: "/user",
    component: UserPage,
    name: "user",
    children: [
      // { path: "", component: UserPage },
      { path: "edit", component: UserEdit, name: "userEdit" }
    ],
    beforeEnter: (to, from, next) => {
      console.log(to, from);
      console.log("About to enter the user page");
      next();
    }
  },
  { path: "/user/:id", component: UserPage },
  { path: "/crazy", redirect: "/user" }
];
