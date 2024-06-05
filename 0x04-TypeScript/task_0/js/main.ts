interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Shakir",
	lastName: "Abdo",
	age: 28,
	location: "Hail"
};

const student2: Student = {
        firstName: "Antar",
        lastName: "Sidgi",
        age: 27,
        location: "Riyadh"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const color = '#FADA55';
table.style.background = color;
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = `1px solid ${color}`;
  locationCell.style.border = `1px solid ${color}`;
  nameCell.style.padding = "1rem";
  locationCell.style.padding = "1rem";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
