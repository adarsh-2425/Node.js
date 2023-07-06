const people = [
  {name: 'Ashik', dob: new Date(1998, 1, 1)},
  {name: 'Inna', dob: new Date(1995, 5, 2)},
  {name: 'Alexandra', dob: new Date(1990, 10, 6)}, 
];

const getAge = (dob) => {
  const now = new Date();
  const diff = now - dob.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

module.exports = { people, getAge };
