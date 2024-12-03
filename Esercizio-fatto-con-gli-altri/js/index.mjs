import { Utilities } from "./utilities.mjs";

/**
 *  1. selezionare l'html
 *  2. adattare lo state con le nuove info
 *  3. gestire gli eventi
 *  4. salvare nello state la scelta dell' utente
 *  5. manipolare i dati in base al valore salvato nello state
 *  6. renderizzare in pagina in accordo con tutti i valori dello state.
 */

const API_url = "https://jsonplaceholder.typicode.com/comments";

const $tableData = document.querySelector("#data");
const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");
const $page = document.querySelector("#page");
const $totalpages = document.querySelector("#total-pages");
const $limit = document.querySelector("#limit");
const $sort = document.querySelector("#sort");
const $search = document.querySelector("#search");

const state = {
    data: null,
    cache: [],
    paginationInfo: {
        page: 1,
        limit: 20,
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false,
    },
    sortingInfo: {
        key: "id",
        mode: "ASC",
    },
    search: null,
};

const fetchData = async () => {
    try {
        state.cache = await (await fetch(API_url)).json();
    } catch (error) {
        console.log(error);
    }
};

const paginateData = () => {
    const startIndex =
        state.paginationInfo.limit * (state.paginationInfo.page - 1);

    state.data = Utilities.getSearchData(state).splice(
        startIndex,
        state.paginationInfo.limit
    );
    state.paginationInfo.totalPages = Math.ceil(
        Utilities.getSearchData(state).length / state.paginationInfo.limit
    );
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPage =
        state.paginationInfo.page < state.paginationInfo.totalPages;
};

const sortData = () => {
    const key = state.sortingInfo.key;
    const mode = state.sortingInfo.mode;

    if (mode === "ASC") {
        state.cache.sort((a, b) => {
            if (isNaN(a[key])) {
                return a[key].localeCompare(b[key]);
            } else {
                return a[key] - b[key];
            }
        });
    } else {
        state.cache.sort((a, b) => {
            if (isNaN(a[key])) {
                return b[key].localeCompare(a[key]);
            } else {
                return b[key] - a[key];
            }
        });
    }
};

const renderPagination = () => {
    $page.innerHTML = state.paginationInfo.page;
    $totalpages.innerHTML = state.paginationInfo.totalPages;

    if (state.paginationInfo.hasPrevPage) {
        $prev.removeAttribute("disabled");
    } else {
        $prev.setAttribute("disabled", true);
    }

    if (state.paginationInfo.hasNextPage) {
        $next.removeAttribute("disabled");
    } else {
        $next.setAttribute("disabled", true);
    }
};

const renderData = () => {
    const HTML = state.data.map(Utilities.generateTableTrHTML).join("");

    $tableData.innerHTML = HTML;
};

const manageListeners = () => {
    $prev.addEventListener("click", () => {
        state.paginationInfo.page -= 1;

        paginateData();
        renderPagination();
        renderData();
    });

    $sort.addEventListener("change", (event) => {
        const [key, mode] = event.target.value.split(":");
        state.sortingInfo.key = key;
        state.sortingInfo.mode = mode;
        state.paginationInfo.page = 1;

        sortData();
        paginateData();
        renderPagination();
        renderData();
    });

    $next.addEventListener("click", () => {
        state.paginationInfo.page += 1;

        paginateData();
        renderPagination();
        renderData();
    });

    $limit.addEventListener("change", (event) => {
        state.paginationInfo.limit =
            event.target.value !== "*"
                ? Number(event.target.value)
                : state.cache.length;
        state.paginationInfo.page = 1;

        paginateData();
        renderPagination();
        renderData();
    });

    $search.addEventListener("input", (event) => {
        state.search = event.target.value.length > 0 ? event.target.value : null;
        state.paginationInfo.page = 1;

        paginateData();
        renderPagination();
        renderData();
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-delete")) {
            const index = state.cache.findIndex(
                (item) => item.id == event.target.dataset.id
            );
            if (index != -1) {
                state.cache.splice(index, 1);

                paginateData();
                renderPagination();
                renderData();
            }
        }
    });
};

const mount = async () => {
    await fetchData();
    paginateData();
    renderPagination();
    renderData();
};

const init = async () => {
    mount();
    manageListeners();
};

init();
