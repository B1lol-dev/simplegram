import { Sidebar } from "./components/Sidebar";
import { Users } from "./components/Users";

export const Admin = () => {
  if (!localStorage.getItem("isAdmin")) {
    location.pathname = "/admin/login";
  }

  return /*html*/ `
    <div class="dark:bg-sg-darkblue">
      <div class="flex h-screen overflow-hidden">
        ${Sidebar()}
        ${Users()}
      </div>
    </div>
  `;
};
