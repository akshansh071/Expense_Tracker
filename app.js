let expenses = [];

function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');

    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    if (name && amount) {
        expenses.push({ name, amount });
        nameInput.value = '';
        amountInput.value = '';
        alert('Expense added successfully!');
        updateExpenseList();
    } else {
        alert('Please enter a valid name and amount.');
    }
}

function deleteExpense() {
    const nameInput = document.getElementById('expense-name').value;

    if (nameInput) {
        expenses = expenses.filter(expense => expense.name !== nameInput);
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
        alert('Expense deleted successfully!');
        updateExpenseList();
    } else {
        alert('Please enter the name of the expense to delete.');
    }
}

function clearAllExpenses() {
    expenses = [];
    alert('All expenses cleared!');
    updateExpenseList();
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: $${expense.amount}`;
        expenseList.appendChild(listItem);
    });
}

function analyseExpenses() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    
    const names = expenses.map(expense => expense.name);
    const amounts = expenses.map(expense => expense.amount);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Expenses',
                data: amounts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
