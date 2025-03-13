console.log(document)
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

// Step 3: create an init function
  function init(){
    const root = document.querySelector('#root')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Freelancer Forum'
    root.append(h1)

// Step 4: create a div for the Freelance container
    const freelancersContainer = document.createElement('div')
    freelancersContainer.id = 'freelancersContainer'
    freelancersContainer.classList.add('freelancers')
    root.append(freelancersContainer)

    renderFreelancers()
  }

const currentAverage = () => {
  let total = 0;
  for(let i=0; i<freelancers.length; i++){
    total += Number(freelancers[i].price)
  }
  console.log(total)
  console.log(freelancers.length)

  return Number(total / freelancers.length).toFixed(2)
}

// Step 11:
function updateAverage(){
  const avgRoot = document.querySelector('#average')
  const average = document.createElement('h1')
  average.innerText = `The total average price for the listed Freelancers is: $${currentAverage()}`
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

// Step 6: inside the div, add the freelancers details - name, job, price
      freelanceDiv.innerHTML = `<span>Name: ${freelance.name}</span>
                                <span>Occupation: ${freelance.job}</span>
                                <span>Starting Price: $${freelance.price}</span>`
      container.append(freelanceDiv)
    })
  }

  // Step 7: create a function to add carol to the container. failed. will try tomorrow (3/12).
  const addCarol = () => {
    const index = newFreelancers.find((carol) => {
      return carol.job === 'Programmer'
    });
    //console.log(index)
    // Fix for Step 7: removed const newFreelancer[index]...didn't need. also changed newFreelancers to freelancers and pushed index instead of newFreelancer.
    freelancers.push(index)
    renderFreelancers()
  }

// Step 8: add an interval after which x amount of seconds, carol will be added to the freelancer list. moderately succeeded. code shows up in console.log but does not appear on screen. will try again tomorrow (3/12).
  const add = setInterval(addCarol, 1000)
  setTimeout(() => {
    clearInterval(add)
  }, 1000)

// Step 9: create a function to add newFreelancers at random and render on the screen.
// const addRandomFreelancer = () => {
//   const randomIndex = Math.floor(Math.random() * newFreelancers.length)
//   console.log(randomIndex)
//   const randomFreelancer = newFreelancers[randomIndex]
//   freelancers.push(randomFreelancer)
//   renderFreelancers()
// }


const addRandomFreelancer = () => {
  console.log(newFreelancers)
  if (newFreelancers.length <= 1) {
    return -1; // Not enough options to choose from
  }

  let randomIndex = Math.floor(Math.random() * newFreelancers.length);
  console.log(randomIndex)
  if(randomIndex === 0){
    randomIndex += 1
  }
  const selectedFreelancer = newFreelancers[randomIndex]; 
  console.log(selectedFreelancer)
  // Get freelancer from newFreelancers

  freelancers.push(selectedFreelancer); // Add to original freelancers array
  renderFreelancers(); // Update the UI

  return selectedFreelancer; // Return the added freelancer for reference
};

// Step 10
const randomAdd = setInterval(addRandomFreelancer, 2500)
setTimeout(() => {
  clearInterval(randomAdd)
}, 25000)

  init()