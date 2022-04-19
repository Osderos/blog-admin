import axios from "axios";

const getAuthors = async () => {
  const authors = [];
  try {
    const response = await axios.get("http://localhost:3000/api/authors");
    const authorsData = response.data;
    authorsData.forEach((element) => {
      authors.push(element);
    });
  } catch (err) {
    console.log(err);
  }
  return authors;
};

export { getAuthors };
