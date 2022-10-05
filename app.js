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
        name: 'ctrlC',
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
        name: 'ctrlC',
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

const createCard = (source, id, name) => {
    const card = $('<div></div>');
    card.html(`<div id="${id}" data-name = "${name}" class="flip-box">
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

//clicked cards will be stored in this array
const clickedCards = [];

cardsArray
    .sort(() => 0.5 - Math.random())
    .forEach((item, i) => {
        createCard(item.img, i, item.name);
    });

$('.cards').click((e) => {
    // console.log($(e.target.closest('.flip-box')).attr('id'));

    const card = $(e.target.closest('.flip-box'));
    //push the ids into array
    clickedCards.push(card.attr('data-name'));

    console.log(clickedCards);
    //flip card
    card.find('.flip-box-inner').css({ transform: 'rotateY(0deg)' });
    //match control
    if (clickedCards.length == 2) {
        checkMatch(card);

        clickedCards.length = 0;
    }
});

const checkMatch = (card) => {
    if (clickedCards[0] === clickedCards[1]) {
        console.log(clickedCards);
        console.log($(`[data-name=${card.attr('data-name')}]`));

        /*  $('.container')
            .find(`${card.attr('data-name')}`)
            .css({ visibility: 'hidden' }); */

        setTimeout(() => {
            $(`[data-name=${card.attr('data-name')}]`).css({
                visibility: 'hidden',
            });
        }, 750);
    } else {
        clickedCards.length = 0;
        setTimeout(() => {
            $('.flip-box-inner').css({ transform: 'rotateY(180deg)' });
        }, 750);
    }
};

// console.log($(`#${card.attr('data-name')}`));
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
