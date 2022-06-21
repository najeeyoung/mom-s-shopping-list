const form = document.addItem;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  form.title.value = "";

  const addDiv = document.createElement("li");
  addDiv.textContent = title + " ";
  addDiv.style.margin = "10px";
  addDiv.textAlign = "center";
  

  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.style.marginRight = "5px";
  editButton.classList.add("edit");
  addDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete");
  addDiv.appendChild(deleteButton);
  document.getElementById("list").appendChild(addDiv);
  deleteButton.addEventListener("click", (event) => {
    console.log(event);
    document.getElementById("list").removeChild(addDiv)
  });
});

