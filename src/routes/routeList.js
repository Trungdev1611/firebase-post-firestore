import CreatePost from "../Components/CreatePost";
import ListPost from "../Components/ListPost";
import Login from "../Components/Login";

export const listRoute = [
  {
    path: "/",
    component: <ListPost />,
    isProtect: true,
    id: 1,
  },
  {
    path: "/createPost",
    component: <CreatePost />,
    isProtect: false,
    id: 2,
  },
  {
    path: "/login",
    component: <Login />,
    isProtect: false,
    id: 3,
  },
];
