import {} from "react"
function Vegetable( {addNow,cart}) {
    const product=[
        {
            id:1,
            name:"Brinjal Purple Seeds(100 Gram)",
            url:"https://i.etsystatic.com/5423753/c/271/215/0/54/il/8d2ee4/2804116408/il_500x500.2804116408_5vqi.jpg",
            price:120,
            discount:140
            },
    {
        id:2,
        name:"Pumpkin Seed (100 Grms)",
        url:"https://5.imimg.com/data5/AB/KL/MY-284183/pumpkin-seed-oil.jpg",
        price:139,
        discount:179,

    },
    {
        id:3,
        name:"Vegetable seeds kit pack of 12",
        url:"https://www.seedbasket.in/image/cache/catalog/Products/Kits/Vegetable-Kit-460x460-0.jpg",
        price:589,
        discount:600

},
{
    id:4,
    name:"Bitter Gourd Green Seeds (100 Gram)",
    url:"https://tiimg.tistatic.com/fp/1/007/108/healthy-and-natural-fresh-bitter-gourd-887.jpg",
    price:149,
    discount:199,

},
{
    id:5,
    name:"Bottle Gourd Non-Hybrid (100 Gram)",
    url:"https://5.imimg.com/data5/BO/NK/MY-1877906/broweb-10-500x500.jpg",
    price:159,
    discount:200,

},
{
    id:6,
    name:"Gangavalli/Purslane leaves(100 Gram)",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Gangavayalu-Seeds-500x500-0.jpg",
    price:99,
    discount:129,
 

},
{
    id:7,
    name:"Chili F1 Hybrid Seeds(100 gram)",
    url:"https://5.imimg.com/data5/QJ/PB/MY-11338260/hy-chilly-swati-1978-500x500.png",
    price:200,
    discount:250

},
{
    id:8,
    name:"Microgreen Seeds Pack of 5 Seeds",
    url:"https://www.seedbasket.in/image/cache/catalog/Products/Kits/Microgreens-460x460-0.jpeg",
    price:600,
    discount:799

},
{
  
    id:9,
    name:"Ash Gourd Seeds (100 Grms)",
    url:"https://images.bonanzastatic.com/afu/images/134e/0e9a/33d5_9840040055/il_fullxfull.2666749790_ravj.jpg",
    price:145,
    discount:190

},
{
    id:10,
    name:"Onion Red Seed (100 Grms)",
    url:"https://assets.mitre10.co.nz/sys-master/productimages/h71/h53/9197611188254/137823xlg.jpg",
    price:79,
    discount:119




},
{
    id:11,
    name:"Ridge Gourd Non-Hybrid (100 Gram)",
    url:"https://i.ebayimg.com/images/g/pkcAAOSw-wtigIzh/s-l500.jpg",
    price:405,
    discount:469

},
{
    id:12,
    name:"Zucchini Summer Squash(100 Grms)",
    url:"https://www.highmowingseeds.com/media/catalog/product/cache/47e325b677851f562e223168f21f4516/2/8/2892.jpg",
    price:119,
    discount:149
}

    ]
   
  return (
    <div className='text-center' >
    
    <h1 className='font-bold text-4xl mt-8'>
    
   Vegetables Seeds Collection</h1>
   
     <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {product.map((product,index)=>{
      return(
        <div key={index}>
      
    <div className="rounded-md border">
      
       <img src={product.url} alt="" 
        className="rounded-lg object-cover  px-8 py-3 md:h-[280px] md:w-full lg:h-full transition-transform duration-300 transform hover:scale-110"
      />
      <div className="p-2.5">
        <h1 className="inline-flex  text-blue-400 text-md font-semibold">
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

export default Vegetable