var Names = ["Family", "Daddy", "Mummy", "Teju", "Megu"];

var images = ["FAMILY.png", "DAD.png", "MOM.png", "TEJU.png", "MEGU.png"];

var i = 0;
function nextslide() {
  document.getElementById("reasontext").innerHTML = Names[i];
  document.getElementById("album").src = images[i];
  i++;

  if (i == 5) {
    i = 0;
  }
}
