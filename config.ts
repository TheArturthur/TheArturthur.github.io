import IConfig from './src/interfaces/IConfig';

export default {
  global: {
    locale: "es_ES"
  },
  services: {
    github: {
      configuration: {
        nickname: 'TheArturthur',
        fetcher: {
          repositories: {
            type: 'public'
          }
        },
        sort: {
          repositories: [
            { attr: 'updated_at', sortByDesc: true },
            { attr: 'forks_count', sortByDesc: true },
            { attr: 'stargazers_count', sortByDesc: true },
          ],
        },
        filter: {
          repositories: [
            [
              { attr: 'owner.login', values: ['TheArturthur'] },
              { attr: 'name', values: [
                'awesome-vue', 
                'merge-conflict', 
                'github-pages-with-jekyll', 
                'markdown-portfolio', 
                'TheArturthur',
                'TheArturthur.github.io',
                'linkedin-skill-assessment-quizzes',
                'Portada-UPM-ETSIINF',
                'AntiPilarica',
                'TFSDB',
                'xpipe-storage',
                'cardb-searcher',
                'private',
                'mobilo-web-code',
                'web-cv',
                'Spotify',
                'Git-Talk17',
                'PDLC',
                'PDL_old'
              ], revert: true }
            ],
          ],
        },
      },
    },
  },
  data: {
    first_name: 'Arturo',
    last_name: 'Vidal',
    bio: 'Software Developer & Devops enthusiast.\n I manage a homelab cluster as sysAdmin, monitoring and issue-resolver for friends and family using it.\n I\'m currently learning Kubernetes and preparing both the PCAP (Certified Associate Python Programmer) and RHCSA (Red Hat Certified System Administrator) certifications.',
    gender: 'male',
    position: 'Functional Analyst',
    company: 'MSX International TechServices S.L.',
    location: 'Madrid (Spain)',
    hireable: true,
    links: [
      { name: 'github', url: 'https://github.com/TheArturthur' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/arturo-vidal-pe%C3%B1a-025a2aa3/' },
      { name: 'twitter', url: 'https://twitter.com/TheArturthur' }
    ],
  },
  templates: {
    default: {
      configuration: {
        background: () => require('./public/background-picture.png'),
      },
    },
  }
} as IConfig;
