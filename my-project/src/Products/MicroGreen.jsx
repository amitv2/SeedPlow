
import {} from "react"

function MicroGreen( {addNow,cart }) {
  
    const product=[
        {
            id:1,
            name:"Radish White Round Organic seed(100 Gram)",
            url:"https://th.bing.com/th/id/OIP.RU_rEIx7wpPm2T1VhmducgHaHa?rs=1&pid=ImgDetMain",
            price:120,
            discount:140
            },
    {
        id:2,
        name:"Microgreen Methi Organic Seeds (100 Grms)",
        url:"https://nurserylive.com/cdn/shop/products/nurserylive-methi-shalimar-improved-organic-microgreen-seeds_600x600.jpg?v=1634204343",
        price:140,
        discount:160,

    },
    {
        id:3,
        name:"Microgreen Wheat Grass Seeds(100 Grams)",
        url:"https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Wheat-Seeds-460x460-0.jpg",
        price:100,
        discount:140

},
{
    id:4,
    name:"Microgreen Black Wheat Grass Seeds(100 Grams)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Black-Wheat-Grass-Seeds-460x460-0.png",
    price:140,
    discount:165,

},
{
    id:5,
    name:"Spinach - Organic Microgreen Seeds (100 Gram)",
    url:"https://nurserylive.com/cdn/shop/products/nurserylive-spinach-organic-microgreen-seeds_600x600.jpg?v=1634204873",
    price:110,
    discount:135,

},
{
    id:6,
    name:"Microgreen Red Onion Organic Seeds  (100 Grms)",
    url:"https://images.squarespace-cdn.com/content/v1/5c744df365a7071265a1d9bc/1556545976895-4OMBQFW6VCPLMVIZL2OW/4-29-19.jpg?format=500w",
    price:189,
    discount:230,


},
{
    id:7,
    name:"Radish Sango Red Microgreen Seeds(100 gram)",
    url:"https://plantic.in/pimg/pl-mg-radish-sango-purple-leaf-sprouting/pl-mg-radish-sango-purple-leaf-sprouting1.png",
    price:90,
    discount:110

},
{
    id:8,
    name:"Microgreen Green Peas Seeds (100 Grms)",
    url:"https://www.bolster.eu/media/images/9036-web-32.jpg?1625150345",
    price:119,
    discount:150

},
{
  
    id:9,
    name:"Microgreen Carrot Seeds (100 Grms)",
    url:"https://cdn.shopify.com/s/files/1/0284/2450/products/carrots_micros-1_1600x.jpg?v=1623326247",
    price:145,
    discount:190

},
{
    id:10,
    name:"Microgreen Mustard Seeds(100 Grms)",
    url:"https://i5.walmartimages.com/asr/b0b7d5fe-3ee6-4d45-821b-4aee37e643c4.2444dff24fd83d465ce2e0bfd1b031ac.jpeg",
    price:100,
    discount:129

},
{
    id:11,
    name:"Microgreens Growing Kit Pack of 2",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Microgreen-growing-kit-mini-228x228-0.png",
    price:405,
    discount:469

},
{
    id:12,
    name:"Microgreens Growing Kit Pack-5",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Microgreen-growing-kit-pack5-460x460-0.png",
    price:850,
    discount:980
}

    ]
   
  return (
    <div className='text-center' >
    
    <h1 className='font-bold text-4xl mt-8'>
    
   Microgreen Seeds Collection </h1>
   
     <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
    {product.map((product,index)=>{
      return(
        <div key={index}>
      
    <div className="rounded-md border">
      
       <img src={product.url} alt="" 
        className="rounded-lg object-cover  px-8 py-3 md:h-[280px] md:w-full lg:h-full transition-shadow transition-transform duration-300 transform hover:scale-110"

      />
      <div className="p-2.5">
        <h1 className="inline-flex text-gray-700 text-md font-semibold">
        {product.name}
        </h1>
        </div>
        <div className='p-2.5'>
        <p className='text-xl font-bold'>₹ {product.price} <span className='ml-6 text-red-500 line-through'>₹{product.discount}</span></p>
        </div>
    
        <button onClick={()=> addNow(product,product.name,product.url,product.price)}
          type="button"
          className="mt-4 w-full rounded-lg  bg-green-600 px-2.5 py-2 text-lg font-semibold text-white shadow-sm 
           hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
         
        </button>
      </div>
     
    </div>
    
    )
    })}
    
      </div>
     
    </div>
 
  
  )
}

export default MicroGreen
