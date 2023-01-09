declare type dialogState = {
  isShow: boolean, setIsShow: (value: boolean) => void;
}
declare type searchState = {
  setKeywords: (word: string) => void,
  keywords: string
}
type nativeImage = {
  title: string,
  screenshot: string,
  url: string
}
type MyApi = {
  sendUrl: (url: string) => Promise<nativeImage>,
  alert: (url: string) => void,
  openWindow: (url: string) => void
}
declare interface Window {
  myApi: MyApi,
}