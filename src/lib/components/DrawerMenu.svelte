<script>
    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';
    import Navigation from '$lib/navigation/Navigation.svelte';

    initializeStores();
    const drawerStore = getDrawerStore();
</script>


<Navigation />