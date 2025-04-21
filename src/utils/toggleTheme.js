export const toggleTheme = () => {
  let isDarkMode = localStorage.getItem("isDarkMode") === "true";

  if (isDarkMode) {
    document.querySelector("html").classList.remove("dark");
    localStorage.setItem("isDarkMode", "false");
  } else {
    document.querySelector("html").classList.add("dark");
    localStorage.setItem("isDarkMode", "true");
  }
};
