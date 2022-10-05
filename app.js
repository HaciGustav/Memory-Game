const cardsArray = [
    {
        name: 'myCode',
        img: './img/myCode.webp',
    },
    {
        name: 'actualJob',
        img: './img/actualJob.jpg',
    },
    {
        name: 'ai',
        img: './img/ai.jpg',
    },
    {
        name: 'ternary',
        img: './img/iLoveTernary.jpg',
    },
    {
        name: 'userVSprogrammer',
        img: './img/usersVSprogrammers.jpg',
    },
    {
        name: 'ctrl+c',
        img: './img/ctrl+c.jpg',
    },
    {
        name: 'fridayCrisis',
        img: './img/fridayCrisis.webp',
    },
    {
        name: 'wrongVariableName',
        img: './img/wrongVariableName.png',
    },

    {
        name: 'myCode',
        img: './img/myCode.webp',
    },
    {
        name: 'actualJob',
        img: './img/actualJob.jpg',
    },
    {
        name: 'ai',
        img: './img/ai.jpg',
    },
    {
        name: 'ternary',
        img: './img/iLoveTernary.jpg',
    },
    {
        name: 'userVSprogrammer',
        img: './img/usersVSprogrammers.jpg',
    },
    {
        name: 'ctrl+c',
        img: './img/ctrl+c.jpg',
    },
    {
        name: 'fridayCrisis',
        img: './img/fridayCrisis.webp',
    },
    {
        name: 'wrongVariableName',
        img: './img/wrongVariableName.png',
    },
];

const createCard = (source) => {
    const card = $('<div></div>');
    card.html(`<div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img src="${source}" alt="">
          </div>
          <div class="flip-box-back">
            <h2>?</h2>
          </div>
        </div>
      </div>`);
    $('.cards').prepend(card);
};

// createCard();
cardsArray
    .sort(() => 0.5 - Math.random())
    .forEach((item) => {
        createCard(item.img);
    });

$('.cards').click((e) => {
    console.log($(e.target.closest('.flip-box')).eq(0));
});

//!!!!!----------BACKUP-------------!!!!!!!//

/* const createCard = (source) => {
    const card = $('<img>');
    card.attr('src', source);
    $('.cards').prepend(card);
};

// createCard();
cardsArray
    .sort(() => 0.5 - Math.random())
    .forEach((item) => {
        createCard(item.img);
    });
 */
