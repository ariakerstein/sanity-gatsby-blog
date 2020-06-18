export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eeac58b9b3e0b2b2ee80919',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-42vi2dqj',
                  apiId: '5a9dd36e-c583-414f-899e-7c8d4ada5dbe'
                },
                {
                  buildHookId: '5eeac58b24c20b5c8da20bff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2y1kxi8f',
                  apiId: '39da43a4-c102-41a4-afa7-e54bba4e2a68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ariakerstein/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2y1kxi8f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
