import { Utilities } from "./utilities.mjs";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const $tableData = document.querySelector("#data");
const $prev = document.querySelector("#prev");
const $page = document.querySelector("#page");
const $totalPages = document.querySelector("#total-pages");
const $next = document.querySelector("#next");

const state = {
    data: null, // Chiave di rendering
    _data: null, // Chiave di cache
    paginationInfo: {
        page: 4,
        limit: 10,
        totalPage: 1,
        hasPrevPage: false,
        hasNextPage: false,
    },
};

const fetchData = async () => {
    try {
        // state.data = await(await fetch(API_URL)).json();
        const response = await fetch(API_URL);

        state._data = await response.json();
    } catch (error) {
        console.log(error);
    }
};

const paginateData = () => {
    const startIndex =
        state.paginationInfo.limit * (state.paginationInfo.page - 1);

    state.data = [...state._data].splice(startIndex, state.paginationInfo.limit);

    state.paginationInfo.totalPage = Math.ceil(
        state._data.length / state.paginationInfo.limit
    );
    state.paginationInfo.hasPrevPage = state.paginationInfo.page > 1;

    state.paginationInfo.hasNextPage =
        state.paginationInfo.page < state.paginationInfo.totalPage;
};

const renderPagination = () => {
    $page.innerHTML = state.paginationInfo.page;
    $totalPages.innerHTML = state.paginationInfo.totalPage;
};
const renderData = () => {
    const HTML = state.data.map(Utilities.generateTableTrHTML).join("");

    $tableData.innerHTML = HTML;
};

const mount = async () => {
    await fetchData();
    paginateData();
    renderPagination();
    renderData();
};

const init = async () => {
    mount();
};

init();
