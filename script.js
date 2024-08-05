const expenses = [
  { id: 1, name: "Groceries", amount: 150 },
  { id: 2, name: "Utilities", amount: 80 },
  { id: 3, name: "Dining Out", amount: 120 },
  { id: 4, name: "Transportation", amount: 50 }
];

const expenseListContainer = document.querySelector("#expenseList")
const expense = document.querySelector("#expense")
const totalExpenseContainer = document.querySelector("#totalExpenses")

function renderExpenses(filterExpenses) {
  const filteredExpenses = filterExpenses ? expenses.filter(expense => expense.amount > 100) : expenses

  const expenseListHTML = filteredExpenses.map(expense => `
  <li>
   <strong>Expense:</strong> ${expense.name}<br>
   <strong>Amount: </strong> $${expense.amount}<br>
  </li>
   <hr>
  `)

  expenseListContainer.innerHTML = expenseListHTML.join('')

  const totalExpenses = filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0);
  totalExpenseContainer.textContent = `$${totalExpenses}.00`
}

renderExpenses(false)

expense.addEventListener("change", function() {
  renderExpenses(expense.checked)
})
