class Project {
  name;
  image;
  git;
  url;

  constructor(name, image, git, url) {
    this.name = name;
    this.image = image;
    this.git = git;
    this.url = url;
  }
}

let onlineMoviesWeb = new Project(
  "Online Movies Web",
  "./assets/project-img/web.webp",
  "https://github.com/JanNievesCedeno/onlineMoviesWeb",
  [
    "./assets/project-logo/html-svgrepo-com.svg",
    "./assets/project-logo/css-3-svgrepo-com.svg",
    "./assets/project-logo/php-svgrepo-com.svg",
    "./assets/project-logo/xampp-svgrepo-com.svg",
    "./assets/project-logo/mysql-logo-svgrepo-com.svg",
  ]
);

let onlineMoviesAndroid = new Project(
  "Online Movies Android",
  "./assets/project-img/android.webp",
  "https://github.com/JanNievesCedeno/onlineMoviesAndroid",
  [
    "./assets/project-logo/logo-google-android-studio-svgrepo-com.svg",
    "./assets/project-logo/java-svgrepo-com.svg",
    "./assets/project-logo/sqlite-svgrepo-com.svg",
  ]
);

let portfolioApp = new Project(
  "Portfolio App",
  "./assets/project-img/portfolio.webp",
  "https://github.com/JanNievesCedeno/project",
  [
    "./assets/project-logo/html-svgrepo-com.svg",
    "./assets/project-logo/css-3-svgrepo-com.svg",
    "./assets/project-logo/python-svgrepo-com.svg",
    "./assets/project-logo/flask-svgrepo-com.svg",
    "./assets/project-logo/sqlite-svgrepo-com.svg",
  ]
);

// Dom
let project = document.getElementById("project");
project.innerHTML = `
<div>
  <img width="400" height="200" src="${portfolioApp.image}" alt="image"/>
  <h2>${portfolioApp.name}</h2>
  <div><a class="links1" href="${portfolioApp.git}" target="_blank">Git Repository</a></div>
  <div class="logo-container">
    <img width="20" height="20" class="logo" src="${portfolioApp.url[0]}" alt="html" title="HTML"/>
    <img width="20" height="20" class="logo" src="${portfolioApp.url[1]}" alt="css" title="CSS"/>
    <img width="20" height="20" class="logo" src="${portfolioApp.url[2]}" alt="python" title="Python"/>
    <img width="20" height="20" class="logo" src="${portfolioApp.url[3]}" alt="flask" title="Flask"/>
    <img width="20" height="20" class="logo" src="${portfolioApp.url[4]}" alt="sqlite" title="SQLite"/>
  </div>
</div>

<div>
  <img width="400" height="200" src="${onlineMoviesWeb.image}" alt="image"/>
  <h2>${onlineMoviesWeb.name}</h2>
  <div><a class="links1" href="${onlineMoviesWeb.git}" target="_blank">Git Repository</a></div>
  <div class="logo-container">
    <img width="20" height="20" class="logo" src="${onlineMoviesWeb.url[0]}" alt="html" title="HTML"/>
    <img width="20" height="20" class="logo" src="${onlineMoviesWeb.url[1]}" alt="css" title="CSS"/>
    <img width="20" height="20" class="logo" src="${onlineMoviesWeb.url[2]}" alt="php" title="PHP"/>
    <img width="20" height="20" class="logo" src="${onlineMoviesWeb.url[3]}" alt="xampp" title="XAMPP"/>
    <img width="20" height="20" class="logo" src="${onlineMoviesWeb.url[4]}" alt="mysql" title="MySQL"/>
  </div>
</div>

<div>
  <img width="400" height="200" src="${onlineMoviesAndroid.image}" alt="image"/>
  <h2>${onlineMoviesAndroid.name}</h2>
  <div><a class="links1" href="${onlineMoviesAndroid.git}" target="_blank">Git Repository</a></div>
  <div class="logo-container">
    <img width="20" height="20" class="logo" src="${onlineMoviesAndroid.url[0]}" alt="android studio" title="Android Studio"/>
    <img width="20" height="20" class="logo" src="${onlineMoviesAndroid.url[1]}" alt="java" title="Java"/>
    <img width="20" height="20" class="logo" src="${onlineMoviesAndroid.url[2]}" alt="sqlite" title="SQLite"/>
  </div>
</div>
`;

// Collapse Menu
function collapse() {
  document.querySelector(".ham-menu").classList.toggle("active");
  document.querySelector(".nav-list").classList.toggle("active");
}
