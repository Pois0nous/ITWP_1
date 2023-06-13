document.addEventListener("DOMContentLoaded", function() {
  function btnClick() {
    console.log("Hello world");
    var heading = document.querySelector("h1");
    heading.textContent = "My notebook";
  }

  var button = document.getElementById("my-button");
  button.addEventListener("click", btnClick);
  var addButton = document.getElementById("add-data");
  var list = document.getElementById("myList");
  var textarea = document.getElementById("myText");

  addButton.addEventListener("click", function() {
    var text = textarea.value.trim();
    if (text !== "") {
      var listItem = document.createElement("li");
      listItem.textContent = text;
      list.appendChild(listItem);
      textarea.value = "";
    }
  });
});
