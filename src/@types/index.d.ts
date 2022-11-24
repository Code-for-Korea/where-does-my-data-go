export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_SHEETS_API_KEY: string;
      REACT_APP_GOOGLE_SHEETS_PUBLIC_ID: string;
    }
  }
}
