export const ChatList = () => {
  const chats = Object(JSON.parse(localStorage.getItem("user")))?.chats;

  return /*html*/ `
    <div class="h-screen w-70 bg-gray-300 dark:bg-gray-700 overflow-y-scroll">
        ${chats
          .map((chat) => {
            return /*html*/ `
            <a href="/chat/${chat.with}">
                <button type="button" class="flex items-center bg-sg-gray p-2 w-full gap-3 border-t transition hover:opacity-85">
                    <div class="h-10 w-10 bg-orange-400 flex items-center justify-center text-white rounded-full">
                        ${String(chat.with).substring(0, 1).toUpperCase()}
                    </div>
                    <h2 class="capitalize text-sg-white font-semibold">${
                      chat.with
                    }</h2>
                </button>
            </a>
          `;
          })
          .join("")}
    </div>
    `;
};
