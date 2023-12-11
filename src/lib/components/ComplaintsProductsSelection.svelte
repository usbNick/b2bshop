<script>
    import { Autocomplete, FileDropzone } from '@skeletonlabs/skeleton';

    let inputDemo = '';

    const productOptions = [
	{ label: '195R-BK-S - Ankle brace with straps', value: '025050505', keywords: 'test', meta: { healthy: false } },
	{ label: '195R-BK-M - Ankle brace with straps', value: 'Ankle Brace with Straps', keywords: '195, mcdavid', meta: { healthy: false } },
	{ label: '195R-BK-L - Ankle brace with straps', value: 'Ankle Brace with Straps', keywords: '195, mcdavid', meta: { healthy: false } },
	{ label: '195R-BK-XL - Ankle brace with straps', value: 'Ankle Brace with Straps', keywords: '195, mcdavid', meta: { healthy: false } },
	{ label: '195R-WH-S - Ankle brace with straps', value: 'Ankle Brace with Straps', keywords: '195, mcdavid', meta: { healthy: false } },
	{ label: '195R-WH-M - Ankle brace with straps', value: 'Ankle Brace with Straps', keywords: '195, mcdavid', meta: { healthy: false } }
];

function onChangeHandler(e) {
	console.log('file data:', e);
    console.log(files[0].name)
}

function onProductSelection(event) {
	inputDemo = event.detail.label;
}

let files;
</script>

    <div class="productSearchWrapper bg-gray-100 dark:bg-surface-600 rounded-md p-4 my-4">
        <input class="input rounded-md bg-white mb-2" type="search" name="demo" bind:value={inputDemo} placeholder="Search products" />
        <div class="flex gap-4">
            <div class="card w-full max-h-40 p-4 overflow-y-auto rounded-md bg-white" tabindex="-1">
            <Autocomplete bind:input={inputDemo} options={productOptions} on:selection={onProductSelection} />
            </div>

            <div class="grid grid-cols-4 grid-rows-4 gap-4">
                <div class="row-span-2">
                    <label for="qty">Quantity</label>
                    <input class="input max-h-12 bg-white rounded-md" type="number" id="qty" placeholder="Quantity" />
                </div>
                <div class="row-span-2">
                    <label for="purchaseDate">Purchase Date</label>
                    <input class="input max-h-12 bg-white rounded-md" type="date" id="purchaseDate" placeholder="Quantity" />
                </div>
                <div class="col-span-2 row-span-2 col-start-1 row-start-3">
                    <label for="complaintReason">Reason for complaint</label>
                    <input class="input max-h-12 bg-white rounded-md" type="text" id="complaintReason" placeholder="Reason for complaint" />
                </div>
                <div class="col-span-2 row-span-4 col-start-3 row-start-1">
                    <FileDropzone on:change={onChangeHandler} name="files" bind:files={files} class="h-32" />
                    {#if files}
                    <svg class="w-4 h-4 inline stroke-success-900 dark:stroke-success-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg> <span class="text-sm">File added: {files[0].name}</span>
                    {/if}
                    
                </div>
            </div>



        </div>
    </div>