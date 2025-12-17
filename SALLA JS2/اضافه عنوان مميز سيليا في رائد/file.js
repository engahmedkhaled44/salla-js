function addCircle(el) {
    if (!el.querySelector(".circle")) {
        const circle = document.createElement("span");
        circle.className = "circle";
        el.appendChild(circle);
    }
}
const selectors = [
    ".s-block__title h2",
    ".s-reviews-header",
    ".s-slider-block__title h2"
];

document.querySelectorAll(selectors.join(", ")).forEach(addCircle);

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { 
                selectors.forEach(sel => {
                    if (node.matches(sel)) {
                        addCircle(node);
                    }
                    node.querySelectorAll(sel).forEach(addCircle);
                });
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });