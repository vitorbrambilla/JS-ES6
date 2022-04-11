const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
})

console.log(highNumbers);
//

const users = [
  { name: 'Vitor', available: false },
  { name: 'Enzo', available: false },
  { name: 'Lucca', available: true },
  { name: 'João', available: true }
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);