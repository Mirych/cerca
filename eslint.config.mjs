// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Чтобы между атрибутами были пробелы и красиво отформатировано
    'vue/html-indent': ['warn', 2, {
      baseIndent: 1,
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],

    // Чтобы каждый атрибут был на новой строке, если их несколько
    'vue/max-attributes-per-line': ['warn', {
      singleline: 1,
      multiline: {
        max: 1
      }
    }],

    // Чтобы не было 2+ пустых строк подряд
    'no-multiple-empty-lines': ['warn', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0
    }],

    // Запретить пробел перед >
    'vue/html-closing-bracket-spacing': ['warn', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }]
  }
})
