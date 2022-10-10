var selectedRow = null;

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();
}


function readFormData() {
    var formData = {};
    formData["LoginId"] = document.getElementById("LoginId").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumber").value;
    formData["CustomerName"] = document.getElementById("CustomerName").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.LoginId;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.PhoneNumber;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.CustomerName;

    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("LoginId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("PhoneNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CustomerName").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.LoginId;
    selectedRow.cells[1].innerHTML = formData.PhoneNumber;
    selectedRow.cells[2].innerHTML = formData.CustomerName;

}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("LoginId").value = '';
    document.getElementById("PhoneNumber").value = '';
    document.getElementById("CustomerName").value = '';

    selectedRow = null;
}



var selectedRow2 = null;

function onFormSubmit2(e) {
	event.preventDefault();
        var formData2 = readFormData2();
        if (selectedRow2 == null){
            insertNewRecord2(formData2);
		}
        else{
            updateRecord2(formData2);
		}
        resetForm2();
}


function readFormData2() {
    var formData2 = {};
    formData2["InvoiceNumber"] = document.getElementById("InvoiceNumber").value;
    formData2["CustomerName2"] = document.getElementById("CustomerName2").value;
    formData2["InvoiceDate"] = document.getElementById("InvoiceDate").value;
    return formData2;
}


function insertNewRecord2(data2) {
    var table2 = document.getElementById("storeList2").getElementsByTagName('tbody')[0];
    var newRow = table2.insertRow(table2.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data2.InvoiceNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data2.CustomerName2;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data2.InvoiceDate;

    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit2(this)">Edit</button> <button onClick="onDelete2(this)">Delete</button>`;
}


function onEdit2(td2) {
    selectedRow2 = td2.parentElement.parentElement;
    document.getElementById("InvoiceNumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("CustomerName2").value = selectedRow.cells[1].innerHTML;
    document.getElementById("InvoiceDate").value = selectedRow.cells[2].innerHTML;

}
function updateRecord2(formData2) {
    selectedRow.cells[0].innerHTML = formData.InvoiceNumber;
    selectedRow.cells[1].innerHTML = formData.CustomerName2;
    selectedRow.cells[2].innerHTML = formData.InvoiceDate;

}


function onDelete2(td2) {
    if (confirm('Do you want to delete this record?')) {
        row = td2.parentElement.parentElement;
        document.getElementById('storeList2').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm2() {
    document.getElementById("InvoiceNumber").value = '';
    document.getElementById("CustomerName2").value = '';
    document.getElementById("InvoiceDate").value = '';

    selectedRow2 = null;
}
