const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listArrImg = [
  {
    name: "1.jpg",
  },
  {
    name: "2.jpg",
  },
  {
    name: "3.jpg",
  },
  {
    name: "4.jpg",
  },
  {
    name: "5.jpg",
  },
  {
    name: "6.jpg",
  },
  {
    name: "7.jpg",
  },
];
var srcImgSmall = document.querySelectorAll(".pillar_small_img");
var arrI = [0];
function renderImg() {
  for (i = 0; i < listArrImg.length; i++) {
    var div = document.createElement("div");
    div.className = "anhchitiet";
    div.innerHTML = '<img src="images/' + listArrImg[i]["name"] + ' " alt="">';
    $(".anhSP").appendChild(div);
  }
  var srcImgBigAtCtn = document.querySelectorAll(".anhchitiet");
  return srcImgBigAtCtn;
}
var srcImgBigAtCtn = renderImg();
$(".btn-zoomImg").addEventListener("click", () => {
  $(".tab_ctn_zoomImg").classList.add("active");
});
$(".close_tab_img").addEventListener("click", () => {
  $(".tab_ctn_zoomImg").classList.remove("active");
});
(() => {
  $(".one_img").querySelector("img").src = "images/" + listArrImg[0].name;
})();
$(".prev-img").addEventListener("click", () => {
  i = arrI[0];
  i--;

  if (i > 0) {
    $(".next-img").style.zIndex = "2";
    $(".next-img").style.opacity = "1";
    $(".one_img").querySelector("img").src = "images/" + listArrImg[i].name;
  }
  if (i == 0) {
    $(".one_img").querySelector("img").src = "images/" + listArrImg[i].name;
    $(".prev-img").style.zIndex = "-1";
    $(".prev-img").style.opacity = "0";
  }

  gsrcsmall();
  arrI.splice(0, 1);
  arrI.push(i);
});
$(".next-img").addEventListener("click", () => {
  i = arrI[0];
  i++;

  if (i < listArrImg.length - 1) {
    $(".prev-img").style.zIndex = "2";
    $(".prev-img").style.opacity = "1";
    $(".one_img").querySelector("img").src = "images/" + listArrImg[i].name;
  }
  if (i == listArrImg.length - 1) {
    $(".one_img").querySelector("img").src = "images/" + listArrImg[i].name;
    $(".next-img").style.zIndex = "-1";
    $(".next-img").style.opacity = "0";
    i--;
  }
  gsrcsmall();
  arrI.splice(0, 1);
  arrI.push(i);
});

srcImgSmall.forEach((e, index) => {
  e.addEventListener("click", () => {
    var srcOneImg = document.querySelector(".one_img img").getAttribute("src");
    var EleImgNow = e.getElementsByTagName("img");
    var srcImgNow = EleImgNow[0].getAttribute("src");
    if (srcOneImg != srcImgNow) {
      document.querySelector(".one_img img").src = srcImgNow;
      gsrcsmall();
    } else {
      gsrcsmall();
    }
    if (index == 0) {
      $(".prev-img").style.zIndex = "-1";
      $(".prev-img").style.opacity = "0";
      $(".next-img").style.zIndex = "2";
      $(".next-img").style.opacity = "1";
    } else if (index == listArrImg.length - 1) {
      $(".prev-img").style.zIndex = "2";
      $(".prev-img").style.opacity = "1";
      $(".next-img").style.zIndex = "-1";
      $(".next-img").style.opacity = "0";
    } else if (index > 0 && index < listArrImg.length) {
      $(".prev-img").style.zIndex = "2";
      $(".prev-img").style.opacity = "1";
      $(".next-img").style.zIndex = "2";
      $(".next-img").style.opacity = "1";
    }
    arrI.splice(0, 1);
    arrI.push(index);
  });
});

srcImgBigAtCtn.forEach((e, index) => {
  e.addEventListener("click", () => {
    $(".tab_ctn_zoomImg").classList.add("active");
    var srcOneImg = document.querySelector(".one_img img").getAttribute("src");
    var EleImgNow = e.getElementsByTagName("img");
    var srcImgNow = EleImgNow[0].getAttribute("src");

    var srcImgSmall = document.querySelectorAll(".pillar_small_img");
    srcImgSmall.forEach((i) => {
      if (
        i
          .getElementsByTagName("img")[0]
          .getAttribute("src")
          .replace(/\s/g, "") == srcImgNow.replace(/\s/g, "")
      ) {
        i.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    });

    if (srcOneImg != srcImgNow) {
      document.querySelector(".one_img img").src = srcImgNow;
    }
    if (index == 0) {
      $(".prev-img").style.zIndex = "-1";
      $(".prev-img").style.opacity = "0";
      $(".next-img").style.zIndex = "2";
      $(".next-img").style.opacity = "1";
    } else if (index == listArrImg.length - 1) {
      $(".prev-img").style.zIndex = "2";
      $(".prev-img").style.opacity = "1";
      $(".next-img").style.zIndex = "-1";
      $(".next-img").style.opacity = "0";
    } else if (index > 0 && index < listArrImg.length) {
      $(".prev-img").style.zIndex = "2";
      $(".prev-img").style.opacity = "1";
      $(".next-img").style.zIndex = "2";
      $(".next-img").style.opacity = "1";
    }
    arrI.splice(0, 1);
    arrI.push(index);
  });
});
function gsrcsmall() {
  var srcOneImg = document.querySelector(".one_img img").getAttribute("src");
  var srcImgSmall = document.querySelectorAll(".pillar_small_img");
  // console.log(srcImgSmall);
  srcImgSmall.forEach((i) => {
    // Chỉ lấy đường dẫn mặc định
    var srcImgNow = i.getElementsByTagName("img")[0].getAttribute("src");
    if (srcImgNow == srcOneImg) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
}
