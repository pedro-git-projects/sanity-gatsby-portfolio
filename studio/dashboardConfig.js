export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605a74c6a3e02600b6816f52',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-46mx1r7d',
                  apiId: '711478a4-4571-48d7-a8e8-174d5d75716c'
                },
                {
                  buildHookId: '605a74c6028ac006ff89a0da',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-apyrgc96',
                  apiId: 'a9beb47d-7f4b-401e-8e72-0699e5c10a41'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pedro-git-projects/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-apyrgc96.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
