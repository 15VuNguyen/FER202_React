fetch("https://reqres.in/api/users?page=2").then((res) => {
  res.json().then((data) => {
    let html = "";
    data.data.forEach((item) => {
      html += `<div>${item.first_name}  ${item.last_name}</div>`;
    });
    document.getElementById("result").innerHTML = html;
    console.log(data);
  });
});
