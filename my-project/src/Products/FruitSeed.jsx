import {} from "react"
function FruitSeed( {addNow,cart}) {
    const product=[
        {
            id:1,
            name:"BLACKBERRY FRUIT (15 Seeds)",
            url:"https://www.wairere.co.nz/images/13959627331.jpg",
            price:169,
            discount:200
            },
    {
        id:2,
        name:"Blueberry Bush Seeds(20 seeds)",
        url:"https://s3.amazonaws.com/mygardenlife.com/plant-library/full/7386_41.jpg",
        price:179,
        discount:240,

    },
    {
        id:3,
        name:"Rare Red Lemon Tree Seeds(1 pack)",
        url:"https://m.media-amazon.com/images/I/51NXPo-1HEL.jpg",
        price:149,
        discount:199

},
{
    id:4,
    name:"Dwarf Guava Fruit Seed (20 seeds)",
    url:"https://rukminim1.flixcart.com/image/832/832/k1gr2q80/plant-sapling/p/x/a/seedless-honey-guava-fruit-plant-thailand-variety-1-layering-original-imaff2fhzvjyy9yv.jpeg?q=70",
    price:80,
    discount:120,

},
{
    id:5,
    name:"Alpine Strawberry (20 Seeds)",
    url:"https://www.pomonafruits.co.uk/bmz_cache/f/f94efa46051f1b086f54a28d98143ae9.image.600x600.jpg",
    price:120,
    discount:160,

},
{
    id:6,
    name:"Papaya F1 Hybrid (15 Seeds)",
    url:"https://cdn.shopify.com/s/files/1/0920/8638/products/SarpanHybridPapaya-109_2048x2104.jpg?v=1609133997",
    price:110,
    discount:230,


},
{
    id:7,
    name:"Water Melon Green Hybrid(15 Seeds)",
    url:"https://i.pinimg.com/originals/87/1e/d8/871ed8df514bef764887f3a4b4731610.jpg",
    price:90,
    discount:110

},
{
    id:8,
    name:"Orange Tree Fruit Seeds(1 pack)",
    url:"https://m.media-amazon.com/images/I/61trVtRv30L.jpg",
    price:179,
    discount:209

},
{
  
    id:9,
    name:"Muskmelon Hybrid seeds(100 Gram)",
    url:"https://m.media-amazon.com/images/I/616DUolDmYL._AC_SL1000_.jpg",
    price:200,
    discount:240

},
{
    id:10,
    name:"3 Type of  Dragon Fruit(60 seeds)",
    url:"https://3.bp.blogspot.com/-47wnagdFFd0/W8JP5OyNmpI/AAAAAAAABRo/blTrVJIGFHwIi512oiFriM1GeO5Y6KNmQCLcBGAs/s640/1893957_120609094214_Thumbnail.jpg",
    price:220,
    discount:240

},
{
    id:11,
    name:"New Rare Hybrid Kiwi Fruit (20 Seeds)",
    url:"https://i.pinimg.com/originals/cc/31/49/cc31490f6e87144861a0d18353ec3bb0.jpg",
    price:60,
    discount:89

},
{
    id:12,
    name:"Combo Pack Apple,Grape,Guava",
    url:"https://m.media-amazon.com/images/I/81Y1BOYR1nL._SL1500_.jpg",
    price:150,
    discount:180
}

    ]
   
  return (
    <div className='text-center' >
    
    <h1 className='font-bold text-4xl mt-8'>
    
    Fruit Seeds Collection </h1>
   
     <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {product.map((product,index)=>{
      return(
        <div key={index}>
      
    <div className="rounded-md border">
      
       <img src={product.url} alt="" 
        className="rounded-lg object-cover  px-8 py-3 md:h-[280px] md:w-full lg:h-full transition-transform duration-300 transform hover:scale-110"
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
      <div>
        
      </div>
    </div>
 
  
  )
}

export default FruitSeed
