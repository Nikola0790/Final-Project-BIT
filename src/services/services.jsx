const urlToken = "http://localhost:3333/login";
const urlCandidates = "http://localhost:3333/api/candidates";


// POST method for geting token
export const token = (email, pass) => {
  return fetch(urlToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: `${email}`, password: `${pass}` }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.accessToken;
    });
};

// GET method for list candidates
export const getCandidates = async function getMeth() {
  let saveToken = localStorage.getItem("nameToken");
  return await fetch(urlCandidates, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${saveToken}`,
    },
  }).then((result) => {

    return result.json();
  });
};

export const getCandidate = async function getMeth(id) {
  let saveToken = localStorage.getItem("nameToken");
  return await fetch(`${urlCandidates}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${saveToken}`,
    },
  }).then((result) => {

    return result.json();
  });
};