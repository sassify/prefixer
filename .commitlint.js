module.exports = {
  rules: {

    "body-leading-blank": [2, "always"], // тело коммита должно начинаться с пустой строки
    "footer-leading-blank": [2, "always"], // нижний колонтитул коммита должен начинаться с пустой строки
    "header-max-length": [2, "always", 72], // максимальная длина заголовка 72 символа
    "scope-case": [2, "always", "lower-case"], // область всегда только в нижнем регистре
    "subject-empty": [2, "never"], // описание не может быть пустым
    "subject-full-stop": [2, "never", "."], // описание не должно заканчиваться '.'
    "type-case": [2, "always", "lower-case"], // тип всегда только в нижнем регистре
    "type-empty": [2, "never"], // тип не может быть пустым

    // перечислим все возможные варианты коммитов
    "type-enum": [2, "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]

  }
};
