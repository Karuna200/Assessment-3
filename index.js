let customerList = [];

function submitForm(event) {
    event.preventDefault();
    const customer = {
        personalDetails: {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            nationality: document.getElementById('nationality').value,
            aadhar: document.getElementById('aadhar').value,
            mobile: document.getElementById('mobile').value,
            customerAddress: document.getElementById('customerAddress').value,
            city: document.getElementById('city').value,
        },
        bankDetails: {
            bankName: document.getElementById('bankName').value,
            accountName: document.getElementById('accountName').value,
            accountNumber: document.getElementById('accountNumber').value,
            ifsc: document.getElementById('ifsc').value,
            bankAddress: document.getElementById('bankAddress').value,
        },
        carDetails: {
            make: document.getElementById('make').value,
            model: document.getElementById('model').value,
            manufacturer: document.getElementById('manufacturer').value,
            manufactureDate: document.getElementById('manufactureDate').value,
            country: document.getElementById('country').value,
            carNumber: document.getElementById('carNumber').value,
            chassisNumber: document.getElementById('chassisNumber').value,
            engineType: document.getElementById('engineType').value,
        },
    };

    customerList.push(customer);
    displayCustomerList();
    resetForm()
}


function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('nationality').value = '';
    document.getElementById('aadhar').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('city').value = '';
    document.getElementById('bankName').value = '';
    document.getElementById('accountName').value = '';
    document.getElementById('accountNumber').value = '';
    document.getElementById('ifsc').value = '';
    document.getElementById('bankAddress').value = '';
    document.getElementById('make').value = '';
    document.getElementById('model').value = '';
    document.getElementById('manufacturer').value = '';
    document.getElementById('manufactureDate').value = '';
    document.getElementById('country').value = '';
    document.getElementById('carNumber').value = '';
    document.getElementById('chassisNumber').value = '';
    document.getElementById('engineType').value = '';

}
function displayCustomerList() {

    let table = document.getElementById('customerTable');
    console.log(table);
    let newRow = table.insertRow(-1);
    let cellName = newRow.insertCell(0);
    let cellMobile = newRow.insertCell(1);
    let cellBankName = newRow.insertCell(2);
    let cellAccountNo = newRow.insertCell(3)
    let cellAction = newRow.insertCell(4);
    const latestCustomer = customerList[customerList.length - 1];
    cellName.innerHTML = latestCustomer.personalDetails.name;
    cellMobile.innerHTML = latestCustomer.personalDetails.mobile;
    cellBankName.innerHTML = latestCustomer.bankDetails.bankName;
    cellAccountNo.innerHTML = latestCustomer.bankDetails.accountNumber;
    cellAction.innerHTML = `<button onclick="deleteCustomer(${customerList.length - 1})">Delete</button>`;
}

function deleteCustomer(index) {
   
        customerList.splice(index, 1);
        let table = document.getElementById('customerTable');
        table.deleteRow(index+1);
        for (let i = index; i < customerList.length; i++) {
            table.rows[i + 1].cells[4].innerHTML = `<button onclick="deleteCustomer(${i})">Delete</button>`;
        }
       
    
}
