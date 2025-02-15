/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ThankyousubscribeImport } from './routes/thankyousubscribe'
import { Route as ThankyouregisterImport } from './routes/thankyouregister'
import { Route as ThankyoudemoImport } from './routes/thankyoudemo'
import { Route as TermsImport } from './routes/terms'
import { Route as SubscribeImport } from './routes/subscribe'
import { Route as ScheduleImport } from './routes/schedule'
import { Route as ResourcesImport } from './routes/resources'
import { Route as RegisterImport } from './routes/register'
import { Route as PrivacypolicyImport } from './routes/privacypolicy'
import { Route as PricingImport } from './routes/pricing'
import { Route as JoinImport } from './routes/join'
import { Route as HowitworksImport } from './routes/howitworks'
import { Route as FaqImport } from './routes/faq'
import { Route as BenefitsImport } from './routes/benefits'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as BloggerLoginImport } from './routes/blogger/login'
import { Route as BloggerDashboardImport } from './routes/blogger/dashboard'
import { Route as BloggerCreateblogImport } from './routes/blogger/createblog'
import { Route as BlogBlogIdImport } from './routes/blog/$blogId'
import { Route as BloggerEditBlogIdImport } from './routes/blogger/edit/$blogId'

// Create/Update Routes

const ThankyousubscribeRoute = ThankyousubscribeImport.update({
  id: '/thankyousubscribe',
  path: '/thankyousubscribe',
  getParentRoute: () => rootRoute,
} as any)

const ThankyouregisterRoute = ThankyouregisterImport.update({
  id: '/thankyouregister',
  path: '/thankyouregister',
  getParentRoute: () => rootRoute,
} as any)

const ThankyoudemoRoute = ThankyoudemoImport.update({
  id: '/thankyoudemo',
  path: '/thankyoudemo',
  getParentRoute: () => rootRoute,
} as any)

const TermsRoute = TermsImport.update({
  id: '/terms',
  path: '/terms',
  getParentRoute: () => rootRoute,
} as any)

const SubscribeRoute = SubscribeImport.update({
  id: '/subscribe',
  path: '/subscribe',
  getParentRoute: () => rootRoute,
} as any)

const ScheduleRoute = ScheduleImport.update({
  id: '/schedule',
  path: '/schedule',
  getParentRoute: () => rootRoute,
} as any)

const ResourcesRoute = ResourcesImport.update({
  id: '/resources',
  path: '/resources',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const PrivacypolicyRoute = PrivacypolicyImport.update({
  id: '/privacypolicy',
  path: '/privacypolicy',
  getParentRoute: () => rootRoute,
} as any)

const PricingRoute = PricingImport.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => rootRoute,
} as any)

const JoinRoute = JoinImport.update({
  id: '/join',
  path: '/join',
  getParentRoute: () => rootRoute,
} as any)

const HowitworksRoute = HowitworksImport.update({
  id: '/howitworks',
  path: '/howitworks',
  getParentRoute: () => rootRoute,
} as any)

const FaqRoute = FaqImport.update({
  id: '/faq',
  path: '/faq',
  getParentRoute: () => rootRoute,
} as any)

const BenefitsRoute = BenefitsImport.update({
  id: '/benefits',
  path: '/benefits',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BloggerLoginRoute = BloggerLoginImport.update({
  id: '/blogger/login',
  path: '/blogger/login',
  getParentRoute: () => rootRoute,
} as any)

const BloggerDashboardRoute = BloggerDashboardImport.update({
  id: '/blogger/dashboard',
  path: '/blogger/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BloggerCreateblogRoute = BloggerCreateblogImport.update({
  id: '/blogger/createblog',
  path: '/blogger/createblog',
  getParentRoute: () => rootRoute,
} as any)

const BlogBlogIdRoute = BlogBlogIdImport.update({
  id: '/blog/$blogId',
  path: '/blog/$blogId',
  getParentRoute: () => rootRoute,
} as any)

const BloggerEditBlogIdRoute = BloggerEditBlogIdImport.update({
  id: '/blogger/edit/$blogId',
  path: '/blogger/edit/$blogId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/benefits': {
      id: '/benefits'
      path: '/benefits'
      fullPath: '/benefits'
      preLoaderRoute: typeof BenefitsImport
      parentRoute: typeof rootRoute
    }
    '/faq': {
      id: '/faq'
      path: '/faq'
      fullPath: '/faq'
      preLoaderRoute: typeof FaqImport
      parentRoute: typeof rootRoute
    }
    '/howitworks': {
      id: '/howitworks'
      path: '/howitworks'
      fullPath: '/howitworks'
      preLoaderRoute: typeof HowitworksImport
      parentRoute: typeof rootRoute
    }
    '/join': {
      id: '/join'
      path: '/join'
      fullPath: '/join'
      preLoaderRoute: typeof JoinImport
      parentRoute: typeof rootRoute
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingImport
      parentRoute: typeof rootRoute
    }
    '/privacypolicy': {
      id: '/privacypolicy'
      path: '/privacypolicy'
      fullPath: '/privacypolicy'
      preLoaderRoute: typeof PrivacypolicyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/resources': {
      id: '/resources'
      path: '/resources'
      fullPath: '/resources'
      preLoaderRoute: typeof ResourcesImport
      parentRoute: typeof rootRoute
    }
    '/schedule': {
      id: '/schedule'
      path: '/schedule'
      fullPath: '/schedule'
      preLoaderRoute: typeof ScheduleImport
      parentRoute: typeof rootRoute
    }
    '/subscribe': {
      id: '/subscribe'
      path: '/subscribe'
      fullPath: '/subscribe'
      preLoaderRoute: typeof SubscribeImport
      parentRoute: typeof rootRoute
    }
    '/terms': {
      id: '/terms'
      path: '/terms'
      fullPath: '/terms'
      preLoaderRoute: typeof TermsImport
      parentRoute: typeof rootRoute
    }
    '/thankyoudemo': {
      id: '/thankyoudemo'
      path: '/thankyoudemo'
      fullPath: '/thankyoudemo'
      preLoaderRoute: typeof ThankyoudemoImport
      parentRoute: typeof rootRoute
    }
    '/thankyouregister': {
      id: '/thankyouregister'
      path: '/thankyouregister'
      fullPath: '/thankyouregister'
      preLoaderRoute: typeof ThankyouregisterImport
      parentRoute: typeof rootRoute
    }
    '/thankyousubscribe': {
      id: '/thankyousubscribe'
      path: '/thankyousubscribe'
      fullPath: '/thankyousubscribe'
      preLoaderRoute: typeof ThankyousubscribeImport
      parentRoute: typeof rootRoute
    }
    '/blog/$blogId': {
      id: '/blog/$blogId'
      path: '/blog/$blogId'
      fullPath: '/blog/$blogId'
      preLoaderRoute: typeof BlogBlogIdImport
      parentRoute: typeof rootRoute
    }
    '/blogger/createblog': {
      id: '/blogger/createblog'
      path: '/blogger/createblog'
      fullPath: '/blogger/createblog'
      preLoaderRoute: typeof BloggerCreateblogImport
      parentRoute: typeof rootRoute
    }
    '/blogger/dashboard': {
      id: '/blogger/dashboard'
      path: '/blogger/dashboard'
      fullPath: '/blogger/dashboard'
      preLoaderRoute: typeof BloggerDashboardImport
      parentRoute: typeof rootRoute
    }
    '/blogger/login': {
      id: '/blogger/login'
      path: '/blogger/login'
      fullPath: '/blogger/login'
      preLoaderRoute: typeof BloggerLoginImport
      parentRoute: typeof rootRoute
    }
    '/blogger/edit/$blogId': {
      id: '/blogger/edit/$blogId'
      path: '/blogger/edit/$blogId'
      fullPath: '/blogger/edit/$blogId'
      preLoaderRoute: typeof BloggerEditBlogIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/benefits': typeof BenefitsRoute
  '/faq': typeof FaqRoute
  '/howitworks': typeof HowitworksRoute
  '/join': typeof JoinRoute
  '/pricing': typeof PricingRoute
  '/privacypolicy': typeof PrivacypolicyRoute
  '/register': typeof RegisterRoute
  '/resources': typeof ResourcesRoute
  '/schedule': typeof ScheduleRoute
  '/subscribe': typeof SubscribeRoute
  '/terms': typeof TermsRoute
  '/thankyoudemo': typeof ThankyoudemoRoute
  '/thankyouregister': typeof ThankyouregisterRoute
  '/thankyousubscribe': typeof ThankyousubscribeRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/blogger/createblog': typeof BloggerCreateblogRoute
  '/blogger/dashboard': typeof BloggerDashboardRoute
  '/blogger/login': typeof BloggerLoginRoute
  '/blogger/edit/$blogId': typeof BloggerEditBlogIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/benefits': typeof BenefitsRoute
  '/faq': typeof FaqRoute
  '/howitworks': typeof HowitworksRoute
  '/join': typeof JoinRoute
  '/pricing': typeof PricingRoute
  '/privacypolicy': typeof PrivacypolicyRoute
  '/register': typeof RegisterRoute
  '/resources': typeof ResourcesRoute
  '/schedule': typeof ScheduleRoute
  '/subscribe': typeof SubscribeRoute
  '/terms': typeof TermsRoute
  '/thankyoudemo': typeof ThankyoudemoRoute
  '/thankyouregister': typeof ThankyouregisterRoute
  '/thankyousubscribe': typeof ThankyousubscribeRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/blogger/createblog': typeof BloggerCreateblogRoute
  '/blogger/dashboard': typeof BloggerDashboardRoute
  '/blogger/login': typeof BloggerLoginRoute
  '/blogger/edit/$blogId': typeof BloggerEditBlogIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/benefits': typeof BenefitsRoute
  '/faq': typeof FaqRoute
  '/howitworks': typeof HowitworksRoute
  '/join': typeof JoinRoute
  '/pricing': typeof PricingRoute
  '/privacypolicy': typeof PrivacypolicyRoute
  '/register': typeof RegisterRoute
  '/resources': typeof ResourcesRoute
  '/schedule': typeof ScheduleRoute
  '/subscribe': typeof SubscribeRoute
  '/terms': typeof TermsRoute
  '/thankyoudemo': typeof ThankyoudemoRoute
  '/thankyouregister': typeof ThankyouregisterRoute
  '/thankyousubscribe': typeof ThankyousubscribeRoute
  '/blog/$blogId': typeof BlogBlogIdRoute
  '/blogger/createblog': typeof BloggerCreateblogRoute
  '/blogger/dashboard': typeof BloggerDashboardRoute
  '/blogger/login': typeof BloggerLoginRoute
  '/blogger/edit/$blogId': typeof BloggerEditBlogIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/benefits'
    | '/faq'
    | '/howitworks'
    | '/join'
    | '/pricing'
    | '/privacypolicy'
    | '/register'
    | '/resources'
    | '/schedule'
    | '/subscribe'
    | '/terms'
    | '/thankyoudemo'
    | '/thankyouregister'
    | '/thankyousubscribe'
    | '/blog/$blogId'
    | '/blogger/createblog'
    | '/blogger/dashboard'
    | '/blogger/login'
    | '/blogger/edit/$blogId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/benefits'
    | '/faq'
    | '/howitworks'
    | '/join'
    | '/pricing'
    | '/privacypolicy'
    | '/register'
    | '/resources'
    | '/schedule'
    | '/subscribe'
    | '/terms'
    | '/thankyoudemo'
    | '/thankyouregister'
    | '/thankyousubscribe'
    | '/blog/$blogId'
    | '/blogger/createblog'
    | '/blogger/dashboard'
    | '/blogger/login'
    | '/blogger/edit/$blogId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/benefits'
    | '/faq'
    | '/howitworks'
    | '/join'
    | '/pricing'
    | '/privacypolicy'
    | '/register'
    | '/resources'
    | '/schedule'
    | '/subscribe'
    | '/terms'
    | '/thankyoudemo'
    | '/thankyouregister'
    | '/thankyousubscribe'
    | '/blog/$blogId'
    | '/blogger/createblog'
    | '/blogger/dashboard'
    | '/blogger/login'
    | '/blogger/edit/$blogId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BenefitsRoute: typeof BenefitsRoute
  FaqRoute: typeof FaqRoute
  HowitworksRoute: typeof HowitworksRoute
  JoinRoute: typeof JoinRoute
  PricingRoute: typeof PricingRoute
  PrivacypolicyRoute: typeof PrivacypolicyRoute
  RegisterRoute: typeof RegisterRoute
  ResourcesRoute: typeof ResourcesRoute
  ScheduleRoute: typeof ScheduleRoute
  SubscribeRoute: typeof SubscribeRoute
  TermsRoute: typeof TermsRoute
  ThankyoudemoRoute: typeof ThankyoudemoRoute
  ThankyouregisterRoute: typeof ThankyouregisterRoute
  ThankyousubscribeRoute: typeof ThankyousubscribeRoute
  BlogBlogIdRoute: typeof BlogBlogIdRoute
  BloggerCreateblogRoute: typeof BloggerCreateblogRoute
  BloggerDashboardRoute: typeof BloggerDashboardRoute
  BloggerLoginRoute: typeof BloggerLoginRoute
  BloggerEditBlogIdRoute: typeof BloggerEditBlogIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BenefitsRoute: BenefitsRoute,
  FaqRoute: FaqRoute,
  HowitworksRoute: HowitworksRoute,
  JoinRoute: JoinRoute,
  PricingRoute: PricingRoute,
  PrivacypolicyRoute: PrivacypolicyRoute,
  RegisterRoute: RegisterRoute,
  ResourcesRoute: ResourcesRoute,
  ScheduleRoute: ScheduleRoute,
  SubscribeRoute: SubscribeRoute,
  TermsRoute: TermsRoute,
  ThankyoudemoRoute: ThankyoudemoRoute,
  ThankyouregisterRoute: ThankyouregisterRoute,
  ThankyousubscribeRoute: ThankyousubscribeRoute,
  BlogBlogIdRoute: BlogBlogIdRoute,
  BloggerCreateblogRoute: BloggerCreateblogRoute,
  BloggerDashboardRoute: BloggerDashboardRoute,
  BloggerLoginRoute: BloggerLoginRoute,
  BloggerEditBlogIdRoute: BloggerEditBlogIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/benefits",
        "/faq",
        "/howitworks",
        "/join",
        "/pricing",
        "/privacypolicy",
        "/register",
        "/resources",
        "/schedule",
        "/subscribe",
        "/terms",
        "/thankyoudemo",
        "/thankyouregister",
        "/thankyousubscribe",
        "/blog/$blogId",
        "/blogger/createblog",
        "/blogger/dashboard",
        "/blogger/login",
        "/blogger/edit/$blogId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/benefits": {
      "filePath": "benefits.tsx"
    },
    "/faq": {
      "filePath": "faq.tsx"
    },
    "/howitworks": {
      "filePath": "howitworks.tsx"
    },
    "/join": {
      "filePath": "join.tsx"
    },
    "/pricing": {
      "filePath": "pricing.tsx"
    },
    "/privacypolicy": {
      "filePath": "privacypolicy.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/resources": {
      "filePath": "resources.tsx"
    },
    "/schedule": {
      "filePath": "schedule.tsx"
    },
    "/subscribe": {
      "filePath": "subscribe.tsx"
    },
    "/terms": {
      "filePath": "terms.tsx"
    },
    "/thankyoudemo": {
      "filePath": "thankyoudemo.tsx"
    },
    "/thankyouregister": {
      "filePath": "thankyouregister.tsx"
    },
    "/thankyousubscribe": {
      "filePath": "thankyousubscribe.tsx"
    },
    "/blog/$blogId": {
      "filePath": "blog/$blogId.tsx"
    },
    "/blogger/createblog": {
      "filePath": "blogger/createblog.tsx"
    },
    "/blogger/dashboard": {
      "filePath": "blogger/dashboard.tsx"
    },
    "/blogger/login": {
      "filePath": "blogger/login.tsx"
    },
    "/blogger/edit/$blogId": {
      "filePath": "blogger/edit/$blogId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
