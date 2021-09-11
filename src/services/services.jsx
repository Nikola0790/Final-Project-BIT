const urlToken = "http://localhost:3333/login";
const urlCandidates = "http://localhost:3333/api/candidates";

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
  /* .then(async (res) => {
      return await fetch(urlCandidates, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${res}`,
        },
      })
        .then((result) => {
          return result.json();
        })
        .then((res) => {
          console.log(res);
          return res;
        });
    }); */
};

export const getCandidates = async function getMeth() {
  let saveToken = localStorage.getItem("nameToken");
  return await fetch(urlCandidates, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${saveToken}`,
    },
  }).then((result) => {
    console.log(result);
    return result.json();
  });
};
