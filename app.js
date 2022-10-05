$('.adv').click((e) => e.target.remove());
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
    card.html(`<div id="${id}" data-check = "false" data-name = "${name}" class="flip-box">
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
const clickedCardsIds = [];

cardsArray
    .sort(() => 0.5 - Math.random())
    .forEach((item, i) => {
        createCard(item.img, i, item.name);
    });

$('.cards').click((e) => {
    const card = $(e.target.closest('.flip-box'));
    //push the ids into array
    clickedCards.push(card.attr('data-name'));
    clickedCardsIds.push(card.attr('id'));

    console.log(clickedCardsIds);
    //flip card
    card.find('.flip-box-inner').css({ transform: 'rotateY(0deg)' });
    //match control
    if (clickedCards.length == 2) {
        checkMatch(card);

        clickedCards.length = 0;
        clickedCardsIds.length = 0;
    }
    // Final winner GIF
    if ($('[data-check = false]').length == 0) {
        congratulations();
    }
    console.log($('[data-check = false]').length);
});

const checkMatch = (card) => {
    if (
        clickedCards[0] === clickedCards[1] &&
        clickedCardsIds[0] != clickedCardsIds[1]
    ) {
        setTimeout(() => {
            $(`[data-name=${card.attr('data-name')}]`).css({
                visibility: 'hidden',
            });
        }, 750);

        $(`[data-name=${card.attr('data-name')}]`).attr('data-check', 'true');
    } else {
        clickedCards.length = 0;
        setTimeout(() => {
            $('.flip-box-inner').css({ transform: 'rotateY(180deg)' });
        }, 750);
    }
};

const congratulations = () => {
    $('.winner').addClass('winner-fun');
};
