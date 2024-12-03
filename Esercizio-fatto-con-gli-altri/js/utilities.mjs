export const Utilities = {
  /**
   * @param {object} item
   * @param {object} item.postId
   * @param {object} item.id
   * @param {object} item.name
   * @param {object} item.email
   * @param {object} item.body
   * @returns {string} HTML element for any object passed
   */
  generateTableTrHTML: ({ postId, id, name, email, body }) => `
    <tr>
        <td>${postId}</td>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${body}</td>
        <td>
            <button class="btn-delete" data-id="${id}">Delete</button>
        </td>
    <tr>
    `,
  getSearchData: (state) => {
    if (!state.search || state.search.lenght < 3) {
      return [...state.cache];
    }

    return [...state.cache].filter(
      (item) =>
        item.id.toString().match(new RegExp(state.search, "ig")) ||
        item.name.toString().match(new RegExp(state.search, "ig")) ||
        item.email.toString().match(new RegExp(state.search, "ig")) ||
        item.body.toString().match(new RegExp(state.search, "ig"))
    );
  },
};
