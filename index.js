const todos = ["Do morning run", "Eat lunch outside", "Go Home"];

const showTodos = function(data) {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(`[${index + 1}] ${item}`);
  }
};
showTodos(todos);

const routine = ["Do morning run", "Eat lunch outside", "Go Home"];

const searchRoutine = function(details, textToSearch) {
  let newTodos = [];
  for (let index = 0; index < details.length; index++) {
    const unit = details[index];
    const lowerCasedUnit = unit.toLowerCase();
    const lowerCasedText = textToSearch.toLowerCase();
    if (lowerCasedUnit.includes(lowerCasedText)) {
      newTodos.push(unit);
    }
  }
  return newTodos;
};
const foundTodos = searchRoutine(routine, "Eat");
console.log(foundTodos);

const myTodos = [
  {
    id: 1,
    text: "Do morning run",
    favorite: false,
    completed: true
  },
  {
    id: 2,
    text: "Eat lunch outside",
    favorite: true,
    completed: true
  },
  {
    id: 3,
    text: "Go home",
    favorite: true,
    completed: false
  }
];

const showMyTodos = function(info) {
  for (let index = 0; index < info.length; index++) {
    const piece = info[index];

    let infoString = ``;

    infoString += piece.completed ? `☑ ` : `☐ `;
    infoString += `${piece.text}`;
    infoString += piece.favorite ? ` ★` : ``;

    console.log(infoString);
  }
};
showMyTodos(myTodos);

const searchTodos = function(facts, searchText) {
  let newSearch = [];

  for (let index = 0; index < facts.length; index++) {
    const thing = facts[index];

    const lowerCaseThing = thing.text.toLowerCase();
    const lowerCaseSearchText = searchText.toLowerCase();

    if (lowerCaseThing.includes(lowerCaseSearchText)) {
      newSearch.push(thing);
    }
  }
  return newSearch;
};
const foundMyTodos = searchTodos(myTodos, "Go");
console.log(foundMyTodos);
