import { showAlert } from "../../utils/showAlert";

export const AdminLogin = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("admin_login_form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!e.target[0].value.trim()) {
        return null;
      }

      if (!e.target[1].value.trim()) {
        return null;
      }

      if (
        e.target[0].value.trim() === import.meta.env.VITE_ADMIN_USERNAME &&
        e.target[1].value.trim() === import.meta.env.VITE_ADMIN_PASSWORD
      ) {
        localStorage.setItem("isAdmin", "true");
        location.pathname = "/admin";
      } else {
        showAlert("error", "username or password is incorrect");
      }
    });
  });

  return /*html*/ `
        <div class="flex dark:bg-sg-black h-screen w-screen items-center justify-center">
            <form id="admin_login_form" class="bg-sg-white h-fit flex flex-col p-8 rounded-lg gap-4">
                <input type="text" placeholder="username" class="p-2 border border-sg-gray rounded-lg">
                <input type="password" placeholder="password" class="p-2 border border-sg-gray rounded-lg">
                <button type="submit" class="bg-sg-aqua p-2 text-sg-white mt-3 rounded-lg">Login</button>
            </form>    
        </div>
        `;
};
