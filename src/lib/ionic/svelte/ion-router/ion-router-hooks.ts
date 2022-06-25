// import { writable } from 'svelte/store';

/*
export const onIonViewWillEnterStore = writable('');
export const onIonViewDidEnterStore = writable('');
export const onIonViewWillLeaveStore = writable('');
export const onIonViewDidLeaveStore = writable('');
*/

export const pageHooks_onIonViewWillEnter: { [path: string]: () => any } = {}
export const pageHooks_onIonViewDidEnter: { [path: string]: () => any } = {}
export const pageHooks_onIonViewWillLeave: { [path: string]: () => any } = {}
export const pageHooks_onIonViewDidLeave: { [path: string]: () => any } = {}

export const onIonViewWillEnter = (path: string, hookFn: () => any) => {
    pageHooks_onIonViewWillEnter[path] = hookFn;
}

export const onIonViewDidEnter = (path: string, hookFn: () => any) => {
    pageHooks_onIonViewDidEnter[path] = hookFn;
}

export const onIonViewWillLeave = (path: string, hookFn: () => any) => {
    pageHooks_onIonViewWillLeave[path] = hookFn;
}

export const onIonViewDidLeave = (path: string, hookFn: () => any) => {
    pageHooks_onIonViewDidLeave[path] = hookFn;
}

