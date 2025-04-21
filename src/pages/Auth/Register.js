export const Register = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register_form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!e.target[0].value) {
        return null;
      }

      if (!e.target[1].value) {
        return null;
      }

      if (!e.target[2].value) {
        return null;
      }

      if (e.target[1].value === e.target[2].value) {
        const user = {
          username: e.target[0].value,
          password: e.target[1].value,
        };

        localStorage.setItem("user", JSON.stringify(user));

        location.pathname = "/chat";
      }
    });
  });

  return /*html*/ `
    <div class="flex dark:bg-hg-black h-screen w-screen items-center justify-center">
        <form id="register_form" class="bg-hg-white h-fit flex flex-col p-8 rounded-lg gap-4">
            <input type="text" placeholder="username" class="p-2 border border-hg-gray rounded-lg">
            <input type="password" placeholder="password" class="p-2 border border-hg-gray rounded-lg">
            <input type="password" placeholder="repeat password" class="p-2 border border-hg-gray rounded-lg">
            <button type="submit" class="bg-hg-aqua p-2 text-hg-white mt-3 rounded-lg">Register</button>
            <a href="/login" class="text-sm text-hg-aqua">Already have an account?</a>
        </form>    
    </div>
    `;
};
