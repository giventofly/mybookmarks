const createItem = (name, url, tags, desc) => {
  let hashtags = "";
  tags.forEach(function (index, element) {
    hashtags += `<a href='#${tags[element]}' class='tagged' data-tagged='${
      tags[element]
      }'>#${tags[element]}</a>`;
  });
  const item = ` <tr>
                <td class="name"><a href='${url}' class='url' target='_blank' rel='noopener' title='${desc}'>${name}</a></td>
                <td class="tags">${hashtags}</td>
                <td class="desc active">${desc}</td>
              </tr>`;
  return item;
};

var options = {
  valueNames: ["name", "url", "tags", "desc"]
  //page: 30,
  //pagination: true
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".description").addEventListener("click", function (e) {
    e.preventDefault();
    const descriptions = document.querySelectorAll(".desc");
    descriptions.forEach(function (element) {
      //console.log(element);
      element.classList.toggle("active");
    });
  });
  let list = "";

  bookmarks.forEach(function (index, element) {
    //console.log(element);
    list += createItem(
      bookmarks[element].name,
      bookmarks[element].url,
      bookmarks[element].tags,
      bookmarks[element].desc
    );
  });
  document.getElementById("listcontent").innerHTML = list;
  //console.log(list);
  // Init list.js
  var contactList = new List("bookmarks", options);
  //catch tags
  let mytags = document.querySelectorAll(".tagged");

  mytags.forEach(function (element) {
    //console.log(element);
    element.addEventListener("click", function (e) {
      //console.log("click");
      value = this.dataset.tagged;
      console.log(value);
      document.querySelector("input").value = value;
      contactList.search(value);
    });
  });
  //clear on search
  document.querySelector("#clear").addEventListener("click", function () {
    document.querySelector("input").value = "";
    contactList.search();
  });
});

