import { NotFound } from "../NotFound/NotFound";

export const Profile = () => {
  if (!localStorage.getItem("user")) {
    location.pathname = "/";
  }
  const user = JSON.parse(localStorage.getItem("user"));
  const users = [...(user?.chats || []), { with: user?.username }];
  const username = user.username;

  document.addEventListener("DOMContentLoaded", () => {
    const profile_change_username = document.getElementById(
      "profile_change_username"
    );
    const profile_change_bio = document.getElementById("profile_change_bio");

    profile_change_username.children[1].addEventListener("click", () => {
      profile_change_username.children[0].focus();
    });
    profile_change_username.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!profile_change_username.children[0].value.trim()) {
        return null;
      }

      if (
        users.some(
          (chat) =>
            chat.with === profile_change_username.children[0].value.trim()
        )
      ) {
        return null;
      }

      const newUsername = profile_change_username.children[0].value.trim();
      if (newUsername && newUsername !== username) {
        const updatedUser = {
          username: newUsername,
          chats: [...user.chats],
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        location.pathname =
          "/profile/" + JSON.parse(localStorage.getItem("user"))?.username;
      }
    });

    profile_change_bio.addEventListener("input", (e) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          bio: profile_change_bio.value,
        })
      );
    });
  });

  return /*html*/ `
    <div class="dark:bg-sg-darkblue h-screen w-screen flex justify-center items-center p-8">
        <a href="/"><button class="fixed left-3 top-3 bg-sg-aqua h-8 w-8 rounded-lg text-sg-white" type="button"><-</button></a>
        <div class="bg-white p-8 max-w-256 w-full flex flex-col items-center rounded-lg">
            <div class="flex flex-col items-center">
                <div class="bg-sg-aqua text-sg-white h-25 w-25 flex items-center justify-center font-bold text-5xl rounded-full">
                    ${username.substring(0, 1).toUpperCase()}
                </div>
                <p class="text-sg-gray text-sm justify-self-start mt-4 cursor-pointer" onclick="navigator.clipboard.writeText(this.innerText); alert('copied')">@${username}</p>
                <form class="w-full flex justify-center mt-3 items-center" id="profile_change_username">
                    <input type="text" value="${username}" class="w-full text-xl pr-3">
                    <button type="button" class="w-8 h-8 bg-sg-aqua">✏️</button>
                </form>
                <textarea id="profile_change_bio" placeholder="your bio" class="max-h-20 h-20 w-full mt-4 border rounded-lg border-sg-gray" maxlength="70">${
                  JSON.parse(localStorage.getItem("user"))?.bio
                }</textarea>
            </div>
        </div>
    </div>
  `;
};
