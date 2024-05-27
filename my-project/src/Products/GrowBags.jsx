import {} from "react"
function GrowBags( {addNow,cart}) {
    const product=[
        {
            id:1,
            name:"HDPE Grow Bag Rectangular 18X12X9",
            url:"https://www.ulavaranand.in/product-images/24X12X12.jpg/1238206000000367270/400x400",
            price:60,
            discount:90
            },
    {
        id:2,
        name:" Flower Plants Pots 12*12 Grow Bag",
        url:"https://5.imimg.com/data5/ANDROID/Default/2022/11/ED/FD/YG/10310087/product-jpeg-500x500.jpg",
        price:80,
        discount:100,

    },
    {
        id:3,
        name:"HDPE Grow Bag 15X9 Inch",
        url:"https://th.bing.com/th/id/OIP.9YXt6dFF3WUMlURq-d1KXQAAAA?rs=1&pid=ImgDetMain",
        price:60,
        discount:80

},
{
    id:4,
    name:"Round White Printed LD Grow Bag",
    url:"https://www.santhionlineplants.com/wp-content/uploads/2021/06/White-Grow-bag-16-16-30-10-pcs.jpg",
    price:260,
    discount:300,

},
{
    id:5,
    name:"Mesh Shopping Tote Bag",
    url:"https://eccpromo.com/Uploads/60b8921f01f528642.jpg",
    price:120,
    discount:160,

},
{
    id:6,
    name:"Long Life Premium Colorful Dotted- 5 Qty Grow Bag",
    url:"https://rukminim2.flixcart.com/image/416/416/kl175ow0/grow-bag/x/u/7/t718-trustbasket-original-imagy8vyj2g2jbhe.jpeg?q=70&crop=false",
    price:210,
    discount:230,


},
{
    id:7,
    name:"Anandi Greens 18x18 Inch Pack of 8 HDPE Uv Protected 260 GSM, Round Green Color, for Gardening Grow Bag",
    url:"https://5.imimg.com/data5/SELLER/Default/2021/8/DA/BQ/SU/115913128/pack-of-5-500x500.png",
    price:190,
    discount:210

},
{
    id:8,
    name:"HDPE Grow Bag 12X8 inch",
    url:"https://intipanta.com/wp-content/uploads/2020/02/HDPE-18x9-Grow-Bag.jpg",
    price:70,
    discount:90

},
{
    id:9,
    name:"HDPE Grow Bag 12X24 inch",
    url:"https://seed2plant.in/cdn/shop/products/12x24.png?v=1617097821",
    price:110,
    discount:150

},
{
    id:10,
    name:"Vegetables Carry Cloth Bag",
    url:"https://th.bing.com/th/id/OIP.pJh4weYqJBpm-IVTt3xCxQHaHa?rs=1&pid=ImgDetMain",
    price:220,
    discount:240

},
{
    id:11,
    name:"Home Gardening Kit - Free Delivery",
    url:"https://anoregoncottage.com/wp-content/uploads/2019/12/top-gardening-tools_650x650.jpg",
    price:3000,
    discount:3300

},
{
    id:12,
    name:"Vegetables Carry Cloth Bag",
    url:"https://th.bing.com/th/id/OIP.DzjYUH9n4tLUfn6_KCPMFQHaHa?rs=1&pid=ImgDetMain",
    price:150,
    discount:180
},


    ]

         
    
  return (
    <div className='text-center' >
    
    <h1 className='font-bold text-4xl mt-8'>
    
    Grow Bags Collection </h1>
   
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
    
    </div>
 
  
  )
}

export default GrowBags
