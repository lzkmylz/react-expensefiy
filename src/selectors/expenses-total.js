export default (expenses) => {
    var total = expenses.map((expense) => expense.amount)
    .reduce((sum, value) => sum+value, 0)
    return total
};