function Restaurant(name, rating, cuisine, location_km, dine_in_out) {
  this.name = name;
  this.rating = rating;
  this.cuisine = cuisine;
  this.location_km = location_km;
  this.dine_in_out = dine_in_out;
}

new Restaurant(
  'Hapag Vicenticos',
  4.4,
  ['Filipino', 'Lunch', 'Dinner', 'Savory'],
  1,
  [true, true]
);

new Restaurant('Banatú Box Food Group', 4.5, ['All'], 2, [false, true]);

new Restaurant(
  'Bistro 360',
  4.3,
  ['Filipino', 'Asian', 'Western', 'Dinner', 'Savory'],
  0.85,
  [true, true]
);

new Restaurant(
  'Caffe La Tea',
  4.3,
  ['Filipino', 'Western', 'Dessert', 'Savory'],
  0.7,
  [true, true]
);

new Restaurant(
  'Paleta Shabu-shabu, Pigar Pigar and Steak',
  4.1,
  ['Western', 'Middle Easter', 'Savory', 'Dinner'],
  2.5,
  [true, false]
);

new Restaurant(
  'Umbria Steak House',
  4.2,
  ['Western', 'Savory', 'Lunch', 'Dinner'],
  4.2,
  [true, false]
);

new Restaurant(
  'Plaza Leticia',
  4.0,
  ['Filipino', 'Asian', 'Savory', 'Dinner', 'Lunch'],
  4,
  [true, true]
);

new Restaurant(
  "Joey's Restaurant Café",
  4.3,
  ['Filipino', 'Savory', 'Dessert', 'Lunch', 'Dinner'],
  1,
  [true, true]
);

new Restaurant("Edna's Cakeland", 4.6, ['Dessert'], 1.1, [false, true]);

new Restaurant('Caffeinated & Co.', 4.4, ['Dessert'], 1.7, [true, true]);

new Restaurant(
  'Barj Cafe',
  4.4,
  ['Dessert', 'Savory', 'Western', 'Dinner'],
  1,
  [true, true]
);

new Restaurant("Pocholo's", 4.5, ['Filipino', 'Savory', 'Dinner', 'Lunch'], 2, [
  true,
  false,
]);

new Restaurant(
  'Rustica Restaurant',
  4.5,
  ['Filipino', 'Asian', 'Savory', 'Dinner', 'Lunch'],
  0.4,
  [true, false]
);

new Restaurant(
  'Lamarang Restaurant',
  4,
  ['Filipino', 'Savory', 'Dinner'],
  2.2,
  [true, false]
);

new Restaurant(
  "Theo's Diner",
  4,
  ['Filipino', 'Asian', 'Dinner', 'Savory'],
  0.4,
  [true, false]
);

new Restaurant(
  'Fine Cut Butchery',
  4.8,
  ['Western', 'Savory', 'Dinner', 'Lunch'],
  0.4,
  [true, false]
);
