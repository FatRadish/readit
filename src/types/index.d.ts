declare type dialogState = {
  isShow: boolean, setIsShow: (value: boolean) => void;
}
type nativeImage = {
  title: string,
  screenshot: string,
  url: string
}
type MyApi = {
  sendUrl: (url: string) => Promise<nativeImage>
}
declare interface Window {
  myApi: MyApi
}