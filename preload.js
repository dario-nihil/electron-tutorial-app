window.addEventListener("DOMContentLoaded", () => {
  const replacetext = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replacetext(`${dependency}-version`, process.versions[dependency]);
  }
});
