// Technical Definition
// Iterates through array of objects and returns the record that contains the matching request

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
const filterObject = (books) => {
  const res = books.filter((book) => {
    return book.price === "$50";
  });
  return res;
};
console.log("filtered list", filterObject(bookStore));
