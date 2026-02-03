const downloadButton = document.querySelector(".hero__card .primary.full");
const urlInput = document.querySelector("input[type='url']");
const queue = document.querySelector(".queue");

const formatTime = (value) => value.trim() || "Full length";

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    const url = urlInput.value.trim();
    if (!url) {
      urlInput.focus();
      urlInput.placeholder = "Paste a valid URL to start";
      return;
    }

    const newRow = document.createElement("div");
    newRow.className = "queue__row";
    newRow.innerHTML = `
      <input type="checkbox" checked />
      <div>
        <strong>New clip</strong>
        <p>${formatTime("Full length")} · Best available · MP4</p>
      </div>
      <span class="status warning">Processing</span>
      <button class="ghost">Preview</button>
    `;

    queue.prepend(newRow);
    urlInput.value = "";
  });
}
