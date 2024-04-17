/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
 root: true,
 extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting'],
 parserOptions: {
  ecmaVersion: 'latest'
 },
 rules: {
  // tab-size
  indent: ['error', 1],
  // Проверка порядка атрибутов
  'vue/attributes-order': [
   'error',
   {
    order: [
     'DEFINITION',
     'LIST_RENDERING',
     'CONDITIONALS',
     'RENDER_MODIFIERS',
     'GLOBAL',
     ['UNIQUE', 'SLOT'],
     'TWO_WAY_BINDING',
     'OTHER_DIRECTIVES',
     'OTHER_ATTR',
     'EVENTS',
     'CONTENT'
    ],
    alphabetical: false
   }
  ],
  // Проверка на максимальное количество атрибутов в строке
  'vue/max-attributes-per-line': [
   'error',
   {
    singleline: {
     max: 1
    },
    multiline: {
     max: 1
    }
   }
  ],
  // Проверка на самозакрывающийся тег или компонент
  'vue/html-self-closing': [
   'error',
   {
    html: {
     void: 'never',
     normal: 'always',
     component: 'always'
    },
    svg: 'always',
    math: 'always'
   }
  ],
  // Проверка последовательного отступа в шаблоне <template>
  'vue/html-indent': [
   'error',
   2,
   {
    attribute: 1,
    baseIndent: 1,
    closeBracket: 0,
    alignAttributesVertically: true,
    ignores: []
   }
  ],
  // Проверка регистра для стиля именования компонентов в шаблоне
  'vue/component-name-in-template-casing': [
   'error',
   'kebab-case',
   {
    registeredComponentsOnly: true
   }
  ],
  // Проверка нерегулярных пробелов
  'vue/no-irregular-whitespace': [
   'error',
   {
    skipStrings: true,
    skipComments: false,
    skipRegExps: false,
    skipTemplates: false,
    skipHTMLAttributeValues: false,
    skipHTMLTextContents: false
   }
  ],
  // Проверка на определенный регистр для имени компонента
  'vue/component-definition-name-casing': ['error', 'PascalCase'],
  // Проверка имени компонента — оно должно соответствовать имени файла, в котором он находится
  'vue/match-component-file-name': [
   'error',
   {
    extensions: ['vue'],
    shouldMatchCase: false
   }
  ],
  // Запретить дублирование имен полей
  'vue/no-dupe-keys': [
   'error',
   {
    groups: []
   }
  ],
  // Проверка  запятых
  'comma-dangle': [
   'error',
   {
    arrays: 'never',
    objects: 'never',
    imports: 'never',
    exports: 'never',
    functions: 'never'
   }
  ],
  'no-console': 'error',
  'no-debugger': 'error',
  'arrow-parens': ['error', 'as-needed'],
  // требуется деструктуризация массивов и/или объектов.
  'prefer-destructuring': [
   'error',
   {
    array: true,
    object: true
   },
   {
    enforceForRenamedProperties: false
   }
  ],
  // запрещает неиспользуемые переменные.
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  // обеспечивает максимальную длину строки.
  'max-len': ['error', { code: 120 }]
 }
}
