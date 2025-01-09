// Base URL - I have generate an API from Trivia API and checked the code in chrome console
const apiUrl = "https://opentdb.com/api.php?amount=10";

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        // The problem was here with !
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      //Here i have add the catch error to show the error in console
      console.error("There was a problem with the fetch operation", error);
    });
}

fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  // TODO: Implement the function
  fetch(url, {
    method: "POST", // For the post we change the methode to POST and we add headers and body the rest of the code is like GET method
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation", error);
    });
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
