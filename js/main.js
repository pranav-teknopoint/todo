let i = 0;
let input = document.getElementById("note");
document.getElementById("add").addEventListener("click", function () {
  data = input.value;
  if (data) {
    addnote(data);
  } else {
    document.getElementById("tooltip").classList.add("show");
    setTimeout(() => {
      document.getElementById("tooltip").classList.remove("show");
    }, 2000);
  }
});

document.getElementById("note").addEventListener("keydown", function (e) {
  data = input.value;
  if (e.key == "Enter") {
    if (data) {
      addnote(data);
    } else {
      document.getElementById("tooltip").classList.add("show");
      setTimeout(() => {
        document.getElementById("tooltip").classList.remove("show");
      }, 2000);
    }
  }
});

function addnote(value) {
  document.querySelector(
    ".content-wrapper"
  ).innerHTML += `<div class="content" id = "${"data" + i}">
          <div class="display" id='${i}'><p>${value}</p></div>
          <div class="operations">
            <div class="button" id='${"edit" + i}' onclick="edit(id)">Edit</div>
            <div class="button" id=${
              "delete" + i
            } onclick="Delete(id)">Delete</div>
          </div>
        </div>`;
  i++;
  input.value = "";
}

function edit(id) {
  data = document.getElementById(id);
  idnumber = id.split("edit").join("");
  data.innerHTML = "Save";
  data.setAttribute("onclick", `save(${idnumber})`);
  value = document.getElementById(idnumber).querySelector("p").innerHTML;
  document.getElementById(
    idnumber
  ).innerHTML = `<input class="editor" type="text" name="newdata" id='${
    "new" + idnumber
  }' value = '${value}' onkeydown="if (event.keyCode == 13)
  data.click()"></input>`;
}

function save(idnumber) {
  data = document.getElementById("edit" + idnumber);
  newvalue = document.getElementById("new" + idnumber).value;
  if (newvalue) {
    document.getElementById(idnumber).innerHTML = `<p>${newvalue}</p>`;
  } else if (confirm("Empty note will be deleted!")) {
    Delete("delete" + idnumber);
  }
  data.innerHTML = "Edit";
  data.setAttribute("onclick", `edit("edit${idnumber}")`);
}

function Delete(id) {
  idnumber = id.split("delete").join("");
  var data = "data" + idnumber;
  deletedata = document.getElementById(data);
  document.getElementById(data).remove();
  undo();
}

function undo() {
  undobutton = document.querySelector(".undo");
  undobutton.classList.add("show");
  undobutton.addEventListener("click", function () {
    document.querySelector(".content-wrapper").appendChild(deletedata);
    undobutton.classList.remove("show");
  });
  setTimeout(() => {
    undobutton.classList.remove("show");
  }, 3000);
}
