
import {} from 'react'

function Exotic( {addNow,cart}) {
   
   
  
    const product=[
        {
            id:1,
            name:"Broccoli (200gm Seeds)",
            url:"https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/dGUAAOSwLDtfQw9F/$_57.PNG?set_id=8800005007",
            price:200,
            discount:230
            },
    {
        id:2,
        name:"Lettuce Iceberg (200gm Seeds)",
        url:"https://down-th.img.susercontent.com/file/2ee0c92a9e0b5eba8cc948ac5c21d129",
        price:180,
        discount:200

    },
    {
        id:3,
        name:"Herb Parsley (100gm Seeds)",
        url:"https://images.labroots.com/content_article_profile_image_05984f6ba56d03afb205f6ab7bd32042f00b4bb0_5619.png",
        price:100,
        discount:130

},
{
    id:4,
    name:"Curly Kale (50gm Seeds)",
    url:"https://th.bing.com/th/id/OIP.vsgSyWkWJJgfkfTbYUkT_wAAAA?rs=1&pid=ImgDetMain:",
    price:90,
    discount:120,

},
{
    id:5,
    name:"Palak/Spinach (100gm Seeds)",
    url:"https://evegro.com/wp-content/uploads/2020/11/Spinach-300x300.jpg",
    price:110,
    discount:140,

},
{
    id:6,
    name:"Coriander (100gm Seeds)",
    url:"https://5.imimg.com/data5/WB/SL/MY-12565361/corriander-500x500.jpeg",
    price:60,
    discount:90,


},
{
    id:7,
    name:"Cherry Tomato  Hybrid (50gm seeds)",
    url:"https://th.bing.com/th/id/OIP.xEGYfjpoCMT8WYwfY0hIUAAAAA?rs=1&pid=ImgDetMain",
    price:100,
    discount:120

},
{
    id:8,
    name:"Capsicum Hybrid(50gm Seeds)",
    url:"https://i.pinimg.com/originals/e6/0d/a9/e60da93a7f8b34e4dc99c86cb2873a53.jpg",
    price:95,
    discount:110

},
{
    id:9,
    name:"Chinese Cabbage (100gm Seeds)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Exotic/chinesecabbage-500x500-0.jpg",
    price:140,
    discount:160

},
{
    id:10,
    name:"Bhendi Non Hybrid (100gm Seeds)",
    url:"https://tiimg.tistatic.com/fp/1/007/612/hybrid-lady-finger-seeds-good-source-of-vitamin-c-folate-and-fiber-494.jpg",
    price:120,
    discount:150

},
{
    id:11,
    name:"Asparagus (100gm Seeds)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Exotic/Asparagus-460x460-0.png",
    price:250,
    discount:290

},
{
    id:12,
    name:"Red Okra Hybrid (100gm Seeds)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Hybrid/red-okra-460x460-0.png",
    price:150,
    discount:190
}


    ]

        
    
  return (
    <div className='text-center' >
    
    <h1 className='font-bold text-4xl mt-8'>
    
    Exotic Seeds Collection </h1>
   
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
    
        <button onClick={()=> addNow(product,product.name,product.url,product.price,)}
          type="button"
          className="mt-4 w-1/2 rounded-lg  bg-green-600 px-2.5 py-2 text-lg font-semibold text-white shadow-sm 
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

export default Exotic
