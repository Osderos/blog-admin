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

const postSignup = async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/author/signup",
      newUser
    );
    console.log(response.data);
    return response.data
  } catch (err) {
    console.log(err);
  }
};

export { getAuthors, postSignup };
