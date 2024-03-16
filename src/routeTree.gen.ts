/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./pages/__root"
import { Route as AuthRouteImport } from "./pages/auth/route"
import { Route as IndexImport } from "./pages/index"
import { Route as WorkspacesIndexImport } from "./pages/workspaces/index"
import { Route as WorkspacesWorkspaceLayoutImport } from "./pages/workspaces/_workspaceLayout"
import { Route as WorkspacesWorkspaceLayoutWorkspaceIdIndexImport } from "./pages/workspaces/_workspaceLayout.$workspaceId.index"
import { Route as WorkspacesWorkspaceLayoutWorkspaceIdAdminImport } from "./pages/workspaces/_workspaceLayout.$workspaceId.admin"

// Create Virtual Routes

const WorkspacesImport = createFileRoute("/workspaces")()
import { Route as WorkspacesWorkspaceIdAdminImport } from "./pages/workspaces/$workspaceId/admin"

// Create/Update Routes

const WorkspacesRoute = WorkspacesImport.update({
  path: "/workspaces",
  getParentRoute: () => rootRoute,
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  path: "/auth",
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any)

const WorkspacesIndexRoute = WorkspacesIndexImport.update({
  path: "/",
  getParentRoute: () => WorkspacesRoute,
} as any)

const WorkspacesWorkspaceLayoutRoute = WorkspacesWorkspaceLayoutImport.update({
  id: "/_workspaceLayout",
  getParentRoute: () => WorkspacesRoute,
} as any)

const WorkspacesWorkspaceLayoutWorkspaceIdIndexRoute =
  WorkspacesWorkspaceLayoutWorkspaceIdIndexImport.update({
    path: "/$workspaceId/",
    getParentRoute: () => WorkspacesWorkspaceLayoutRoute,
  } as any)

const WorkspacesWorkspaceLayoutWorkspaceIdAdminRoute =
  WorkspacesWorkspaceLayoutWorkspaceIdAdminImport.update({
    path: "/$workspaceId/admin",
    getParentRoute: () => WorkspacesWorkspaceLayoutRoute,
  } as any)

const WorkspacesWorkspaceIdAdminRoute = WorkspacesWorkspaceIdAdminImport.update(
  {
    path: "/workspaces/$workspaceId/admin",
    getParentRoute: () => rootRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    "/auth": {
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    "/workspaces": {
      preLoaderRoute: typeof WorkspacesImport
      parentRoute: typeof rootRoute
    }
    "/workspaces/_workspaceLayout": {
      preLoaderRoute: typeof WorkspacesWorkspaceLayoutImport
      parentRoute: typeof WorkspacesRoute
    }
    "/workspaces/": {
      preLoaderRoute: typeof WorkspacesIndexImport
      parentRoute: typeof WorkspacesImport
    }
    "/workspaces/_workspaceLayout/$workspaceId/admin": {
      preLoaderRoute: typeof WorkspacesWorkspaceLayoutWorkspaceIdAdminImport
      parentRoute: typeof WorkspacesWorkspaceLayoutImport
    }
    "/workspaces/_workspaceLayout/$workspaceId/": {
      preLoaderRoute: typeof WorkspacesWorkspaceLayoutWorkspaceIdIndexImport
      parentRoute: typeof WorkspacesWorkspaceLayoutImport
    }
    "/workspaces/$workspaceId/admin": {
      preLoaderRoute: typeof WorkspacesWorkspaceIdAdminImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthRouteRoute,
  WorkspacesRoute.addChildren([
    WorkspacesWorkspaceLayoutRoute.addChildren([
      WorkspacesWorkspaceLayoutWorkspaceIdAdminRoute,
      WorkspacesWorkspaceLayoutWorkspaceIdIndexRoute,
    ]),
    WorkspacesIndexRoute,
  ]),
  WorkspacesWorkspaceIdAdminRoute,
])

/* prettier-ignore-end */
