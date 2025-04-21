import { AlertError } from "../components/Alert/Error";
import { AlertSuccess } from "../components/Alert/Success";
import { AlertWarn } from "../components/Alert/Warn";

export const showAlert = (type, text) => {
  const html =
    type === "error"
      ? AlertError(text)
      : type === "warn"
      ? AlertWarn(text)
      : type === "success"
      ? AlertSuccess(text)
      : "";

  document.querySelector("body").insertAdjacentHTML("beforeend", html);
};
