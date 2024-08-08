import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

// swiprer setting
const swiper = new Swiper(".swiper-article", {
  // Optional parameters
  modules: [Navigation, Pagination, Autoplay, Grid],
  loop: true,
  autoplay: {
    delay: 2500,
  },
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: 24,
  // using "ratio" endpoints
  breakpoints: {
    768: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination-article",
    type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-article-button-next",
    prevEl: ".swiper-article-button-prev",
  },
});
const swiperView = new Swiper(".swiper-view", {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 1.1,
  spaceBetween: 24,
  // using "ratio" endpoints
  breakpoints: {
    768: {
      slidesPerView: 1.8,
    },
  },
});
const swiperSuggest = new Swiper(".swiper-suggest", {
  modules: [Autoplay, Grid],
  loop: true,
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 1.1,
  spaceBetween: 24,
  grid: {
    rows: 1,
    fill: "row",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
      grid: {
        rows: 2,
      },
    },
  },
});

// tab view
const tabViewList = document.querySelector("[data-view-list]");
const tabViewTitle = document.querySelector("[data-view-content-title]");
const tabViewLinks = document.querySelectorAll("[data-view-content-links]");
const tabViewBadges = document.querySelectorAll(
  "[data-view-content-badges] li",
);

const tabViewData = [
  {
    title: "酒精路跑地圖",
    links: [
      "｜城市酒吧人氣榜,盤點當紅熱門酒吧",
      "｜你要的調酒師在這裡！五月全台酒吧客座活動整理",
      "｜台南老宅手工酒藏,尋味百年人文釀意",
    ],
    badges: ["#夜貓行程", "#barhopping", "#全台酒吧"],
  },
  {
    title: "台北拉麵圖鑑",
    links: [
      "｜「特濃屋」以「橫濱家系」湯底著名...",
      "｜「大和家」湯頭又更濃厚一些...",
      "｜  鷹流的每間分店都主打不同口味，位在公館的...",
    ],
    badges: ["#雞白湯", "#拉麵", "#台北美食"],
  },
  {
    title: "海島自由行",
    links: [
      "｜私島慢活島嶼生活 - 在熱帶天堂品...",
      "｜海島漂流記 - 在陽光、沙灘和比基...",
      "｜島嶼蹤跡 - 揭開加勒比海上世外桃...",
    ],
    badges: ["#熱帶國家", "#海邊", "#無敵海景"],
  },
  {
    title: "短天數出國推薦",
    links: [
      "｜72小時東京遊走 - 當個時尚東京通",
      "｜48小時曼谷遊玩全攻略 ",
      "｜三天兩夜賞櫻微醺東京",
    ],
    badges: ["#說走就走", "#出國玩", "#東亞"],
  },
  {
    title: "週末露營趣",
    links: [
      "｜週末說走就走露營記",
      "｜城市野營日記",
      "｜和寵物去露營 - 大自然之旅的雙倍...",
    ],
    badges: ["#戶外", "#露營控", "#凹豆"],
  },
];

tabViewList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName === "BUTTON") {
    // list actvie style
    const list = tabViewList.querySelectorAll("li");
    list.forEach((item) => item.classList.remove("active"));
    e.target.closest("li").classList.add("active");

    // data changing
    const listValue = e.target.dataset.listValue;
    const data = tabViewData.find((item) => item.title === listValue);
    tabViewTitle.innerText = data.title;
    tabViewLinks.forEach((link, index) => {
      link.innerText = data.links[index];
    });
    tabViewBadges.forEach((badge, index) => {
      badge.innerText = data.badges[index];
    });
  }
});
