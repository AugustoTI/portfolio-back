// Set the typing of your environment variables here 👇
type MyVariables = {
  SANITY_STUDIO_PROJECT_ID: string
  SANITY_STUDIO_DATASET: string
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends MyVariables {}
  }
}

export {}
