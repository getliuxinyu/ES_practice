// Technical Definition
// Map - Iterate over a list of properties and returns in new array

// Technical Definition
// Iterate over a list of properties and returns it values

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

const displayAllBooks = (books) => {
  const res = books.forEach(function (book) {
    console.log(book);
  });
  return res;
};
console.log("foreach books2", displayAllBooks(bookStore));
