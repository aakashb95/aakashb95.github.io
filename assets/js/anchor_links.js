document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  headings.forEach((heading) => {
    // Skip if heading already has an anchor
    if (heading.querySelector(".anchor-link")) return;

    // Create anchor link
    const anchor = document.createElement("a");
    anchor.className = "anchor-link";
    anchor.href = "#" + heading.id;
    anchor.innerHTML = " §";
    anchor.title = "Link to this section";

    // Add hover effect only when hovering the heading
    heading.addEventListener("mouseenter", () => {
      anchor.style.opacity = "1";
    });
    heading.addEventListener("mouseleave", () => {
      anchor.style.opacity = "0";
    });

    heading.appendChild(anchor);
  });
});
