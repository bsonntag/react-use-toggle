module.exports = {
  '*.{css,html,json}': ['prettier --write'],
  '*.js': ['eslint --fix', 'prettier --write'],
  'src/*.js': ['jest --find-related-tests'],
};
