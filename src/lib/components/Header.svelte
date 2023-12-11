<script>
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import AccountDropdownMenu from '$lib/components/AccountDropdownMenu.svelte';
    import LanguageDropdown from '$lib/components/LanguageDropdown.svelte';
    import DrawerMenu from '$lib/components/DrawerMenu.svelte';
</script>

<header class="bg-white dark:bg-surface-800">
  <!-- <DrawerMenu /> -->
<div class="container mx-auto topbar flex justify-end gap-6 border-solid border-b-2 border-surface-200 dark:border-surface-700  items-center px-1">
    <!-- ACCOUNT SETTINGS-->
    <AccountDropdownMenu />

    <!-- LANGUAGE SELECTOR -->
    <LanguageDropdown />
  
    <!-- DARMODE BUTTON -->
    <LightSwitch />
</div>
  
<div class="container mx-auto flex gap-12 justify-between py-4 px-1 items-center">
  <a href="/">
    <svg viewBox="0 0 224 247" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" class="w-12 fill-black dark:fill-white">
      <path d="M215.663 161.274 8.826 88.545V37.64l206.837 72.74v50.894Zm-16.73 35.861-61.274 38.483v-55.233h32.09v-14.369l-32.09-11.289v-11.496l61.274 21.519v32.385ZM93.608 139.243v-11.5l35.224 12.382v11.504l-35.224-12.386Zm-70.097-24.649v-11.495l61.275 21.542v11.502l-61.275-21.549Zm8.323 56.971v8.82h52.952v55.233l-61.275-38.485.002-25.568h-.002v-.004l-14.685.004v-52.784l150.116 52.784H31.834Zm96.998 17.168H93.608v-8.348h35.224v8.348Zm0 50.455H93.608v-41.631h35.224v41.631ZM23.515 9.526h61.277v8.326h-32.09v14.367l32.09 11.289v11.499L23.515 33.488V9.526Zm105.324 49.47v11.497L93.616 58.11V46.606l35.223 12.39Zm70.098 24.648v11.495l-61.276-21.544V62.096l61.276 21.548Zm-8.321-56.972v-8.82l-52.957-.009V9.526h61.278l-.004 17.146h14.689v52.782L63.506 26.672h127.11Zm30.926 76.509-13.785-4.905V93.5l11.492-3.758h.004c1.838-.538 3.191-2.217 3.191-4.225V22.27a4.432 4.432 0 0 0-4.423-4.427l-10.301-.002V5.125a4.43 4.43 0 0 0-4.422-4.422h-70.039a4.432 4.432 0 0 0-4.427 4.422v12.718H93.608V5.125A4.429 4.429 0 0 0 89.186.703H19.113a4.432 4.432 0 0 0-4.424 4.422v18.469L3.197 27.353C1.355 27.89.003 29.571.003 31.577L0 91.621a4.445 4.445 0 0 0 2.769 4.106l11.92 4.235v4.773l-11.492 3.759c-1.842.539-3.194 2.217-3.194 4.227v63.248a4.425 4.425 0 0 0 4.424 4.416h10.262v19.176c0 1.476.746 2.867 1.975 3.687.033.026 70.26 44.125 70.26 44.125a4.412 4.412 0 0 0 2.27.627h44.055a4.41 4.41 0 0 0 2.268-.627l70.265-44.125a4.452 4.452 0 0 0 1.975-3.687v-23.582l13.535-4.418h.004c1.838-.537 3.189-2.217 3.189-4.225v-59.985a4.433 4.433 0 0 0-2.943-4.17Z" style="fill-rule:nonzero" transform="matrix(.99191 0 0 .99191 .665 .154)"/>
    </svg>
  </a>

  <nav>
    <ul class="flex gap-8 uppercase font-semibold">
      <li><a href="/">Home</a></li>
      <li><a href="/shop">Shop</a></li>
      <li><a href="/">Returns</a></li>
      <li><a href="/complaints">Complaints</a></li>
      <li><a href="/">USBox</a></li>
    </ul>
  </nav>
    
  <div class="cart">
    <a href="/">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
      </svg>
    </a>
  </div>

  </div>
</header>