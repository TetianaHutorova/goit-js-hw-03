// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mod = "happy";
user.mod = "skydiving";
user.premium = false;

for (const iterator of Object.keys(user)) {
  console.log(`${iterator} - ${user[iterator]}`);
}