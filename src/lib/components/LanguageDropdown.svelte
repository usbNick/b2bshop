<script>
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
    import { popup, storePopup } from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
  
  
    const languagePopup = {
      // Represents the type of event that opens/closed the popup
      event: 'click',
      // Matches the data-popup value on your popup element
      target: 'languagePopup',
      // Defines which side of your trigger the popup will appear
      placement: 'bottom',
  };
  </script>
  
  
  <button class="btn" use:popup={languagePopup}>Language <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg></button>
  
  <div class="card p-4 shadow-xl rounded-lg z-50 bg-white dark:bg-surface-900" data-popup="languagePopup">
<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
      </li>
      <li>
        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">French</a>
      </li>
      <li>
        <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">German</a>
      </li>
    </ul>
      <div class="arrow bg-surface-100-800-token" />
  </div>