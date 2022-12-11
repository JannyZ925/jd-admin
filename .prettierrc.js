module.exports = {
  printWidth: 100, // 单行最大长度
  useTabs: true, // 使用tab
  tabWidth: 2, // tab step
  semi: false, // 禁用行尾分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 当从对象中解构属性时按需添加引号
  jsxSingleQuote: false, // jsx使用双引号
  trailingComma: 'all', // 所有参数都允许尾逗号
  bracketSpacing: true, // 括号两端是否需要空格
  bracketSameLine: false, // jsx标签的闭合标签使用单独的一行（避免添加属性造成版本控制系统的多行冲突）
  arrowParens: 'avoid', // 箭头函数参数总是使用括号包裹（避免冲突）
  proseWrap: 'never', // 是否在markdown文件中根据printWidth来处理换行
  htmlWhitespaceSensitivity: 'css', // 去除html中的无用空格
  vueIndentScriptAndStyle: false, // vue模版中的script和style标签内部代码是否需要默认缩进,
  endOfLine: 'lf', // linux风格的行尾结束符
  embeddedLanguageFormatting: 'auto', // 开启内嵌代码（如js中的html, vue中的js等）的自动格式化
  singleAttributePerLine: true, // 在HTML, Vue and JSX中单行只写一个属性
}
