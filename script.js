document.querySelectorAll(".inquiry-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const product = data.get("product") || form.dataset.product || "未定";
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const sets = data.get("sets") || "";
    const message = data.get("message") || "";
    const subject = `CFS EC 問い合わせ: ${product}`;
    const body = [
      "CFS EC 問い合わせ",
      "",
      `対象セット: ${product}`,
      `お名前 / 会社名: ${name}`,
      `メールアドレス: ${email}`,
      `希望セット数: ${sets}`,
      "",
      "相談内容:",
      message,
      "",
      "このメールはCFS EC Supplyの問い合わせフォームから作成されました。",
    ].join("\n");

    window.location.href = `mailto:info@cfsjp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

const mainProductImage = document.querySelector("#mainProductImage");
const thumbnailRow = document.querySelector("#thumbnailRow");

if (mainProductImage && thumbnailRow) {
  thumbnailRow.addEventListener("click", (event) => {
    const button = event.target.closest(".thumb-button");
    const imageUrl = button?.dataset.image;

    if (!imageUrl) {
      return;
    }

    mainProductImage.src = imageUrl;
    thumbnailRow.querySelectorAll(".thumb-button").forEach((thumb) => {
      thumb.classList.toggle("active", thumb === button);
    });
  });
}
