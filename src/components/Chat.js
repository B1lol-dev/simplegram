import { MsgAnother } from "./Message/MsgAnother";
import { MsgMy } from "./Message/MsgMy";

import { fetchGPT } from "../utils/fetchGPT";

export const Chat = (chatWith) => {
  if (!chatWith) {
    return "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const send_message = document.getElementById("send_message");
    const messages = document.getElementById("messages");

    const chat_with_status = document.getElementById("chat_with_status");

    send_message.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!send_message[0].value) {
        return null;
      }

      messages.innerHTML += MsgMy(send_message[0].value);
      chat_with_status.innerText = "Typing...";

      setTimeout(() => {
        fetchGPT(send_message[0].value)
          .then((response) => {
            messages.innerHTML += MsgAnother(response);
            chat_with_status.innerText = "Online";
            send_message[0].value = "";
          })
          .catch((err) => {
            console.error("The sample encountered an error:", err);
          });
      }, 1000);
    });
  });

  return /*html*/ `
    <div class="w-full">
        <header class="py-3 px-8 bg-blue-400 w-full">
            <nav class="flex">
                <div class="flex items-center gap-4">
                    <div class="h-18 w-18 bg-orange-400 flex justify-center items-center text-white font-bold text-3xl rounded-full">
                        ${chatWith.substring(0, 1).toUpperCase()}
                    </div>
                    <div>
                        <h1 class="capitalize text-4xl font-semibold">${chatWith}</h1>
                        <p id="chat_with_status" class="text-gray-600">Online</p>
                    </div>
                </div>
            </nav>
        </header>
        <div id="chat_body" class="w-full h-[90%] flex flex-col justify-end relative">
            <div id="messages" class="w-full h-full overflow-y-scroll flex flex-col p-3 items-start">
                
            </div>
            <form id="send_message" class="w-[80%] h-15 flex mx-auto relative mb-3 bg-none">
                <input type="text" placeholder="Write text..." class="h-full w-full px-5 bg-sg-white rounded-[30px] outline-none border-none">
                <button type="submit" class="absolute right-0 top-[50%] -translate-y-[50%] h-15 w-15 bg-sg-aqua rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3891 15.3333C10.3716 15.3333 10.355 15.3325 10.3383 15.3316C9.96164 15.3091 9.64748 15.0358 9.57248 14.6658L8.29081 8.35997C8.22414 8.03163 7.96831 7.7758 7.63998 7.70913L1.33414 6.42663C0.964143 6.35247 0.690809 6.0383 0.668309 5.66163C0.645809 5.28413 0.878309 4.93913 1.23664 4.8208L14.57 0.376633C14.8691 0.274966 15.1991 0.3533 15.4225 0.577466C15.6458 0.8008 15.7233 1.1308 15.6241 1.42997L11.1791 14.7633C11.0658 15.1058 10.7458 15.3333 10.3891 15.3333Z" fill="white"/>
                    </svg>
                </button>
            </form>
        </div>
    </div>
    `;
};
