import { NotFound } from "../NotFound/NotFound";

export const ProfileOther = (username) => {
  if (!localStorage.getItem("user")) {
    location.pathname = "/";
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const users = user?.chats;

  if (location.pathname === `/profile/${user?.username}`) {
    location.pathname = "/profile";
  }

  if (!users.some((chat) => chat.with === username)) {
    return NotFound();
  }

  document.addEventListener("DOMContentLoaded", () => {});

  return /*html*/ `
    <div class="dark:bg-sg-darkblue h-screen w-screen flex justify-center items-center p-8">
        <a href="/"><button class="fixed left-3 top-3 bg-sg-aqua h-8 w-8 rounded-lg text-sg-white" type="button"><-</button></a>
        <div class="bg-white p-8 max-w-256 w-full flex flex-col items-center rounded-lg">
            <div class="flex flex-col items-center">
                <div class="bg-orange-500 text-sg-white h-25 w-25 flex items-center justify-center font-bold text-5xl rounded-full">
                    ${username.substring(0, 1).toUpperCase()}
                </div>
                <p class="text-sg-gray text-sm justify-self-start mt-4 cursor-pointer" onclick="navigator.clipboard.writeText(this.innerText); alert('copied')">@${username}</p>
                <div class="w-full flex justify-center mt-3 items-center" id="profile_change_username">
                    <h1 class="w-full text-2xl font-semibold pr-3 text-center">${username}</h1>
                </div>
                <h2 class="max-h-20 h-20 w-[330px] mt-4 border rounded-lg border-sg-gray p-1" maxlength="70">${
                  JSON.parse(localStorage.getItem("user"))?.chats.filter(
                    (user) => user.with === username
                  )[0].bio || "<span class='text-sg-gray'>No bio</span>"
                }</h2>
            </div>
        </div>
    </div>
  `;
};
