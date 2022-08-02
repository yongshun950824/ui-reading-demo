// Import stylesheets
import './style.css';
import './site.css';

var articles = [
  {
    title: 'How to register as a Vodus Merchant within 10 minutes',
    description:
      'So your read to become a merchant seller? This step-by-step guide gives you everything yo need to have your store set up within 10 minutes.',
    topic: 'Guides',
    link: '',
    image: 'https://vodusresearch.files.wordpress.com/2022/07/pexels-photo-696205.jpeg'
  },
  {
    title: 'When are people most likely to shop online',
    description:
      'A recent study by Vodus Research has shown that over 45% of online shopping happens between the hours of 18:00 - 22:00 on weekdays.',
    topic: 'Learning',
    link: '',
  },
  {
    title: 'When to increase your product discounts & by how much',
    description:
      'With so many sales happening throughout the year many merchants are left wondering how and when to adjust the discounts on their products.',
    topic: 'Guides',
    link: '',
  },
];

$(document).ready(function () {
  init();

  $('.hamburger-icon').click(function () {
    console.log($('#navbar-right'));
    //$('#navbar-right').css('display', 'block');
  });

  $('.body').click(function () {});
});

function init() {

}