# 📦 Sassify Prefixer
Набор миксинов на языке CSS-препроцессора [Sass](https://github.com/sass) для генерации CSS-свойств с необходимыми браузерными префиксами

![Весрия пакета на npm](https://img.shields.io/npm/v/@sassify/prefixer?label=%40sassify%2Fprefixer)
![Список языков](https://img.shields.io/github/languages/count/sassify/prefixer?color=%23ff0056)
![Топ язык в репо](https://img.shields.io/github/languages/top/sassify/prefixer?color=%23ff0056)
![Кол-во открытых ишью](https://img.shields.io/github/issues-raw/sassify/prefixer)
![Кол-во открытых PR](https://img.shields.io/github/issues-pr-raw/sassify/prefixer)
![Лицензия](https://img.shields.io/github/license/sassify/prefixer)
![Версия зависимости `sass`](https://img.shields.io/github/package-json/dependency-version/sassify/prefixer/sass/main?color=%23d94390)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/sassify/prefixer)
![GitHub contributors](https://img.shields.io/github/contributors/sassify/prefixer)
![GitHub last commit](https://img.shields.io/github/last-commit/sassify/prefixer)

## Начало работы
Для начала необходимо установить npm-пакет `@sassify/prefixer`:

```sh
npm install --save-dev @sassify/prefixer
```

После установки зависимости в свой проект, импортируйте модуль Sassify Prefixer:

```scss
@use 'node_modules/@sassify/prefixer' as prefixer;
```

Теперь все функции из Sassify Prefixer доступна через пространство `prefixer`:

```scss
// _styles.scss
.card {

	color: #212121;
	background: #fff;

	@include sassify.prefixer(
		box-shadow,
		rgba(149, 157, 165, 0.2) 0px 8px 24px,
		webkit moz
	);

}
```
```css
/* styles.css */
.card {
  color: #212121;
  background: #fff;
  -webkit-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  -moz-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
```

> Весь код Sassify Prefixer задокументирован с помощью комментариев SassDoc. Документация доступна по [этой](https://sassify.github.io/prefixer/) ссылке. Также вы можете прочитать немного про [API Sassify Prefixer](./API.md).

## Сообщество
У проекта Sassify нет какого-либо сервера в Discord, но есть Telegram &mdash; [@sassify](https://t.me/sassify).

## Версии
Для обеспечения прозрачности цикла выпуска и стремления поддерживать обратную совместимость Sassify поддерживается в соответствии с рекомендациями [Semantic Versioning](https://semver.org/). Иногда я ошибаюсь, но я придерживаюсь этих правил, когда это возможно.

## Благодарности
Несмотря на то, что я умудрился как-то гармонично (надеюсь) уложить все эти функции, я не могу не выразить огромную благодарность след. персонажам:
- [Kitty Giraudel](https://github.com/KittyGiraudel) - за большое количество кода и статей по Sass,
- [takamoso](https://github.com/takamoso) - за полезный код,
- [Sindre Sorhus](https://github.com/sindresorhus) - за полезный код,
- разработчикам CSS-препроцессора [Sass](https://sass-lang.com/) - за непосредственно Sass,
- всем тем у кого я учился (хоть я и не помню ваши имена).

## Лицензия
Проект распространяется по свободной лицензии [MIT](./LICENSE), однако в проекте используются труды иных людей, чьё авторство я также обозначил в местах, где используется их код.
