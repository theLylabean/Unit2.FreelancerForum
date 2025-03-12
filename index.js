// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.

// Step 1: add an array of freelancers (Alice & Bob) and their services/price
const freelancers = [
  {name: 'Alice', job: 'Writer', price: '$30'},
  {name: 'Bob', job: 'Teacher', price: '$50'},
];

// Step 2: create a new array for few freelancers to appear at random
const newFreelancers = [
  {name: 'Carol', job: 'Programmer', price: '$70'},
  {name: 'Justin', job: 'Pharmacist', price: '$100'},
  {name: 'Kathryn', job: 'Consumer Data', price: '$150'},
  {name: 'Larry', job: 'Financial Advisor', price: '$200'}
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

  // Step 5: target the freelancersContainer created in the init function and then loop over the freelancer array 
  function renderFreelancers(){
    const container = document.querySelector('#freelancersContainer')
    container.innerHTML = ''
    freelancers.forEach((freelance)=>{
      const freelanceDiv = document.createElement('div')
      freelanceDiv.classList.add('freelance')
// Step 6: inside the div, add the freelancers details - name, job, price
      freelanceDiv.innerHTML = `<span>Name: ${freelance.name}</span>
                                <span>Occupation: ${freelance.job}</span>
                                <span>Starting Price: ${freelance.price}</span>`
      container.append(freelanceDiv)
    })
  }

  // Step 7: tried to create a function to add carol to the container. failed. will try tomorrow (3/12).
  const addCarol = () => {
    const index = newFreelancers.find((carol) => {
      return carol.job === 'Programmer'
    });
    const newFreelancer = newFreelancers[index]
    newFreelancers.push(newFreelancer)
    renderFreelancers()
  }

// Step 8: add an interval after which x amount of seconds, carol will be added to the freelancer list. moderately succeeded. code shows up in console.log but does not appear on screen. will try again tomorrow (3/12).
  const add = setInterval(addCarol, 5000)
  setTimeout(() => {
    clearInterval(add)
  }, 6000)

  init()
