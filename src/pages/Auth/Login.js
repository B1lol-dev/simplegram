export const Login = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login_form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!e.target[0].value) {
        return null;
      }

      if (!e.target[1].value) {
        return null;
      }

      const user = JSON.parse(localStorage.getItem("user"));

      if (
        e.target[0].value === user?.username &&
        e.target[1].value === user?.password
      ) {
        location.pathname = "/chat";
      } else {
        alert("username or password is incorrect");
      }
    });
  });

  return /*html*/ `
        <div class="flex dark:bg-hg-black h-screen w-screen items-center justify-center">
            <form id="login_form" class="bg-hg-white h-fit flex flex-col p-8 rounded-lg gap-4">
                <input type="text" placeholder="username" class="p-2 border border-hg-gray rounded-lg">
                <input type="password" placeholder="password" class="p-2 border border-hg-gray rounded-lg">
                <button type="submit" class="bg-hg-aqua p-2 text-hg-white mt-3 rounded-lg">Login</button>
                <a href="/register" class="text-sm text-hg-aqua">Don't have an account?</a>
            </form>    
        </div>
        `;
};
