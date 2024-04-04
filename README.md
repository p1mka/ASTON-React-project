# Movies-library
- API: [KinopoiskAPI](https://kinopoiskapiunofficial.tech)

## Основной функционал

- Загрузка 20 избранных фильмов по версии API.
- Регистрация и авторизация пользователей.
- Избранные карточки: пользователь может сохранять или удалять фильмы из избранных.


### 1 уровень 

- [x] Реализованы Требования к функциональности.

- React

- [x] Пишу функциональные **[компоненты](src/components) c хуками в приоритете над классовыми.** 
- [x] Есть разделение на **[умные](src/components/Header/components/SearchBar/search-bar.jsx) и **[глупые](src/components/Input/input.jsx)** компоненты 
- [x] Есть рендеринг **[списков](src/pages/main/components/film-cards/film-cards.jsx)**
- [x] Реализована хотя бы одна **[форма](src/components/UserForm/user-form.jsx)**
- [x] Есть применение **[Контекст API](src/providers/theme-context.jsx)**
- [x] Есть применение **[предохранителя](src/features/error-boundary.jsx)**
- [x] Есть хотя бы один кастомный **[хук](src/hooks)**
- [x] Хотя бы несколько компонентов используют PropTypes [suggests](src/components/Header/components/SearchBar/components/suggests.jsx) [history](src/pages/history/components/history-item.jsx)
- [x] Поиск не триггерит много запросов к серверу [debounce](src/hooks/use-debounce.js) 
- [x] Есть применение [lazy + Suspense](src/routes/CustomRouter.jsx)


- Redux

- [x] Использую [Modern Redux with Redux Toolkit](src/redux/store.js)
- [x] Использую [слайсы](src/redux/slices)
- [x] Есть хотя бы одна кастомная [мидлвара](src/redux/middlewares/is-auth-midleware.js)
- [x] Использую [RTK Query](src/redux/filmsApi.js)
- [x] Использую [Transforming Responses](src/redux/filmsApi.js)

### 2 уровень 

- [x] Использую [Firebase](src/db/db.js)
