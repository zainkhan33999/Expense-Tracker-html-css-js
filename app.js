const categorySelect = document.getElementById('category-select');
const categoryTd = document.getElementById('category-td');
const amountInput = document.getElementById('amount-input');
const amountTd = document.getElementById('amount-td');
const dateInput = document.getElementById('date-input');
const dateTd = document.getElementById('date-td');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');
const tableRow = document.getElementById('table-row');


addBtn.addEventListener ('click', (e) =>{
    e.preventDefault()
    if(categorySelect.value&&amountInput.value&&dateInput.value){
    const newRow = expensesTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const editCell = newRow.insertCell()
    const deleteCell = newRow.insertCell();
    categoryCell.textContent = categorySelect.value 
    amountCell.textContent = amountInput.value
    dateCell.textContent = dateInput.value
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute("class","delete")
    const editbutton = document.createElement('button');
    editbutton.textContent = 'Edit';
    editbutton.setAttribute("class","edit")
    deleteButton.addEventListener('click', () => {
    expensesTableBody.removeChild(newRow);


    });
    editCell.appendChild(editbutton)
    deleteCell.appendChild(deleteButton);

    editbutton.addEventListener('click',()=>{
        categoryCell.textContent = categorySelect.value 
        amountCell.textContent = amountInput.value
        dateCell.textContent = dateInput.value
    })
}
    else{
        alert("All Fields Are Required")
    }
    })

 
  