import {} from "react"
function Herbal( {addNow,cart}) {
    const product=[
        {
            id:1,
            name:"Herb Basil Green Seeds(100 Gram)",
            url:"https://5.imimg.com/data5/DJ/JU/TT/SELLER-74431776/besil-500x500.jpg",
            price:120,
            discount:140
            },
    {
        id:2,
        name:"Herb Lemon Balm Seeds (100 Grms)",
        url:"https://www.seedbasket.in/image/cache/catalog/Products/Herbs/lemon-balm-500x500-0.jpg",
        price:180,
        discount:220,

    },
    {
        id:3,
        name:"Herb Lavender Seeds(100 Grams)",
        url:"https://th.bing.com/th/id/OIP.Hm5pAP5W9SbVPcfrHhVQewHaHc?w=1074&h=1080&rs=1&pid=ImgDetMain",
        price:149,
        discount:199

},
{
    id:4,
    name:"Herb Lemon Grass seeds (100 Gram)",
    url:"https://i.etsystatic.com/20994514/r/il/a152e7/2403791369/il_570xN.2403791369_khfg.jpg",
    price:100,
    discount:145,

},
{
    id:5,
    name:"Herb Sage Seeds (100 Gram)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Herbs/Sage-460x460-0.jpg",
    price:159,
    discount:200,

},
{
    id:6,
    name:"Dill(Soya) Seeds  (100 Grms)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Herbs/Dill-500x500-0.jpeg",
    price:129,
    discount:169,
 

},
{
    id:7,
    name:"Herb Krishna Tulasi Seeds(100 gram)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Herbs/Kirshna-Tulasi-460x460-0.jpg",
    price:169,
    discount:200

},
{
    id:8,
    name:"Herb Pepper Mint  Seeds (100 Grms)",
    url:"https://bibitonline.com/wp-content/uploads/Benih-Herb-Peppermint-50-Biji-%E2%80%93-Haira-Seed.jpeg",
    price:160,
    discount:189

},
{
  
    id:9,
    name:"Herb Thyme Seeds (100 Grms)",
    url:"https://i.etsystatic.com/28492847/r/il/f81fce/3154938436/il_500x500.3154938436_mm44.jpg",
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

export default Herbal
