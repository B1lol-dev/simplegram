import { ChatList } from "../../components/ChatList";
import { Sidebar } from "../../components/Sidebar";
import { Chat } from "../../components/Chat";

export const Home = (chatWith) => {
  if (!localStorage.getItem("user")) {
    location.pathname = "/login";
  }

  return /*html*/ `
    <div class="dark:bg-sg-darkblue">
      <div class="flex">
        ${Sidebar()}
        ${ChatList()}
        ${Chat(chatWith)}
      </div>
    </div>
    `;
};
