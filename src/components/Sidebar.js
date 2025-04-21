import { toggleTheme } from "../utils/toggleTheme";

export const Sidebar = () => {
  let isOpen = false;

  const user = JSON.parse(localStorage.getItem("user"));

  document.addEventListener("DOMContentLoaded", () => {
    const toggle_theme_btn = document.getElementById("toggle_theme_btn");
    const exit_btn = document.getElementById("exit_btn");

    toggle_theme_btn.addEventListener("click", toggleTheme);
    exit_btn.addEventListener("click", () => {
      window.close();
    });
  });

  return /*html*/ `
    <div class="h-screen w-75 bg-sg-white shadow-[0_10px_50px_5px_theme(colors.sg.gray)] p-8 transition-all dark:bg-sg-black dark:shadow-[0_10px_50px_5px_black] w-22!">
        <button type="button" class="text-3xl dark:text-white" onclick="((e => {
          this.parentElement.classList.toggle('w-22!')
          this.nextElementSibling.classList.toggle('hidden')
          })())">☰</button>
        <div class="hidden flex items-center flex-col gap-2">
          <div class="flex flex-col items-center">
              <div class="h-[100px] w-[100px] bg-sky-400 rounded-full flex items-center justify-center font-bold text-5xl text-sg-white select-none">
                ${String(user?.username).substring(0, 1).toUpperCase()}
              </div>
              <h1 class="mt-4 font-semibold text-3xl dark:text-sg-white">${
                user.username
              }</h1>
          </div>
          <button type="button" class="bg-sg-gray w-35 h-10 text-white font-bold rounded-lg" id="toggle_theme_btn">Toggle Theme</button>
          <button type="button" class="bg-sg-gray w-35 h-10 text-white font-bold rounded-lg" id="exit_btn">Exit</button>
        </div>
    </div>
    `;
};
