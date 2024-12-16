document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs > div");
    const paragraphs = document.querySelectorAll("p");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            //reset
            tabs.forEach(t => t.classList.remove("border-b-white"));
            paragraphs.forEach(p => p.classList.add("hidden"));

            //azione
            tab.classList.add("border-b-white");
            paragraphs[index].classList.remove("hidden");
        });
    });
});