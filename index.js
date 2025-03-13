// console.log(document)

// Step 1: add an array of freelancers (Alice & Bob) and their services/price
const freelancers = [
  {name: 'Alice', job: 'Writer', price: '30'},
  {name: 'Bob', job: 'Teacher', price: '50'},
];

// Step 2: create a new array for few freelancers to appear at random (possibly in order?)
const newFreelancers = [
  {name: 'Carol', job: 'Programmer', price: '70'},
  {name: 'Justin', job: 'Pharmacist', price: '100'},
  {name: 'Kathryn', job: 'Consumer Data', price: '150'},
  {name: 'Larry', job: 'Retired', price: '200'},
  {name: 'Lyla', job: 'Jr. Developer', price: '117'},
  {name: 'Joey', job: 'Surveyor', price: '326'},
  {name: 'Christopher', job: 'Veteran', price: '307'},
  {name: 'Collin', job: 'Biff', price: '604'},
  {name: 'Kurt', job: 'Teacher', price: '616'},
  {name: 'Sunny', job: 'Professional Body Guard', price: '1000'},
  {name: 'Wolfie', job: 'Blind Ambition', price: '1000'},
  {name: 'Salem', job: 'Cuddle Bug', price: '1000'},
  {name: 'Jaskier', job: 'Chaos Coordinator', price: '1000'}
  ];

// Step 3: create a function that shows the initialization process of a script, program, or object. (set up the initial state of a program of object). it serves as a common practice for developers to organize and execute setup tasks at the start of a program  or when an object is created.
  function init(){
    const root = document.querySelector('#root')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    h2.innerHTML = '<u>Available Freelancers</u>'
    h3.innerHTML = '<spread>Name  Occupation  Starting Price</spread>'
    root.append(h2)
    root.append(h3)

// Step 4: create a div for the Freelance container
    const freelancersContainer = document.createElement('div')
    freelancersContainer.id = 'freelancersContainer'
    freelancersContainer.classList.add('freelancers')
    root.append(freelancersContainer)

    renderFreelancers()
  }

  // Step 11: create a function that will update the current average of the listed freelancers.
const currentAverage = () => {
  let total = 0;
  for(let i=0; i<freelancers.length; i++){
    total += Number(freelancers[i].price)
  }
  // console.log(total)
  // console.log(freelancers.length)

  return Number(total / freelancers.length).toFixed(2)
}

// Step 11:
function updateAverage(){
  const textRoot = document.querySelector('#averageText')
  const h3 = document.createElement('h1')
  h3.innerHTML = '<u>Freelance Forum</u>'
  textRoot.replaceChildren(h3)
  const avgRoot = document.querySelector('#average')
  const average = document.createElement('h3')
  average.innerHTML = `The total average price for the listed Freelancers is: <u>$${currentAverage()}</u>`
  avgRoot.replaceChildren(average)
}

// Step 5: target the freelancersContainer created in the init function and then loop over the freelancer array 
  function renderFreelancers(){
    const container = document.querySelector('#freelancersContainer')
    container.innerHTML = ''
    updateAverage()
    freelancers.forEach((freelance)=>{
      const freelanceDiv = document.createElement('div')
      freelanceDiv.classList.add('freelance')
    }
// Step 6: ----original code---- inside the div, add the freelancers details - name, job, price
      // freelanceDiv.innerHTML = `<span><b>Name:</b> <u>${freelance.name}</u></span>
      //                           <span><b>Occupation:</b> <i><u>${freelance.job}</u></i></span>
      //                           <span><b>Starting Price:</b> <u>$${freelance.price}</u></span>`
      // container.append(freelanceDiv)

    )}
  
// Step 6: ----updated code---- this updated code is the original code put inside a table created dynamically
      // Create a table dynamically
const freelanceTable = document.createElement("table");
freelanceTable.style.border = '3px solid black';
freelanceTable.style.borderCollapse = "collapse";

const columnWidths = {
  Name: '1000px',
  Occupation: '1000px',
  'Starting Price': '1000px'
}

// Create table header
const headerRow = document.createElement("tr");
const headers = ["Name", "Occupation", "Starting Price"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.width = columnWidths[text];
    th.style.border = '1px solid skyblue';
    th.style.textDecoration = 'underline';
    headerRow.appendChild(th);
});
freelanceTable.appendChild(headerRow);

// Create table row for data
freelancers.forEach(freelance => {
  const dataRow = document.createElement("tr");
  [`<u>${freelance.name}</u>`, `<i>${freelance.job}</i>`, `<b>$${freelance.price}</b>`].forEach(text => {
      const td = document.createElement("td");
      td.innerHTML = `${text}`; // Underline text
      td.style.border = '1px solid skyblue'
      dataRow.appendChild(td);
});

freelanceTable.appendChild(dataRow);

// Append table to container
const container = document.getElementById("container");
container.appendChild(freelanceTable);
})

  // Step 7: create a function to add carol to the container. failed. will try tomorrow (3/12).
  // Step 7: create a function to add carol to the container. failed. will try tomorrow (3/12).
  const addCarol = () => {
    const carol = newFreelancers.find((carol) => {
      return carol.job === 'Programmer'
    });
    // console.log(index)
    // Fix for Step 7: removed const newFreelancer[index]...didn't need. also changed newFreelancers to freelancers and pushed index instead of newFreelancer.
    if(carol){
    freelancers.push(carol)
    renderFreelancers()}

  const dataRow = document.createElement('tr');
  [`<u>${carol.name}</u>`, `<i>${carol.job}</i>`, `<b>$${carol.price}</b>`].forEach(text =>{
    const td = document.createElement('td');
    td.innerHTML = `${text}`;
    td.style.border = '1px solid skyblue'
    dataRow.appendChild(td);
  });
  freelanceTable.appendChild(dataRow);
}

// Step 8: add an interval after which x amount of seconds, carol will be added to the freelancer list. moderately succeeded. code shows up in console.log but does not appear on screen. will try again tomorrow (3/12).
  const add = setInterval(addCarol, 1000)
  setTimeout(() => {
    clearInterval(add)
  }, 1000)


// Step 9: ----original code---- create a function to add newFreelancers at random and render on the screen.
// const addRandomFreelancer = () => {
//   const randomIndex = Math.floor(Math.random() * newFreelancers.length);
// if(randomIndex === 0){
// randomIndex +=1
// }
//   console.log(randomIndex)
//   const selectedFreelancer = newFreelancers[randomIndex];
    //console.log(selectedFreelancer)
    // Get freelancer from newFreelancers
//   freelancers.push(randomFreelancer); // Add to original freelancers array
//   renderFreelancers(); // Update the UI
// }

// Step 9: ----updated code---- this code is the updated code that adds the selectedFreelancer to the table that was created dynamically
const addRandomFreelancer = () => {
  //console.log(newFreelancers)
  if (newFreelancers.length <= 1) {
    return -1; // Not enough options to choose from
  }

  let randomIndex = Math.floor(Math.random() * newFreelancers.length);
  //console.log(randomIndex)
  if(randomIndex === 0){
    randomIndex += 1
  }
  const selectedFreelancer = newFreelancers[randomIndex]; 
  //console.log(selectedFreelancer)
  // Get freelancer from newFreelancers

  freelancers.push(selectedFreelancer); // Add to original freelancers array
  renderFreelancers(); // Update the UI
  
  const dataRow = document.createElement('tr');
  [`<u>${selectedFreelancer.name}</u>`, `<i>${selectedFreelancer.job}</i>`, `<b>$${selectedFreelancer.price}</b>`].forEach(text =>{
    const td = document.createElement('td');
    td.innerHTML = `${text}`;
    td.style.border = '1px solid skyblue'
    dataRow.appendChild(td);
  });
  freelanceTable.appendChild(dataRow);
  
  return selectedFreelancer; // Return the added freelancer for reference
};

// Step 10: create an interval for random freelancers to appear and put an interval for it to stop
const randomAdd = setInterval(addRandomFreelancer, 2500)
setTimeout(() => {
  clearInterval(randomAdd)
}, 25000)

  init()