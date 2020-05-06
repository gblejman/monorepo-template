module.exports = {
  hooks: {
    // Runs all tasks declared in lint-staged.config.js
    'pre-commit': 'lint-staged',
  },
};
