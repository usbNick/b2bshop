<script>
  import ComplaintsProductsSelection from "$lib/components/ComplaintsProductsSelection.svelte"

  let amountOfComplaints = 1;
  const addComplaint = () => {
    amountOfComplaints += 1
  }
</script>

<section class="container mx-auto py-8">
<form>
    <div class="border-b border-surface-900/10 pb-8">
        <h2 class="text-base font-semibold leading-7">Complaints</h2>
        <p class="mt-1 text-sm leading-6">Fill in the form below and we will contact you about this case as soon as possible.</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-6 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6">Company</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6">
            </div>
        </div>  
  
          <div class="sm:col-span-6">
            <label for="email" class="block text-sm font-medium leading-6">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6">
            </div>
          </div>
  

        </div>
      </div>


    <h2 class="text-base font-semibold leading-7 mt-4">Select the items</h2>
    <p class="mt-1 text-sm leading-6 mb-2">Type in the product code, name or barcode in the search field below.</p>

    {#each Array(amountOfComplaints) as _, index }
      <ComplaintsProductsSelection key={index} />
    {/each}
    


    <div class="mt-4">
        <button class="btn bg-surface-400 text-white rounded-md tracking-tight" on:click={addComplaint}>Add another product</button>
    </div>
    
  
    <div class="mt-10 flex items-center justify-end gap-x-6">        
      <button type="submit" class="w-full uppercase rounded-md bg-success-600 px-6 py-4 shadow-sm hover:bg-succes-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-black tracking-wide font-extrabold text-lg">Submit complaint</button>
    </div>
  </form>
</section>