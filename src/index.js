import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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
