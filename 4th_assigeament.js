// fill in javascript code here
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let id = document.getElementById("docID").value;
    let dept = document.getElementById("dept").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;

    // table select karo
    let table = document.querySelector("table");

    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = id;
    row.insertCell(2).innerText = dept;
    row.insertCell(3).innerText = exp;
    row.insertCell(4).innerText = email;
    row.insertCell(5).innerText = mobile;

    // Role Logic
    let roleCell = row.insertCell(6);
    if (exp > 5) {
        roleCell.innerText = "Senior";
    } else {
        roleCell.innerText = "Junior";
    }

    // Delete Button
    let deleteCell = row.insertCell(7);
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function () {
        row.remove();
    };
    deleteCell.appendChild(btn);

    // form reset
    document.querySelector("form").reset();
});


