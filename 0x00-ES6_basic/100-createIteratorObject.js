export default function createIteratorObject(report) {
  const employees = []
  /* eslint-disable */
  for (const depart of Object.keys(report.allEmployees)) {
    for (const emp of report.allEmployees[depart]) {
      employees.push(emp)
    }
  }

  return employees
}
