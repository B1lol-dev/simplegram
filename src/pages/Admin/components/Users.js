import { UserCard } from "./UserCard";

export const Users = () => {
  if (!localStorage.getItem("user")) {
    return "";
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const users = user?.chats;
  console.log(users);

  document.addEventListener("DOMContentLoaded", () => {
    const admin_users = document.getElementById("admin_users");
    const admin_user_add_modal = document.getElementById(
      "admin_user_add_modal"
    );
    const admin_user_add_btn = document.getElementById("admin_user_add_btn");

    admin_user_add_btn.addEventListener("click", () => {
      admin_user_add_modal.classList.toggle("hidden");
    });
    admin_user_add_modal.children[0].addEventListener("click", () => {
      admin_user_add_modal.classList.add("hidden");
    });

    admin_user_add_modal.addEventListener("submit", (e) => {
      e.preventDefault();

      const modal_username = admin_user_add_modal.children[1];

      if (!modal_username) {
        return null;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          chats: [
            ...users,
            { with: modal_username.value.trim().toLowerCase() },
          ],
        })
      );

      modal_username.value = "";
      admin_user_add_modal.classList.add("hidden");
      location.reload();
    });
  });

  return /*html*/ `
    <div class="w-full p-10 grid grid-cols-5 gap-5 items-start overflow-y-scroll" id="admin_users">
            ${users
              .map((user) => {
                return UserCard(user);
              })
              .join("")}

            <button type="button" class="absolute h-12 w-12 bottom-3 right-3 bg-sg-aqua flex justify-center items-center text-sg-white font-bold text-4xl p-5 rounded-full" id="admin_user_add_btn">+</button>
            <form class="fixed top-[50%] left-[50%] -translate-[50%] p-5 bg-sg-white flex flex-col gap-4 rounded-lg hidden" id="admin_user_add_modal">
                    <button type="button" class="ml-auto">x</button>
                    <input type="text" placeholder="Username" class="p-2 rounded-lg border">
                    <button type="submit" class="w-full bg-sg-aqua text-sg-white rounded-lg py-2 font-semibold">Add</button>
            </form>
    </div>
    `;
};
