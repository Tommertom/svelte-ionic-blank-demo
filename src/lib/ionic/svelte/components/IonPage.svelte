<script lang="ts">
  import { fly } from "svelte/transition";

  import { onDestroy, onMount } from "svelte";
  import { beforeUrlChange } from "@roxi/routify";

  import {
    pageHooks_onIonViewWillEnter,
    pageHooks_onIonViewDidEnter,
    pageHooks_onIonViewWillLeave,
    pageHooks_onIonViewDidLeave,
  } from "$ionic/svelte";

  export let ionViewWillEnter = () => {};
  export let ionViewDidEnter = () => {};
  export let ionViewWillLeave = () => {};
  export let ionViewDidLeave = () => {};

  export let route;

  $: if (route) {
    ionViewWillEnter();
    if (pageHooks_onIonViewWillEnter[route]) pageHooks_onIonViewWillEnter[route]();
  }

  $beforeUrlChange(() => {
    ionViewWillLeave();
    if (pageHooks_onIonViewWillLeave[route]) pageHooks_onIonViewWillLeave[route]();
    return true;
  });

  onMount(() => {
    ionViewDidEnter();
    if (pageHooks_onIonViewDidEnter[route]) pageHooks_onIonViewDidEnter[route]();
  });

  onDestroy(() => {
    ionViewDidLeave();
    if (pageHooks_onIonViewDidLeave[route]) pageHooks_onIonViewDidLeave[route]();
  });
</script>

<main in:fly={{ x: 100, duration: 250 }}>
  <slot />
</main>
