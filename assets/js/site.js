(() => {
  const blocks = document.querySelectorAll("div.highlight");

  blocks.forEach((block) => {
    const pre = block.querySelector("pre");
    if (!pre || block.querySelector(".copy-code")) return;

    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(pre.innerText);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1400);
    });

    block.appendChild(button);
  });

  const dialog = document.querySelector("[data-image-dialog]");
  const dialogImage = dialog?.querySelector("img");

  document.querySelectorAll(".prose img, .post-cover img").forEach((image) => {
    image.addEventListener("click", () => {
      if (!dialog || !dialogImage) return;
      dialogImage.src = image.currentSrc || image.src;
      dialogImage.alt = image.alt || "";
      dialog.showModal();
    });
  });

  document.querySelector("[data-dialog-close]")?.addEventListener("click", () => {
    dialog?.close();
  });

  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
