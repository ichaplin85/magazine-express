// document.additem.addEventListener('submit', async (e) => {
//   e.preventDefault();
//
//   const text = e.target.text.value;
//   const date = e.target.date.value;
//   const post = e.target.post.value;
//   const { action } = e.target;
//
//   // console.log(text,date,post, action, method);
//   const response = await fetch('/item', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ text, date, post }),
//   });
//   // console.log(response);
//   // if (response.ok) {
//   //   window.location = 'http://localhost:3001/';
//   // } if (!response.ok) {
//   //   alert('Введите правильный пароль, логин или перейдите на регистрацию');
//   //   const addDiv = document.createElement('div');
//   //   addDiv.style.margin = '15px';
//   //   addDiv.style.fontSize = '20px';
//   //   addDiv.innerHTML = `
//   //   <a href="/register">Register</a>
//   //   `;
//   //   document.login.appendChild(addDiv);
//   // }
// });
