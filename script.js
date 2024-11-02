document.addEventListener('DOMContentLoaded', function () {
  // Hulk için
  var hulkResim = document.querySelector('.movie-item-img[alt="hulk"]');
  hulkResim.addEventListener('click', function () {
      var youtubeURL = 'https://www.youtube.com/watch?v=cBTBq9Q-RPY';
      window.open(youtubeURL, '_blank');
  });

  // A.R.O.G için
  var arogResim = document.querySelector('.movie-item-img[alt="arog"]');
  arogResim.addEventListener('click', function () {
      var youtubeURL = 'https://www.youtube.com/watch?v=LhiFw_2EasE&pp=ygUEZ29yYQ%3D%3D';
      window.open(youtubeURL, '_blank');
  });

  // G.O.R.A için
  var goraResim = document.querySelector('.movie-item-img[alt="gora"]');
  goraResim.addEventListener('click', function () {
      var youtubeURL = 'https://www.youtube.com/watch?v=UTUiQ9NWZcM&pp=ygUMZ29yYSBmcmFnbWFu';
      window.open(youtubeURL, '_blank');
  });

  // Örümcek Adam için
  var orumcekAdamResim = document.querySelector('.movie-item-img[alt="örümcek adam"]');
  orumcekAdamResim.addEventListener('click', function () {
      var youtubeURL = 'https://www.youtube.com/watch?v=mQ_F_0jA59k&pp=ygUnw7Zyw7xtY2VrIGFkYW0gZXZlIGTDtm7DvMWfIHlvayBmcmFnbWFu';
      window.open(youtubeURL, '_blank');
  });

  // The Hobbit için
  var hobbitResim = document.querySelector('.movie-item-img[alt="hobbit"]');
  hobbitResim.addEventListener('click', function () {
      var youtubeURL = 'https://www.youtube.com/watch?v=iVAgTiBrrDA&pp=ygUSdGhlIGhvYmJpdCBmcmFnbWFu';
      window.open(youtubeURL, '_blank');
  });

  // Daredevil için
  var daredevilResim = document.querySelector('.movie-item-img[alt="daredevil"]');
  daredevilResim.addEventListener('click', function () {
      var youtubeURL = 'https://www.youtube.com/watch?v=QWbMckU3AOQ';
      window.open(youtubeURL, '_blank');
  });


  

  // Diğer kodlar buraya eklenmeye devam edebilir...

  const arrows = document.querySelectorAll(".arrow");
  const movieLists = document.querySelectorAll(".movie-list");

  arrows.forEach((arrow, i) => {
      const widthRatio = Math.floor(window.innerWidth / 300);
      const itemNumber = movieLists[i].querySelectorAll("img").length;
      let clickCounter = 0;
      arrow.addEventListener("click", function () {
          clickCounter++;
          if (itemNumber - (4 + clickCounter) + (4 - widthRatio) >= 0) {
              movieLists[i].style.transform = `translateX(${
                  movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
              }px)`;
          } else {
              movieLists[i].style.transform = `translateX(0)`;
              clickCounter = 0;
          }
      });
  });

  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(
      ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-filter select"
  );

  ball.addEventListener("click", () => {
      items.forEach((item) => {
          item.classList.toggle("active");
      });
      ball.classList.toggle("active");
  });
});




