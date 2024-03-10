"use strict";

module.exports = {

	// типы и описание типов (на расском языке)
	types: [
		{ value: 'build', name: 'build: сборка проекта или изменение внешних зависимостей' },
		{ value: 'ci', name: 'ci: настройка CI и работа со скриптами' },
		{ value: 'docs', name: 'docs: обновление документации' },
		{ value: 'feat', name: 'feat: добавление нового функционала' },
		{ value: 'fix', name: 'fix: исправление ошибок' },
		{ value: 'perf', name: 'perf: изменения, направленные на улучшение производительности' },
		{ value: 'refactor', name: 'refactor: правки кода без исправления ошибок и добавления нового функционала' },
		{ value: 'revert', name: 'revert: откат на пред. состояние коммита' },
		{ value: 'style', name: 'style: правки по кодстайлу (табы, отступы, точки, запятые и т.д.)' },
		{ value: 'test', name: 'test: добавление, изменение или улучшение тестов' }
	],

	// области, к которым привязаны изменения в коммите
	scopes: [
		{ name: 'functions' },
		{ name: 'config' },
		{ name: 'utils' },
		{ name: 'docs' }
	],

	// спец. области для конкретного типа коммита
	scopeOverrides: {
		docs: [
			{ name: 'sassdoc' },
			{ name: 'repo-docs' }
		]
	},

	// дефолтные вопросы
	messages: {
		type: 'Какие изменения вы вносите?',
		scope: '\nВыберите область, которую вы изменили (опционально):',
		customScope: 'Укажите кастомную область:', // если `allowCustomScopes` в `true`
		subject: 'Напишите короткое описание в ИЗЪЯВИТЕЛЬНОМ наклонении:\n',
		body: 'Напишите подробное описание (опционально). Используйте "|" для новой строки:\n',
		breaking: 'Список BREAKING CHANGES (опционально):\n',
		footer: 'Место для мета-данных (тикетов, ссылок и прочего). Например: SECRETMRKT-700, SECRETMRKT-800:\n',
		confirmCommit: 'Вас устраивает получившийся коммит?'
	},

	allowCustomScopes: true, // разрешаем кастомные области
	allowBreakingChanges: false, // запрещаем BREAKING CHANGES
	footerPrefix: 'META: ', // префикс для футера коммита
	subjectLimit: 72 // ширина строки
	
};
