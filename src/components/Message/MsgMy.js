export const MsgMy = (text) => {
  const date = new Date();

  window.deleteMsgMy = (_this) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const chatWith = location.pathname.replace("/chat/", "");
    const chat = user.chats.find((chat) => chat.with === chatWith);
    _this.remove();

    if (chat) {
      const messages = chat.messages;
      const messageIndex = messages.findIndex(
        (message) => message.isMine && message.text === text
      );

      if (messageIndex !== -1) {
        messages.splice(messageIndex, 1); // Remove the message
        localStorage.setItem("user", JSON.stringify(user)); // Save updated user data
      } else {
        console.error("Message not found:", text);
      }
    } else {
      console.error("Chat not found with:", chatWith);
    }
  };

  return /*html*/ `
    <div class="bg-sg-white ml-auto flex flex-col px-3 py-2 rounded-[1rem_1rem_0_1rem] mt-4 shadow" ondblclick="window.deleteMsgMy(this)">
        <p class="text-xl">${text}</p>
        <span class="text-xs ml-auto text-sg-gray">${date.getHours()}:${date.getMinutes()}</span>
    </div>
  `;
};
