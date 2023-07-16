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

// Technical Definition
// Map - Iterate over a list of properties and returns in new array
const displayBooks = (books) => {
  const res = books.map((book) => {
    return book;
  });
  return res;
};

function getBooks(books) {
  const res = books.map((book) => book);
  return res;
}
