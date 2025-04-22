import { createRouter } from "routerjs";

// components
import { Admin } from "./pages/Admin/Admin";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import { AdminLogin } from "./pages/Admin/AdminLogin";
import { Profile } from "./pages/profile/Profile";
import { ProfileOther } from "./pages/profile/ProfileOthers";

export const Router = (root) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .get("/admin", () => {
      root.innerHTML = Admin();
    })
    .get("/admin/login", () => {
      root.innerHTML = AdminLogin();
    })
    .get("/chat/:chatWith", (req, context) => {
      const chatWIth = req.get("chatWith");
      root.innerHTML = Home(chatWIth);
    })
    .get("/register", () => {
      root.innerHTML = Register();
    })
    .get("/login", () => {
      root.innerHTML = Login();
    })
    .get("/profile", () => {
      root.innerHTML = Profile();
    })
    .get("/profile/:username", (req, context) => {
      const username = req.get("username");
      root.innerHTML = ProfileOther(username);
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
