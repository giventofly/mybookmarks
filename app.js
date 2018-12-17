//min chars to search
const MINSEARCH = 2;
let currentJSON = [];

document.addEventListener("DOMContentLoaded", function () {

  //load on start
  loadinfo(bookmarks);
  currentJSON = [...bookmarks];

  const searchinput = document.getElementById('search');
  const fsearchinput = document.getElementById('tagsearch');

  //searchinput.addEventListener('change', function(e){ filterme(this,); });
  searchinput.addEventListener('keyup', function () {
    this.value.length > MINSEARCH ? filterme(this.value) : loadinfo(bookmarks);
  });
  fsearchinput.addEventListener('keyup', function () {
    this.value.length > MINSEARCH ? filterme(this.value, 'tag') : loadinfo(bookmarks);
  });

  //
  document.getElementById('container').addEventListener('click', function (e) {

    if (e.target.tagName == 'A' && e.target.dataset.tag) {
      e.preventDefault();
      fsearchinput.value = e.target.dataset.tag;
      filterme(e.target.dataset.tag, 'tag')
    }
  });



  //endloadDOMready
});

const filterme = (searchv, mode = 'all') => {
  document.getElementById('container').innerHTML = '';
  let filesonly = true;
  let newjson = [];
  if (mode == 'tag') {
    bookmarks.forEach(elem => {
      let mytags = "";
      elem.tags.forEach((tag) => {
        mytags += `${tag} `;
      });
      if (mycontains(mytags, searchv)) {
        newjson.push(elem);
      }
    });
  } else {
    bookmarks.forEach(elem => {
      if (mycontains(elem.desc, searchv, mode) || mycontains(elem.url, searchv) || mycontains(elem.name, searchv)) {
        newjson.push(elem);
      }
    });
  }

  currentJSON = [...newjson];
  //document.getElementById('sortDate').classList.contains('active') ? sortDate(currentJSON) : sortDate(currentJSON, 'des');
  loadinfo(currentJSON);
}

const mycontains = (str, search) => {
  return str.toLowerCase().includes(search.toLowerCase());
}


const loadinfo = json => {
  document.getElementById('container').innerHTML = '';
  json.forEach(elem => {

    //console.log(elem);
    let item = document.createElement('div');
    item.classList.add('item');
    let mytags = "";
    //console.log(elem.tags);
    elem.tags.forEach((tag) => {
      mytags += `<a href="" data-tag="${tag}">#${tag}</a>`;
    });
    item.innerHTML = ` <div class="item__name"><a href="${elem.url}">${elem.name}</a></div>
                        <div class="item__description">${elem.desc}</div>
                        <div class="item__tags">${mytags}</div>
                `;
    document.getElementById('container').append(item);
  });
}
