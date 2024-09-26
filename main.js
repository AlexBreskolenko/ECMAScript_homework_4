// ********************Task 1
async function getUserData(ID) {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await responce.json();
  if (responce.ok) {
    const user = users.find((ell) => ell.id === ID);
    console.log(user === undefined ? "Пользователь не найден" : user);
  } else {
    console.log(`Error : ${responce.status}`);
  }
}

getUserData(2);

// *************Task 2
const user = {
  name: "Alex",
  surname: "Belkin",
  age: "30",
  email: "alex@gmail.com",
};

async function saveUserData(url, user) {
  let responce = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charser=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (responce.ok) {
    console.log(responce.status);
  } else {
    console.log("Что то пошло не так.");
  }
}

// **************Task 3