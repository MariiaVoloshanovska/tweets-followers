Тестове завдання ✅ Tweets-Follow

Мета: створити картки твітів та додати інтерактивності при клікові на кнопку.

- Верстка фіксована в рх, семантична та валідна.
- Немає помилок в консолі браузера.
- Робота виконана на нативному JS з використанням зборщиків або на React.
- Інтерактивність працює відповідно до технічного завдання.
- Код відформатований та без коментарів.
- В репозиторії має бути описаний README.md.

Технічне завдання

- Відповідно до макету потрібно реалізувати картки юзера.
- При клікові на кнопку Follow - текст змінюється на Following. Також змінюється
  колір кнопки. А до кількості фоловерів додається і ваш. Тобто, початкова
  кількість складає 100,500 фоловерів. При клікові на кнопку буде 100,501.
- При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,
  якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в
  стані Following із відповідним кольором, а кількість фоловерів НЕ зменшується
  до початкового значення.
- При повторному клікові на кнопку її текст та колір змінюються до початкового
  стану. Також змінюється і кількість фоловерів. Вона зменшується на 1
  (100,500).
- В коді цифра 100,500 має бути прописана одним значенням (100500). В UI -
  виведено через кому (100,500). Юзер
- Створи свій персональний бекенд для розробки за допомогою UI-сервісу
  mockapi.io.

- Зображення аватарів мають бути прописані окремими url у властивості “avatar”.
  Можете підібрати їх самостійно.

- Має бути від 12 юзерів з різними значеннями(на ваш розсуд) в базі. Зроби
  пагінацію. На одній сторінці пагінації має відображатися від 3 твітів, решта
  підгружатись при натисканні Load More

- Решта вимог аналогічні до вищеописаного технічного завдання.

- Створюєте юзера в Mockapi з наступними полями: id, user, tweets, followers,
  avatar.

[ { "id": "1", "user": "User Full Name", "tweets": 1234, "followers": 100500,
"avatar": "url.jpg" } ] Додаткове завдання

За виконання вам будуть нараховані додаткові бали! Без виконання додаткового
завдання ви не зможете отримати максимальний бал.

Створи маршрутизацію, використовуючи React Router.

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку. '/' – компонент
Home, домашня сторінка. Стилізація та оформлення на ваш розсуд '/tweets' -
компонент tweets, сторінка із відображенням твітів На сторінці tweets має бути
кнопка Back, яка веде на головну сторінку.

Додай фільтрацію. Це має бути Dropdown із 3 опціями(оформлення на ваш розсуд):
show all, follow, followings.

- Show All - показати всі твіти.
- Follow - показати твіти, у яких -стан Follow.
- Followings - показати твіти, у яких стан Following.

Project Task: Interactive Tweet Cards

Objective: Develop a web application featuring interactive tweet cards based on
the provided design. The application should meet specific technical requirements
and adhere to professional development standards.

Technical Requirements:

Implement user tweet cards according to the design provided. The layout should
be fixed in pixels, semantic, and valid. Ensure that there are no errors in the
browser console during application usage. Choose to develop the project using
native JavaScript with bundlers or opt for React for better maintainability and
scalability. Implement interactivity as per the technical specifications: Upon
clicking the "Follow" button, the text should change to "Following," and the
button's color should update accordingly. Additionally, your follower count
should increase by one. For example, if the initial follower count is 100,500,
it should become 100,501 after the button is clicked. After refreshing the page,
the application should retain the final state of user interactions. The
"Following" state of the button, along with the corresponding color, should
persist, and the follower count should not reset to its initial value. Clicking
the button again should revert its text, color, and follower count to their
original states. The follower count should decrease by one (e.g., from 100,501
to 100,500). The number 100,500 should be defined as a single value (100500) in
the code for maintainability. However, it should be displayed with a comma
(100,500) in the UI for better readability. Create your personalized backend
using the UI service mockapi.io for seamless development and testing. Ensure
that avatar images are provided as separate URLs in the "avatar" property. You
can carefully select appropriate images for a polished UI. The application
should include 12 users with various values (at your discretion) in the
database. Implement pagination, displaying 3 tweets per page, and allow
additional tweets to load when clicking the "Load More" button. Additional Task:

Completing the additional task will earn you additional points! Not completing
the additional task will limit your maximum score.

Implement routing using React Router to enhance the application structure and
navigation. The application should feature the following routes: '/' - Home
component, representing the homepage. Customize the styling and design to suit
your preferences professionally. '/tweets' - Tweets component, displaying the
tweets page. The tweets page should include a Back button, providing users with
an easy way to return to the homepage. Add filtering functionality using a
Dropdown with 3 options (customize the design): Show All - displays all tweets.
Follow - displays tweets with the Follow state. Followings - displays tweets
with the Following state.
