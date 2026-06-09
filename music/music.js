const spodifyOverlay = document.getElementById("spodifyOverlay");
const albumOverlay = document.getElementById("albumOverlay");
const writingOverlay = document.getElementById("writingOverlay");
const completedOverlay = document.getElementById("completedOverlay");


spodifyOverlay.addEventListener('click', function(){
  showSodifyAlert();
});

function showSodifyAlert(){
  alert("Ohh, you want to check out my spodify? Yeah no! Private Info :)");
}


albumOverlay.addEventListener('click', function(){
  showAlbumAlert();
});

function showAlbumAlert(){
  alert("Im currently working on my album. Want to check it out? Yeah no! Private Info :)");
}



writingOverlay.addEventListener('click', function(){
  showWritingAlert();
});

function showWritingAlert(){
  alert("You trying to peak into what im writing? Yeah no! Private Info :)");
}


completedOverlay.addEventListener('click', function(){
  showCompletedAlert();
});

function showCompletedAlert(){
  alert("I have completed some songs! But guess what? Private Info :)");
}
