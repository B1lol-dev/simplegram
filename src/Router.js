import { createRouter } from "routerjs";

// components
import { Admin } from "./pages/Admin/Admin";
import { Chat } from "./pages/Chat/Chat";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";

export const Router = (root) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .get("/admin", () => {
      root.innerHTML = Admin();
    })
    .get("/chat", () => {
      root.innerHTML = Chat();
    })
    .get("/register", () => {
      root.innerHTML = Register();
    })
    .get("/login", () => {
      root.innerHTML = Login();
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
