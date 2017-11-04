
const getExpensesTotal = (expensesArr) => {
    const amountArr = expensesArr.map((expense) => {
        return expense.amount;
    });
    const total = amountArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return total;
};

export default getExpensesTotal;
