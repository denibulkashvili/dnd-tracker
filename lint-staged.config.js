module.exports = {
  'server/**/*.{ts}': [
    'eslint ./server --ext ts -c server/.eslintrc.js --ignore-path .eslintignore --fix --quiet',
    'git add',
  ],
  'web-app/**/*.{js,ts,tsx},!web-app/public/*.*': [
    'eslint ./web-app --ext js,ts,tsx -c web-app/.eslintrc.js --ignore-path .eslintignore --fix --quiet',
    'git add',
  ],
}
