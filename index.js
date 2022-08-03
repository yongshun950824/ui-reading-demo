// Import stylesheets
import './style.css';

var topics = [
  { value: 'All', label: 'All Topic' },
  { value: 'Guides', label: 'Guides' },
  { value: 'Learning', label: 'Learning' },
  { value: 'VodusUpdates', label: 'Vodus Updates' },
  { value: 'Payments', label: 'Payments' },
  { value: 'IndustryNews', label: 'Industry News' },
];

var articles = [
  {
    title: 'How to register as a Vodus Merchant within 10 minutes',
    description:
      'So your read to become a merchant seller? This step-by-step guide gives you everything yo need to have your store set up within 10 minutes',
    topic: 'Guides',
    topicLabel: 'Guides',
    link: '#',
    image:
      'https://img.freepik.com/premium-vector/register-now-isolated-icon-banner-yellow-megaphone-speech-bubble-abstract-elements-trendy-style-registration-button-ui-design-element-web-site-subscribe-membership-vector-illustration_87771-11532.jpg?w=826',
  },
  {
    title: 'When are people most likely to shop online',
    description:
      'A recent study by Vodus Research has shown that over 45% of online shopping happens between the hours of 18:00 - 22:00 on weekdays',
    topic: 'Learning',
    topicLabel: 'Learning',
    link: '#',
    image:
      'https://img.freepik.com/free-photo/smiley-couple-sofa-doing-some-online-shopping_23-2148455071.jpg?w=996&t=st=1659488906~exp=1659489506~hmac=9e699929290621a1b3970e36d8c5c0c4b22f5afbd458bbded46bf8e346ad8a12',
  },
  {
    title: 'When to increase your product discounts & by how much',
    description:
      'With so many sales happening throughout the year many merchants are left wondering how and when to adjust the discounts on their products',
    topic: 'Guides',
    topicLabel: 'Guides',
    link: '#',
    image:
      'https://img.freepik.com/free-photo/3d-illustration-smartphone-gift-boxes-tied-balloons-while-floating-sky-online-shopping-deliver-service-concept_58466-14622.jpg?w=900&t=st=1659489738~exp=1659490338~hmac=e5dfa284daef0cf4e26ce9cb9beed1569b0ffa62321c101767c47c5934ded391',
  },
];

$(document).ready(function () {
  init();

  $('.body').click(function () {
    // Collapse navbar-right if open
    if ($('#navbar-right').hasClass('show'))
      $('#navbar-right').collapse('hide');
  });

  $('.topic-card').click(function () {
    $('.topic-card').removeClass('selected');

    $(this).addClass('selected');

    let selectedTag = $(this).data('tag');
    if (selectedTag == 'All') {
      $('.article-card').removeClass('d-none');
    } else {
      // Add d-none class to non selected topic item
      $(`.article-card[data-topic!='${selectedTag}']`).addClass('d-none');

      // Remove d-none class from selected topic item
      $(`.article-card[data-topic='${selectedTag}']`).removeClass('d-none');
    }
  });
});

function init() {
  $('#topics').empty();
  for (var topic of topics) {
    $('#topics').append(generateTopicCardItemTemplate(topic));
  }

  $('#article-card-container').empty();
  for (var item of articles) {
    $('#article-card-container').append(generateGridItemTemplate(item));
  }
}

function generateTopicCardItemTemplate(topic) {
  let className = 'topic-card';

  if (topic.value == 'All') className += ' selected';

  return `
  <div class="${className}" data-tag="${topic.value}">${topic.label}</div>
  `;
}

function generateGridItemTemplate(item) {
  return `
    <div class="article-card" data-topic="${item.topic}">
      <div
        class="img-div"
        style="
          background-image: url(${item.image});
        "
      >
        <span class="topic-tag ${item.topic.toLowerCase()}">${
    item.topicLabel
  }</span>
      </div>
      <div class="card-content">
        <div class="card-title">
          <h5>${item.title}</h5>
        </div>
        <div class="card-paragraph">
          <p>
            ${item.description}
          </p>

          <a class="read-more" href="${item.link}">
            Read more
          </a>
        </div>
      </div>
    </div>  
  `;
}
