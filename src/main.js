import "./style.css";
import { Router } from "./Router";
import { APP_VERSION } from "./constants/constants";

const savedVersion = localStorage.getItem("app_version");

if (savedVersion !== APP_VERSION) {
  localStorage.clear();

  localStorage.setItem("app_version", APP_VERSION);
}

// initialize router
Router(document.getElementById("app"));

// theme
if (localStorage.getItem("isDarkMode") === "true") {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}
