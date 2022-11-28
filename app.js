
let followers = document.getElementById("followers");
let repositoriy = document.getElementById("repositoriy");
let following = document.getElementById("following");
let userName = document.querySelector("#search");
let profilePic= document.getElementById("img");
userName.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    console.log('Enter')
    fetch(`https://api.github.com/users/${userName.value}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        followers.innerHTML = data.followers;
        repositoriy.innerHTML = data.public_repos;
        following.innerHTML = data.following;
        profilePic.src = data.avatar_url;

      });
  }
});
