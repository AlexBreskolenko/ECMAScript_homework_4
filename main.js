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
