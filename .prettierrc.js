module.exports = {
    arrowParens: 'avoid',
    bracketSameLine: true,
    bracketSpacing: true,
    singleQuote: true,
    printWidth: 400,
    trailingComma: 'all',
    proseWrap: 'preserve',
    semicolons: true,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
  };