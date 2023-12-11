<script>
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { popup, storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


  const accountPopup = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'accountPopup',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
</script>


<button class="btn" use:popup={accountPopup}>My account <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

<div class="card bg-white dark:bg-surface-900 p-4 shadow-xl rounded-lg divide-y divide-surface-300 dark:divide-surface-700 z-50" data-popup="accountPopup">
  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white rounded-t-lg bg-gray-100 dark:bg-surface-800">
    <div>C030303</div>
    <div class="font-medium truncate">nvermonden@unitedspb.eu</div>
  </div>
  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
    <li>
      <a href="/account/orders" class="block px-4 py-2 hover:bg-white dark:hover:bg-surface-700 dark:hover:text-white">
        <svg class="w-4 h-4 inline mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
          <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Zm0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
        </svg>
        My orders</a>
    </li>
    <li>
      <a href="/account/settings" class="block px-4 py-2 hover:bg-white dark:hover:bg-surface-700 dark:hover:text-white">
        <svg class="w-4 h-4 inline mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z"/>
        </svg>
        Settings</a>
    </li>
    <li>
    
      <a href="/account/invoices" class="block px-4 py-2 hover:bg-white dark:hover:bg-surface-700 dark:hover:text-white">
        <svg class="w-4 h-4 inline mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
          <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
        </svg>
        Invoices</a>
    </li>
  </ul>
  <div class="py-2">
    <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-white dark:hover:bg-surface-700 dark:text-gray-200 dark:hover:text-white">Sign out</a>
  </div>
	<div class="arrow bg-surface-100-800-token" />
</div>