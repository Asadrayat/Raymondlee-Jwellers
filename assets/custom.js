document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(btn => {
    if (btn.innerText.toLowerCase().includes("book")) {
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer"); // optional but good practice
      console.log(btn); // logs the actual element
    }
  });
});
