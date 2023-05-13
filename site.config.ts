import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'befe03e14ae043c096ed2b09da5831fc',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  // rootNotionSpaceId: 'c11e0372f80d414988e1a72230e57303',
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Kyle\'s Secret Garden',
  domain: 'kk17.net',
  author: 'Kyle Chen',

  // open graph metadata (optional)
  description: 'Personal site of Kyle Chen aka kk17',

  // social usernames (optional)
  twitter: '_kk17_',
  github: 'kk17',
  linkedin: 'kyle-ba7127116',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // privacyPolicy: '64f7bf74081041139f049af5f9b88017',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  googleAnalyticsId: 'G-7LKLJTQBTQ',

  disqusShortname: 'kk17',


  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Tech',
      pageId: '7629c1e799304866b0417f12c765bb81'
    }
  ]
})
