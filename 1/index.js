const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries) {
    let maxSalary = 0;
    let topPaid = [];
  
    for (const [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        topPaid = [name];
      } else if (salary === maxSalary) {
        topPaid.push(name);
      }
    }
  
    return topPaid.length === 1 ? topPaid[0] : topPaid;
  }
  
  console.log(topSalary(salaries)); 


