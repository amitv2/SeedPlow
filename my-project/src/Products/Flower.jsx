import { } from "react"
function Flower( {addNow,cart}) {
  
    const product=[
        {
            id:1,
            name:"Marigold White African (50gm Seeds)",
            url:"https://i.ebayimg.com/images/g/HCUAAOSwwzhhOlYh/s-l400.jpg",
            price:250,
            discount:280
            },
    {
        id:2,
        name:"Marigold Yellow  (50gm Seeds)",
        url:"https://cdn.shopify.com/s/files/1/1537/5553/products/02514_1024x1024.jpg?v=1486442250",
        price:250,
        discount:280,

    },
    {
        id:3,
        name:"Rudbeckia Dwarf Mixed(50gm Seeds)",
        url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/All%20Seasons/rudbeckia-500x500-0.jpg",
        price:230,
        discount:260

},
{
    id:4,
    name:"Cosmos Mixed Flower (50gm Seeds)",
    url:"https://m.media-amazon.com/images/I/61Idl2XDA8L._SY450_.jpg",
    price:260,
    discount:300,

},
{
    id:5,
    name:"Marigold African Mix Seeds",
    url:"https://5.imimg.com/data5/BX/LF/TB/SELLER-3629151/marigold-flower-plant-500x500.jpg",
    price:200,
    discount:220,

},
{
    id:6,
    name:"Zinnia Orange King",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/All%20Seasons/Orange-zinnia-seeds-500x500-0.jpg",
    price:210,
    discount:230,


},
{
    id:7,
    name:"Portulaca DoubleMixed(50gm Seeds)",
    url:"https://balconygardenweb.b-cdn.net/wp-content/uploads/2022/09/moss-roses-300x300.jpg",
    price:190,
    discount:210

},
{
    id:8,
    name:"Sunflower (50gm Seeds)",
    url:"https://th.bing.com/th/id/OIP.1t7U76L6LALIcwE20CecagHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
    price:160,
    discount:190

},
{
    id:9,
    name:"Coleus Rainbow Mixed (50gm seeds)",
    url:"https://i.ebayimg.com/images/g/yxQAAOSwoexfxF30/s-l400.jpg",
    price:200,
    discount:220

},
{
    id:10,
    name:"Antirrhinum Tomb Thumb Mix",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/antirrhinum-majus-maximum-460x460-0.jpg",
    price:220,
    discount:240

},
{
    id:11,
    name:"Dahila Figaro Mixed(50gm Seeds)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/Dahila-Figaro-Mixed-500x500-0.jpg",
    price:250,
    discount:290

},
{
    id:12,
    name:"Chrysanthemum carinatum",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/chrysantemum-carinatum-460x460-0.jpg",
    price:150,
    discount:190
},
{
  id:9,
  name:"Coleus Rainbow Mixed (50gm seeds)",
  url:"https://i.ebayimg.com/images/g/yxQAAOSwoexfxF30/s-l400.jpg",
  price:200,
  discount:220

},
{
  id:10,
  name:"Antirrhinum Tomb Thumb Mix",
  url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/antirrhinum-majus-maximum-460x460-0.jpg",
  price:220,
  discount:240

},
{
  id:11,
  name:"Dahila Figaro Mixed(50gm Seeds)",
  url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/Dahila-Figaro-Mixed-500x500-0.jpg",
  price:250,
  discount:290

},
{
  id:12,
  name:"Chrysanthemum carinatum",
  url:"https://www.seedbasket.in/image/cache/catalog/Products/Flowers/chrysantemum-carinatum-460x460-0.jpg",
  price:150,
  discount:190
},




    ]

        
    
  return (
    <div className='text-center' >
    
    <h1 className='font-bold text-4xl mt-8'>
    
    All Seasonal Flower Seeds Collection </h1>
   
     <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {product.map((product,index)=>{
      return(
        <div key={index}>
      
    <div className="rounded-md border">
      
       <img src={product.url} alt="" 
        className="rounded-lg object-cover  px-8 py-3 md:h-[280px] md:w-full lg:h-full transition-transform duration-300 transform hover:scale-110" 
      />
      <div className="p-2.5">
        <h1 className="inline-flex   text-gray-700 text-md font-semibold">
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
          AddtoCart
         
        </button>
      </div>
     
    </div>
    
    )
    })}
    
      </div>
      
    </div>
 
  
  )
}

export default Flower
