import { Sidebar } from "../../components/Sidebar";

export const Home = () => {
  if (!localStorage.getItem("user")) {
    location.pathname = "/login";
  }

  return /*html*/ `
    <div class="dark:bg-sg-darkblue">
      ${Sidebar()}
    </div>
    `;
};
