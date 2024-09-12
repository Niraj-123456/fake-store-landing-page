export function toggleDarkMode(isDarkMode: boolean = false) {
  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
