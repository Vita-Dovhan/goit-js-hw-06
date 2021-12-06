
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const itemOfImages = images.map(option => {
  const itemEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = option.url;
  imgEl.alt = option.alt;
  imgEl.width = 400;
  itemEl.appendChild(imgEl);
  const newArr = document.querySelector("ul");
  newArr.insertAdjacentElement("beforebegin", itemEl);
})

