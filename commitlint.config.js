module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'hotfix', 'refactor', 'docs', 'style', 'design', 'chore'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0, 'always', []],
  },
};
