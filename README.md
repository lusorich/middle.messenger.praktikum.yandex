[![Tests](https://github.com/lusorich/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg?branch=sprint_1)](https://github.com/lusorich/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/244e5342-6fbf-4822-a231-7dd9bf881afb/deploy-status)](https://app.netlify.com/sites/capable-croissant-37c6fb/deploys)

## [Проект на Netlify](https://capable-croissant-37c6fb.netlify.app/)

## Команды для установки и запуска проекта:

- `yarn install` — для установки зависимостей,
- `yarn start` — для запуска проекта,
- `yarn build` — для сборки

_**P.S.** Ранее открывалась страница входа по-умолчанию и при перезагрузке страницы, поменял этот момент, чтобы при перезагрузке открывалась текущая страница, а не перенаправляло на страницу входа. Из-за этого по-умолчанию сейчас открывается главная страница и чтобы попасть на страницу входа/регистрации надо прописать их в урл_

## Страницы проекта:

- `/` — главная страница с чатами (стили не готовы, буду делать + в целом немного поменяю структуру),
- `/signin` — страница входа,
- `/registration` — страница регистрации
- `/profile` — страница просмотря профиля
- `/profile/edit` — страница редактирования профиля
- `/profile/edit-password` — страница редактирования пароля
- `/404` — страница 404 (автоматическое перенаправление, если роут не найден)
- `/505` — страница 505
