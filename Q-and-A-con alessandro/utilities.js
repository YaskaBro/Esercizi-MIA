const $titles = document.querySelectorAll("h2");
const $allDescriptions = document.querySelectorAll(".description")

$titles.forEach($title => {
    $title.addEventListener("click", () => {
        const id = $title.getAttribute("data-id");
        const $description = document.querySelector(`.description[data-id="${id}"]`); 

        $allDescriptions.style.visibility = 'hidden';

        if ($description.style.visibility === 'hidden' || !$description.style.visibility) {
            $description.style.visibility = 'visible';
        } else {
            $description.style.visibility = 'hidden';
        }
    });
});