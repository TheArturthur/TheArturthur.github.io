import IConfig from './src/interfaces/IConfig';

export default {
  services: {
    github: {
      configuration: {
        nickname: 'TheArturthur',
        sort: {
          repositories: [
            { attr: 'created_at', sortByDesc: true },
            { attr: 'forks_count', sortByDesc: true },
            { attr: 'stargazers_count', sortByDesc: true },
          ],
        },
        filter: {
          repositories: [
            [
              { attr: 'owner.login', values: ['TheArturthur'] },
              { attr: 'name', values: ['awesome-vue', 'merge-conflict', 'github-pages-with-jekyll', 'markdown-portfolio'], revert: true },
              { attr: 'fork', values: false },
            ],
          ],
        },
      },
    },
  },
  data: {
    position: 'Software Developer',
    links: [
      { name: 'github', url: 'https://github.com/TheArturthur' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/arturo-vidal-pe%C3%B1a-025a2aa3/' },
      { name: 'twitter', url: 'https://twitter.com/TheArturthur' },
    ],
  },
  templates: {
    default: {
      configuration: {
        background: () => require('./public/background-picture.png'),
      },
    },
  },
} as IConfig;
