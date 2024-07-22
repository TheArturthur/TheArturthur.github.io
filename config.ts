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
            type: 'all',
            visibility: 'public',
            affiliation: ['owner', 'collaborator', 'organization_member']
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
              { attr: 'owner.login', values: ['TheArturthur', 'excludarr'] },
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
    bio: ["Software Developer & Devops enthusiast.",
          "I manage a homelab cluster as sysAdmin, monitoring and issue-resolver for friends and family using it.",
          "I'm currently learning Kubernetes and preparing both the PCAP (Certified Associate Python Programmer)",
          "and RHCSA (Red Hat Certified System Administrator) certifications."
    ],
    position: 'Functional Analyst',
    company: 'MSX International TechServices S.L.',
    hireable: true,
    location: 'Madrid (Spain)',
    links: [
      { name: 'github', url: 'https://github.com/TheArturthur' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/arturo-vidal-pe%C3%B1a-025a2aa3/' },
      { name: 'twitter', url: 'https://twitter.com/TheArturthur' }
    ],
  },
  templates: {
    default: {
      configuration: {
        githubRepositoriesMore: 10,
        background: () => require('./public/background-picture.png'),
      },
      info: {
        name: 'Arturo Vidal',
        author: 'TheArturthur'
      }
    },
  }
} as IConfig;
