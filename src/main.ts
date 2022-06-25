import App from './App.svelte'
import { pwaStatusStream } from '$lib/pwa';  // do something with any stream in this lib here, to register the PWA
import { setupIonicSvelte } from '$ionic/svelte';

setupIonicSvelte();

// if the page was prerendered, we want to remove the prerendered html
document.querySelector('[data-routify]')?.remove()
const app = new App({
  target: document.getElementById('app')
})

export default app


