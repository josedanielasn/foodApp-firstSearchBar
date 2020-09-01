let Restaurant_1 = [
  {
    name: 'Hapag Vicenticos',
    rating: 4.4,
    cuisine: ['filipino', 'lunch', 'dinner', 'savory', ''],
    location: 1,
    dine_in_out: [true, true],
    budget: 1000,
    img: 'images2/vicenticos.jpg',
  },

  {
    name: 'Banatú Box Food Group',
    rating: 4.5,
    cuisine: ['filipino', 'lunch', 'dinner', 'savory', 'asian', 'western', ''],
    location: 2,
    dine_in_out: [false, true],
    budget: 200,
    img: 'images2/banatu.jpg',
  },

  {
    name: 'Bistro 360',
    rating: 4.3,
    cuisine: ['filipino', 'asian', 'western', 'dinner', 'savory', ''],
    location: 0.85,
    dine_in_out: [true, true],
    budget: 700,
    img: 'images2/bistro.jpg',
  },

  {
    name: 'Caffe La Tea',
    rating: 4.3,
    cuisine: ['filipino', 'western', 'dessert', 'savory', ''],
    location: 0.7,
    dine_in_out: [true, true],
    budget: 200,
    img: 'images2/tea.jpg',
  },

  {
    name: 'Paleta Shabu-shabu, Pigar Pigar and Steak',
    rating: 4.1,
    cuisine: ['western', 'middle easter', 'savory', 'dinner', ''],
    location: 2.5,
    dine_in_out: [true, false],
    budget: 600,
    img: 'images2/paleta.jpg',
  },
  {
    name: 'Umbria Steak House',
    rating: 4.2,
    cuisine: ['western', 'savory', 'lunch', 'dinner', ''],
    location: 4.2,
    dine_in_out: [true, false],
    budget: 500,
    img: 'images2/umbria.jpg',
  },

  {
    name: 'Plaza Leticia',
    rating: 4.0,
    cuisine: ['filipino', 'asian', 'savory', 'dinner', 'lunch', ''],
    location: 4,
    dine_in_out: [true, true],
    budget: 200,
    img: 'images2/leticia.jpg',
  },

  {
    name: "Edna's Cakeland",
    rating: 4.6,
    cuisine: ['dessert', ''],
    location: 1.1,
    dine_in_out: [false, true],
    budget: 100,
    img: 'images2/edna.jpg',
  },

  {
    name: 'Caffeinated & Co.',
    rating: 4.4,
    cuisine: ['dessert', ''],
    location: 1.7,
    dine_in_out: [true, true],
    budget: 200,
    img: 'images2/co.jpg',
  },

  {
    name: 'Barj Cafe',
    rating: 4.4,
    cuisine: ['dessert', 'savory', 'western', 'dinner', ''],
    location: 1,
    dine_in_out: [true, true],
    budget: 250,
    img: 'images2/barj.jpg',
  },

  {
    name: "Rustica's Restaurant",
    rating: 4.5,
    cuisine: ['filipino', 'asian', 'savory', 'dinner', 'lunch', ''],
    location: 0.4,
    dine_in_out: [true, false],
    budget: 700,
    img: 'images2/rustica.jpg',
  },

  {
    name: 'Lamarang Restaurant',
    rating: 4,
    cuisine: ['filipino', 'savory', 'dinner', ''],
    location: 2.2,
    dine_in_out: [true, false],
    budget: 500,
    img: 'images2/lamarang.jpg',
  },

  {
    name: "Theo's Diner",
    rating: 4,
    cuisine: ['filipino', 'asian', 'dinner', 'savory', ''],
    location: 0.4,
    dine_in_out: [true, false],
    budget: 150,
    img: 'images2/theo.jpg',
  },

  {
    name: 'Fine Cut Butchery',
    rating: 4.8,
    cuisine: ['western', 'savory', 'dinner', 'lunch', ''],
    location: 0.4,
    dine_in_out: [true, false],
    budget: 350,
    img: 'images2/fine.jpg',
  },

  {
    name: 'Rosendas',
    rating: 4.3,
    cuisine: ['filipino', 'asian', 'western', 'savory', 'lunch', 'dinner', ''],
    location: 0.3,
    dine_in_out: [true, false],
    budget: 600,
    img: 'images2/rosenda.jpg',
  },
  {
    name: "Wing's Factory",
    rating: 4,
    cuisine: ['Wester', 'lunch', 'dinner', 'savory', ''],
    location: 3.73,
    dine_in_out: [true, true],
    budget: 200,
    img: 'images2/wing.jpg',
  },
];
Restaurant_1.sort(function (a, b) {
  return a.location - b.location;
});
// let  = [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15, res16]
const list = document.querySelector('.list');
const search = document.querySelector('.search');
const tags = document.querySelector('.cuisine');
const budget_search = document.querySelector('.budget');
const location_search = document.querySelector('.location');
let filteredRest = Restaurant_1;

// const search1 = document.querySelector('.search_field');
// const button1 = document.querySelector('#icon');

// search1.addEventListener('keypress', function (e) {
//   if (e.keyCode === 13) {
//     location.replace('food2.html');
//     searchPage()
//   }
// });

// button1.addEventListener('click', function () {
//   location.replace('food2.html');
//   searchPage()
// });

const display_res = function (Restaurant_1) {
  const htmlstring = Restaurant_1.map(function (element) {
    const tags = element.cuisine.join(', ');
    return `<div class = "restaurant">
      <img src="${element.img}">
      <div class = "description" id ="${element.name}">
      <div class = 'first'>
      <span class ="name">${element.name}</span>
      <span class = "rating">${element.rating} </span> 
      </div>
      <span class = "budget1"> &#8369; ${element.budget} </span>
      <span class = "distance">Distance: ${element.location} Km</span> 
      <span class ="tags"> Tags: ${tags}</span>
      </div>
      </div>`;
  }).join('');
  list.innerHTML = htmlstring;
};

display_res(Restaurant_1);
search_func(filteredRest);
location_func(filteredRest);
budget_func(filteredRest);
cuisine_search(filteredRest);

function cuisine_search(element) {
  tags.addEventListener('keyup', function (e) {
    const searchString = e.target.value;

    filteredRest = element.filter(function (nameSearch) {
      return nameSearch.cuisine.includes(searchString.toLowerCase());
    });
    console.log(filteredRest);
    display_res(filteredRest);
    // list.innerHTML = searchString;
    search_func(filteredRest);
    location_func(filteredRest);
    budget_func(filteredRest);
  });
}

function search_func(element) {
  search.addEventListener('keyup', function (e) {
    const searchString = e.target.value;
    filteredRest = element.filter(function (nameSearch) {
      return nameSearch.name.toLowerCase().includes(searchString.toLowerCase());
    });
    console.log(filteredRest);
    display_res(filteredRest);
    // list.innerHTML = searchString;
    location_func(filteredRest);
    budget_func(filteredRest);
    cuisine_search(filteredRest);
  });
}

function budget_func(element) {
  budget_search.addEventListener('keyup', function (e) {
    let searchNumber = parseFloat(e.target.value);
    if (isNaN(searchNumber)) {
      searchNumber = 99999;
    }
    console.log(searchNumber);
    filteredRest = element.filter(function (nameSearch) {
      return nameSearch.budget <= searchNumber;
    });
    console.log(filteredRest);
    display_res(filteredRest);
    // list.innerHTML = searchString;
    search_func(filteredRest);
    location_func(filteredRest);
    cuisine_search(filteredRest);
  });
}

function location_func(element) {
  location_search.addEventListener('keyup', function (e) {
    let searchLocation = parseFloat(e.target.value);
    if (isNaN(searchLocation)) {
      searchLocation = 99999;
    }
    console.log(searchLocation);
    filteredRest = element.filter(function (nameSearch) {
      return nameSearch.location <= searchLocation;
    });
    console.log(filteredRest);
    display_res(filteredRest);
    // list.innerHTML = searchString;
    search_func(filteredRest);
    cuisine_search(filteredRest);
    budget_func(filteredRest);
  });
}

display_res(Restaurant_1);
