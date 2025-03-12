// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.

//add an array of freelancers (Alice & Bob) and their services/price
const freelancers = [
  {name: 'Alice', job: 'Writer', price: '$30'},
  {name: 'Bob', job: 'Teacher', price: '$50'},
];

//create a new array for few freelancers to appear every few seconds
const newFreelancers = [
  {name: 'Carol', job: 'Programmer', price: '$70'},
  {name: 'Justin', job: 'Pharmacist', price: '$100'},
  {name: 'Kathryn', job: 'Consumer Data', price: '$150'},
  {name: 'Larry', job: 'Financial Advisor', price: '$200'}
  ];

  function init(){
    const root = document.querySelector('#root')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Freelancer Forum'
    root.append(h1)

    const freelancersContainer = document.createElement('div')
    freelancersContainer.id = 'freelancersContainer'
    freelancersContainer.classList.add('freelancers')
    root.append(freelancersContainer)

    renderFreelancers()
  }

  function renderFreelancers(){
    const container = document.querySelector('#freelancersContainer')
    container.innerHTML = ''
    freelancers.forEach((freelance)=>{
      const freelanceDiv = document.createElement('div')
      freelanceDiv.classList.add('freelance')
      freelanceDiv.innerHTML = `<span>Name: ${freelance.name}</span>
                                <span>Occupation: ${freelance.job}</span>
                                <span>Starting Price: ${freelance.price}</span>`
      container.append(freelanceDiv)
    })
  }

  const addCarol = () => {
    const index = newFreelancers.find((carol) => {
      return carol.job === 'Programmer'
    });
    const newFreelancer = newFreelancers[index]
    newFreelancers.push(newFreelancer)
    renderFreelancers()
  }

  const add = setInterval(addCarol, 5000)
  setTimeout(() => {
    clearInterval(add)
  }, 6000)

  init()

// const shapes = [
//   {
//     color: "red",
//     size: "small",
//   },
//   {
//     color: "yellow",
//     size: "small",
//   },
// ];

/** Adds a shape with random properties to the `shapes` array */
// function addShape() {
//   const color = colors[Math.floor(Math.random() * colors.length)];

  // TODO: Randomize the size of the shape
  // const size = sizes[Math.floor(Math.random() * sizes.length)];

  // shapes.push({ color, size });
// }

// === Render ===
// To "render" is to update the DOM to reflect the current state.
// In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */
// function render() {
//   // Render the squares
//   const squareList = document.querySelector("#squares");
//   const squareElements = shapes.map((shape) => {
//     const squareElement = document.createElement("li");
//     squareElement.classList.add(shape.color, shape.size);
//     return squareElement;
//   });
//   squareList.replaceChildren(...squareElements);

//   // TODO: Render the circles
//   const circleList = document.querySelector('#circles');
//   const circleElements = shapes.map((shape) => {
//     const circleElement = document.createElement('li');
//     circleElement.classList.add(shape.color, shape.size);
//     return circleElement;
//   });
//   circleList.replaceChildren(...circleElements);
// }

// === Script ===
// In this section, we call the functions that we've defined above.

// `setInterval` will call the callback function every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
// const addShapeIntervalId = setInterval(() => {
//   addShape();
//   render();

//   // TODO: Stop adding shapes if we've reached the maximum number of shapes
//     if (shapes.length >= maxShapes) {
//       clearInterval(addShapeIntervalId);
//     }
//   }, 1000);
// render(); // We call this function once to render the initial state
