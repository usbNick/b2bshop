<script>
    let products = [
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
        },
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

<div class="">
    
    <div class="mx-auto container overflow-hidden px-1 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 class="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Shop</h1>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-2">
        {#each products as product}
        <a href="/" class="group text-sm">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img src={product.image} alt="White fabric pouch with white zipper, black zipper pull, and black elastic loop." class="h-full w-full object-cover object-center">
          </div>
          <h3 class="mt-4 font-medium">{product.title}</h3>
          <p class="mt-2 font-medium">€ {product.SRP}</p>
        </a>
        {/each}


  
        <!-- More products... -->
      </div>
    </div>
  </div>