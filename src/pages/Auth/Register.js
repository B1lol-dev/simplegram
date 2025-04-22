export const Register = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register_form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!e.target[0].value.trim()) {
        return null;
      }

      if (!e.target[1].value.trim()) {
        return null;
      }

      if (!e.target[2].value.trim()) {
        return null;
      }

      if (e.target[1].value.trim() === e.target[2].value.trim()) {
        const user = {
          username: e.target[0].value.trim(),
          password: e.target[1].value.trim(),
          bio: "",
          chats: [
            {
              with: "john",
              bio: "Hello my name is john and im a cool guy",
            },
          ],
        };

        localStorage.setItem("user", JSON.stringify(user));

        location.pathname = "/";
      }
    });
  });

  return /*html*/ `
    <div class="flex dark:bg-sg-black h-screen w-screen items-center justify-center">
        <form id="register_form" class="bg-sg-white h-fit flex flex-col p-8 rounded-lg gap-4">
            <input type="text" placeholder="username" class="p-2 border border-hg-gray rounded-lg">
            <input type="password" placeholder="password" class="p-2 border border-sg-gray rounded-lg">
            <input type="password" placeholder="repeat password" class="p-2 border border-sg-gray rounded-lg">
            <button type="submit" class="bg-sg-aqua p-2 text-sg-white mt-3 rounded-lg">Register</button>
            <a href="/login" class="text-sm text-sg-aqua">Already have an account?</a>
        </form>    
    </div>
    `;
};
