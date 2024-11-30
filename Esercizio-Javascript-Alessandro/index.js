const API_URL = "https://jsonplaceholder.typicode.com/comments";

const fetchData = async () => {
  try {
    const response = await fetch(API_URL, {});

    const result = await response.json();
    console.log(result)
  } catch (error) {
    console.log(error);
  }
};


console.log("banane")