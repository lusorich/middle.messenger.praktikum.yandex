[![Tests](https://github.com/lusorich/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg?branch=sprint_2)](https://github.com/lusorich/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/edd7dee2-adbe-4f32-a737-6e2f34eb4596/deploy-status)](https://app.netlify.com/sites/deft-jelly-669969/deploys)

## [Проект на Netlify](https://creative-madeleine-6a833e.netlify.app/)

## [Ссылка на макет, который был взят для примера](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1&t=lZthIp7nwzxESX8U-0)

## Команды для установки и запуска проекта:

- `npm install` — для установки зависимостей,
- `npm run start` — для запуска проекта,
- `npm run build` — для сборки
- `npm run lint` — для проверки линтером

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

_**P.S.** Сделал на главной минимум стилей, т.к. при подключение бека надо будет
переделывать. Добавил только по 1 чату, т.к. использую кастомный шаблонизатор, а
он не может в списки, хочу переделать чтобы он мог формировать dom-элементы, но
если не буду успевать, перейду на handlebars_
