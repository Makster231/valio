/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-spread */
import * as axios from 'axios';
import helpers from './helpers';

const QUESTION_CATEGORIES = {
  FOOD: 'Питание',
  TRANSPORT: 'Транспорт и энергия',
  REST: 'Отдых',
  PRODUCTION: 'Осозанное производство и потребление',
};
Object.freeze(QUESTION_CATEGORIES);

const ANSWER_CATEGORIES = {
  LOW: 'Низкий углеродный показатель',
  MIDDLE: 'Средний углеродный показатель',
  HIGH: 'Высокий углеродный показатель',
};
Object.freeze(ANSWER_CATEGORIES);

const GLASSES_ICON_PATH = '../icon.png';

const questionData = [
  {
    question: 'Какое количество пищи вы обычно употребляете в течение обычного дня?',
    answersArray: [
      {
        answerText: 'Питаюсь как воробышек, а иногда и вовсе забываю поесть',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я ем небольшие порции (размером с маленькое блюдце) 3-4 раза в день',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я никогда себя ни в чём не ограничиваю. Всегда при возможности прошу добавки',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.FOOD,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question:
      'Какие продукты питания у вас самые любимые и составляют большую часть вашего ежедневного рациона?',
    answersArray: [
      {
        answerText: 'Говядина и мясное ассорти',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Свинина, курица, морепродукты, яйца',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Овощи, фрукты, зелень, зерновые',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Хлебопродукты, включая выпечку и сладкое',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Молочные продукты (молоко, простокваша, йогурт, творог, сливки, масло и т.д.)',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText:
          'У меня сбалансированное питание. Я ем все вышеуказанные продукты почти каждый день',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.FOOD,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question: 'Обращаете ли вы внимание на состав продуктов, которые покупаете?',
    answersArray: [
      {
        answerText:
          'Я часто употребляю фастфуд и полуфабрикаты, честно говоря, я даже не знаю, что в составе',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я покупаю то, что мне нравится, и не особо слежу, что в составе',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText:
          'Я тщательно читаю этикетки и беру продукты с небольшим количеством ингредиентов и с максимально простым и понятным мне составом',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText:
          'Я, конечно, стремлюсь покупать мало и не полуфабрикаты с полезным составом, но иногда руки так и тянутся к каким-нибудь вредностям',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.FOOD,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question: 'Где и как вы приобретаете воду?',
    answersArray: [
      {
        answerText: 'Я часто покупаю воду в одноразовых пластиковых бутылках',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я фильтрую воду дома из крана и использую многоразовые бутылки',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Заказываю воду большими бутылками с доставкой',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.FOOD,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question: 'Какой способ передвижения вы чаще всего используете?',
    answersArray: [
      {
        answerText: 'Я хожу пешком',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText:
          'Я всё заказываю онлайн, и товары доставляют прямо к двери моего дома/квартиры, так что мало выхожу из дома',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я езжу на велосипеде или самокате',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я езжу на своей малолитражке / Tesla /Toyota Prius',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'У меня большой внедорожник – езжу везде на нем! И удобно и всё помещается',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я езжу на легковом автомобиле или такси',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я езжу на общественном транспорте',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.TRANSPORT,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question: 'На чем вы чаще всего путешествовали за последний год?',
    answersArray: [
      {
        answerText: 'Почти всегда выбираю самолет – удобно и быстро!',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText:
          'Часто передвигаюсь на поездах. И с людьми можно пообщаться и окрестности посмотреть',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Часто езжу на машине даже на дальние расстояния. Все можно взять с собой!',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Я предпочитаю отдыхать недалеко от дома – дача, парки и леса',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Предпочитаю прогулки на пароходах.',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.TRANSPORT,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question:
      'Сколько часов за последний год (12 месяцев) вы летали на самолётах (не считая времени на ожидания):',
    answersArray: [
      {
        answerText: '0 часов',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Менее 5 часов',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: '5 – 15 часов',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: '15 – 30 часов',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Более 30 часов',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.TRANSPORT,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question: 'Сколько километров в неделю вы ездите на машине (собственной, такси)?',
    answersArray: [
      {
        answerText: 'Я не езжу на машине',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Менее 100 км',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: '100 – 400 км',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Более 400 км',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.TRANSPORT,
    questionIcon: GLASSES_ICON_PATH,
  },
  {
    question: 'Где вы живете большую часть года?',
    answersArray: [
      {
        answerText: 'Я не езжу на машине',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Менее 100 км',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: '100 – 400 км',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
      {
        answerText: 'Более 400 км',
        answerCategory: ANSWER_CATEGORIES.HIGH,
      },
    ],
    questionCategory: QUESTION_CATEGORIES.TRANSPORT,
    questionIcon: GLASSES_ICON_PATH,
  },
];

const Test = class Test {
  constructor(options = {}) {
    this.options = { ...options };
    this.isClickHandling = false;
  }

  init() {
    this.initEventListeners();
  }

  generateTests(questionsArray) {
    let html = '';
    for (let i = 0; i < questionsArray.length; i++) {
      this.numberOfQuestions += 1;
      html = html.concat(`
      <div class="question-screen d-none" data-bg="${questionsArray[i].mainBgClass}">
        <div class="question-screen__question">${questionsArray[i].question}</div>
          <div class="question-screen__content">
            <div class="question-screen__img-container ${
  questionsArray[i].questionBgClass
}"><img class="question-screen__img" src="images/${
  questionsArray[i].questionImgUrl
}"></div>
            <div class="question-screen__answer-container">
              <label class="custom-radio">
                <input class="radio-button" name="radio" type="radio" checked=""><span class="question-screen__answer">${
  questionsArray[i].answers[0]
}</span>
              </label>
              <label class="custom-radio">
                <input class="radio-button" name="radio" type="radio" checked=""><span class="question-screen__answer">${
  questionsArray[i].answers[1]
}</span>
              </label>
              <label class="custom-radio">
                <input class="radio-button" name="radio" type="radio" checked=""><span class="question-screen__answer">${
  questionsArray[i].answers[2]
}</span>
              </label>
            </div>
            <div class="question-screen__button-container">
              <button class="next-button" disabled>Далее</button>
          </div>
        </div>
      </div>`);
    }
    return html;
  }

  onClicStartTest() {
    if (this.isClickHandling === true) {
      return;
    }
    this.isClickHandling = true;
    // логика обработки начала тестирования
    this.isClickHandling = false;
  }

  onClickNextButton() {
    if (this.isClickHandling === true) {
      return;
    }
    this.isClickHandling = true;
    // логика обработки кнопки следующий вопрос
    this.isClickHandling = false;
  }

  onClickFinishButton() {
    if (this.isClickHandling === true) {
      return;
    }
    this.isClickHandling = true;
    //
    this.isClickHandling = false;
  }

  initEventListeners() {
    this.startTestButton.addEventListener('click', this.onClicStartTest.bind(this));
    this.nextButton.addEventListener('click', this.onClickNextButton.bind(this));
    this.finishButton.addEventListener('click', this.onClickFinishButton.bind(this));
  }

  destroy() {}
};

export default new Test();
