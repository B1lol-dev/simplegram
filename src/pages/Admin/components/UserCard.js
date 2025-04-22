export const UserCard = (userInfo) => {
  if (!localStorage.getItem("user")) {
    return "";
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const users = user?.chats;

  document.addEventListener("DOMContentLoaded", () => {
    const user_card_remove_btn = document.querySelectorAll(".user_card button");

    user_card_remove_btn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const removingUser =
          e.target.previousElementSibling.previousElementSibling.innerText.toLowerCase();
        const updatedUsers = users.filter(
          (user) => user?.with.toLowerCase() !== removingUser
        );
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, chats: updatedUsers })
        );
        e.target.parentElement.remove();
      });
    });
  });

  return /*html*/ `
        <div class="user_card p-5 rounded-lg bg-white flex flex-col items-center w-60">
            <div class="text-sg-white h-18 w-18 bg-orange-500 flex justify-center items-center rounded-full text-4xl select-none font-bold">
                ${userInfo?.with.substring(0, 1).toUpperCase()}
            </div>
            <h1 class="capitalize mt-2 font-semibold">${userInfo?.with}</h1>
            <p class="text-sm text-sg-gray">@${userInfo?.with}</p>
            <h2 class="mt-2">${
              userInfo?.bio || "<span class='text-sg-gray'>No bio...</span>"
            }</h2>
            <button type="button" class="bg-red-500 text-sg-white rounded-lg p-1 mt-5 w-[80%]">Remove</button>
        </div>
    `;
};
