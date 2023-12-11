<script>
    let productSuggestions = [
        {
            title: "Ankle brace with straps",
            SRP: 49.95,
            image: 'https://mcdavid.eu/cdn/shop/products/mcdavid-ankle-support-brace-with-straps-195-846141_720x.jpg'
        },
        {
            title: "Ankle support lace-up",
            SRP: 49.95,
            image: 'https://mcdavid.eu/cdn/shop/products/mcdavid-ankle-support-brace-lace-up-with-stays-199-466889.jpg'
        },
        {
            title: "Attack Thermal Jersey",
            SRP: 100.00,
            image: 'https://pearlizumi.eu/cdn/shop/products/pearl-izumi-attack-thermal-jersey-812201.jpg'
        },
        {
            title: "Womens Quest Thermal Jersey",
            SRP: 85.00,
            image: 'https://pearlizumi.eu/cdn/shop/products/pearl-izumi-womens-quest-thermal-jersey-812407.jpg'
        }
    ]
</script>

<section class="container mx-auto py-8">
    <h3 class="text-3xl mb-6">New product suggestions for you</h3>
    <div class="flex">

        {#each productSuggestions as productSuggestion}
        <a href="/" class="group text-sm w-1/4 p-1">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img src={productSuggestion.image} alt="White fabric pouch with white zipper, black zipper pull, and black elastic loop." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-4 font-medium">{productSuggestion.title}</h3>
          <p class="mt-2 font-medium">€ {productSuggestion.SRP}</p>
        </a>
        {/each}
</div>
</section>