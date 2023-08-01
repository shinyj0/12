var form = document.getElementById('myForm');
var  tableBody = document.querySelector('#myTable tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = form.elements.name.value;
    var studentnum = form.elements.studentnum.value;
    var tel = form.elements.tel.value;
    var subject = form.elements.subject.value;
    var demand = form.elements.demand.value;

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${maskStudentNum(studentnum)}</td>
        <td>${maskPhoneNumber(tel)}</td>
        <td>${subject}</td>
        <td>${demand}</td>
    `;

    tableBody.appendChild(newRow);
    form.reset();
});

function maskStudentNum(studentnum) {
    var maskedNum = '';
    for (var i = 0; i < studentnum.length; i++) {
        maskedNum += '*';
    }
    return maskedNum;
}

function maskPhoneNumber(phoneNumber) {
    var visiblePart = phoneNumber.substring(0, phoneNumber.length - 4);
    var maskedPart = phoneNumber.substring(phoneNumber.length - 4).replace(/./g, '*');
    return visiblePart + maskedPart;
}








