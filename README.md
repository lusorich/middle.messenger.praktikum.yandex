[![Tests](https://github.com/lusorich/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg)](https://github.com/lusorich/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)

## [Проект на Render](https://messenger-bazb.onrender.com)

## [Ссылка на макет, который был взят для примера](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1&t=lZthIp7nwzxESX8U-0)

## Команды для установки и запуска проекта:

- `npm install` — для установки зависимостей,
- `npm run start` — для запуска проекта,
- `npm run build` — для сборки
- `npm run lint` — для проверки линтером
- `npm run test` — для запуски тестов

## Страницы проекта:

- `/` — главная страница с чатами (стили не готовы, буду делать + в целом
  немного поменяю структуру),
- `/signin` — страница входа,
- `/registration` — страница регистрации
- `/profile` — страница просмотря профиля
- `/profile/edit` — страница редактирования профиля
- `/profile/edit-password` — страница редактирования пароля
- `/404` — страница 404 (автоматическое перенаправление, если роут не найден)
- `/505` — страница 505

## TODO:

- обработка сетевых ошибок в UI
- избавиться от всех any
- разные ошибки при валидации
- стили
- подключить шрифты
- лоадеры
- в попапах убрать сохранение последнего состояния
