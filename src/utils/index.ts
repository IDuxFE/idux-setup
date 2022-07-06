export * from './iduxProviders'

export const normalizePath = (path: string): string => path.replaceAll(/\/{2,}/g, '/')
