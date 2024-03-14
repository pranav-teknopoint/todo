let i = 0;
let input = document.getElementById("note");
document.getElementById("add").addEventListener("click", function () {
  data = input.value;
  if (data) {
    document.querySelector(
      ".content-wrapper"
    ).innerHTML += `<div class="content" id = "${"data" + i}">
            <div class="display" id='${i}'><p>${data}</p></div>
            <div class="operations">
              <div class="button" id='${
                "edit" + i
              }' onclick="edit(id)">Edit</div>
              <div class="button" id=${
                "delete" + i
              } onclick="Delete(id)">Delete</div>
            </div>
          </div>`;
    i++;
    input.value = "";
  }
});

function edit(id) {
  data = document.getElementById(id);
  idnumber = id.split("edit").join("");
  value = document.getElementById(idnumber).querySelector("p").innerHTML;
  document.getElementById(
    idnumber
  ).innerHTML = `<input class="editor" type="text" name="newdata" id='${
    "new" + idnumber
  }' value = '${value}'></input>
          <div class="button" id="save" onclick="save(${idnumber})">Save</div> `;
}

function save(idnumber) {
  newvalue = document.getElementById("new" + idnumber).value;
  if (newvalue) {
    document.getElementById(idnumber).innerHTML = `<p>${newvalue}</p>`;
  } else if (confirm("Empty note will be deleted!")) {
    Delete("delete" + idnumber);
  }
}

function Delete(id) {
  idnumber = id.split("delete").join("");
  data = "data" + idnumber;
  document.getElementById(data).remove();
}
