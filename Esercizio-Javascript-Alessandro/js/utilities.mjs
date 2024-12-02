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
    generateTableTrHTML: ({postId, id, name, email, body}) => `
    <tr>
       <td>${postId}</td>
       <td>${id}</td>
       <td>${name}</td>
       <td>${email}</td>
       <td>${body}</td>
    <tr>
    `,
}