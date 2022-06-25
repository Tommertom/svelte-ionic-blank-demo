# Ionic Svelte PWA starter
A starter app for all Ionic UI elements - up to Ionic 6!!! 

Easy documentation for svelte & Ionic published as web app: https://ionicsvelte.firebaseapp.com
e console.log*

Features
- Use all Ionic 6 UI elements
- Fast bundler using VITE
- Ease PWA configuration with good documentation - using zero-config Vite (https://vite-plugin-pwa.netlify.app/)
- Deployable as PWA.
- File based router (using Roxy/Routify)

* https://github.com/Tommertom/svelte-ionic-app/tree/1.BlankStarter - Ionic's blank starter


Install this branch:
```bash
git clone --single-branch --branch 1.BlankStarter https://github.com/Tommertom/svelte-ionic-app.git
cd svelte-ionic-app
npm i
npm run dev
```
  

# PWA Interface - easing the PWA work in your app
To help you managing state of the service worker and the various events, a simple svelte store is provided for (`lib/pwa.ts`). This store wraps the various events of the service worker in a readable store and a number of derived stores so you can easily listen to various events.

While most tutorials provide you the basics to do all these separately and in an "Hello world" fashion, having all in a store helps wiring things up to the UI across various places in the code. 

The following derived stores are implemented:
- `needRefresh`:`boolean` telling you if there is an update available
- `updateObject`:`undefined|UpdateObject`. When UpdateObject is provided, you can call its `updateSWObject()` method to update the app
- `offlineReady`:`boolean` telling you all offline assets have been loaded
- `registerError`:`any` - the error message when the registration of the service worker failed
- `registration`:`undefined|ServiceWorkerRegistration` - the service worker registration object - when succesfull
- `beforeInstallPrompt` - `undefined|BeforeInstallPromptEvent` - which you can use to fire the `.prompt()` method to invoke the install prompt. N.B. this needs to happen right after an userevent (like button press)!

All these props are also available via the `pwaStatusStream` readable store.

# Issues - work in progress
- Ion Icons implementation will not support md and ios specific icons etc (yet) - name prop does not function - also happening in Vue/React.Similar icon issues arise with other component that can digest custom icons (to check)
- A IonFooter in a Modal gives weird layout - not happening in Angular, so a thing related to this implementation
- Adding custom class to Modal/Popover does not work (using controller) - using inline is probably better
