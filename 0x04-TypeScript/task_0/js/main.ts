interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
}

const student2: Student = {
    firstName: 'mohamed',
    lastName: 'omar',
    age: 22,
    location: 'cairo'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstName = document.createElement("td");
    const location = document.createElement("td");

    firstName.innerText = student.firstName;

    location.innerText = student.location;

    row.appendChild(firstName);

    row.appendChild(location);

    table.appendChild(row);
});

document.body.appendChild(table);