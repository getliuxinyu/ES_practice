// Technical Definition
//
// Book Example - A list of objects with key value pairs
const bookStore = [
  {
    title: "The Art of War",
    releaseDate: "12/1/2022",
    price: "$50"
  },
  {
    title: "48 Laws of Power",
    releaseDate: "07/1/2022",
    price: "$20"
  },
  {
    title: "Art of Seduction",
    releaseDate: "10/1/2022",
    price: "$70"
  }
];

const newBook = [
  {
    title: "The 50th Law",
    releaseDate: "2/10/2022",
    price: "$10"
  }
];

// Adds new record of data to the object without replacing its contents
const allBooks = () => {
  return {
    bookStore,
    ...newBook
  };
};
console.log("allbooks", allBooks());
