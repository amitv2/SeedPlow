import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home({ addNow, cart }) {
  useEffect(() => {
    const slider = new Glide(".glide-04 ", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-black",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  const product = [
    {
      id: 3,
      name: "Vegetable seeds kit pack of 12",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/Kits/Vegetable-Kit-460x460-0.jpg",
      price: 589,
      discount: 600,
    },
    {
      id: 2,
      name: "Onion Red Seed (100 Grms)",
      url: "https://assets.mitre10.co.nz/sys-master/productimages/h71/h53/9197611188254/137823xlg.jpg",
      price: 79,
      discount: 119,
    },
    {
      id: 3,
      name: "Ridge Gourd Non-Hybrid (100 Gram)",
      url: "https://i.ebayimg.com/images/g/pkcAAOSw-wtigIzh/s-l500.jpg",
      price: 405,
      discount: 469,
    },
    {
      id: 4,
      name: "Zucchini Summer Squash(100 Grms)",
      url: "https://www.highmowingseeds.com/media/catalog/product/cache/47e325b677851f562e223168f21f4516/2/8/2892.jpg",
      price: 119,
      discount: 149,
    },

    {
      id: 5,
      name: "Broccoli (200gm Seeds)",
      url: "https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/dGUAAOSwLDtfQw9F/$_57.PNG?set_id=8800005007",
      price: 200,
      discount: 230,
    },
    {
      id: 6,
      name: "Lettuce Iceberg (200gm Seeds)",
      url: "https://down-th.img.susercontent.com/file/2ee0c92a9e0b5eba8cc948ac5c21d129",
      price: 180,
      discount: 200,
    },
    {
      id: 7,
      name: "Herb Parsley (100gm Seeds)",
      url: "https://images.labroots.com/content_article_profile_image_05984f6ba56d03afb205f6ab7bd32042f00b4bb0_5619.png",
      price: 100,
      discount: 130,
    },
    {
      id: 8,
      name: "Curly Kale (50gm Seeds)",
      url: "https://th.bing.com/th/id/OIP.vsgSyWkWJJgfkfTbYUkT_wAAAA?rs=1&pid=ImgDetMain:",
      price: 90,
      discount: 120,
    },
    {
      id: 9,
      name: "Bhendi Non Hybrid (100gm Seeds)",
      url: "https://tiimg.tistatic.com/fp/1/007/612/hybrid-lady-finger-seeds-good-source-of-vitamin-c-folate-and-fiber-494.jpg",
      price: 120,
      discount: 150,
    },
    {
      id: 10,
      name: "Asparagus (100gm Seeds)",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/Exotic/Asparagus-460x460-0.png",
      price: 250,
      discount: 290,
    },
    {
      id: 11,
      name: "Red Okra Hybrid (100gm Seeds)",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/Hybrid/red-okra-460x460-0.png",
      price: 150,
      discount: 190,
    },
    {
      id: 12,
      name: "Herb Thyme Seeds (100 Grms)",
      url: "https://i.etsystatic.com/28492847/r/il/f81fce/3154938436/il_500x500.3154938436_mm44.jpg",
      price: 145,
      discount: 190,
    },
    {
      id: 13,
      name: "Microgreen Mustard Seeds(100 Grms)",
      url: "https://i5.walmartimages.com/asr/b0b7d5fe-3ee6-4d45-821b-4aee37e643c4.2444dff24fd83d465ce2e0bfd1b031ac.jpeg",
      price: 100,
      discount: 129,
    },
    {
      id: 14,
      name: "Microgreens Growing Kit Pack of 2",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Microgreen-growing-kit-mini-228x228-0.png",
      price: 405,
      discount: 469,
    },
    {
      id: 15,
      name: "Microgreens Growing Kit Pack-5",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Microgreen-growing-kit-pack5-460x460-0.png",
      price: 850,
      discount: 980,
    },
    {
      id: 4,
      name: "Microgreen Black Wheat Grass Seeds(100 Grams)",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/MicroGreens/Black-Wheat-Grass-Seeds-460x460-0.png",
      price: 140,
      discount: 165,
    },
    {
      id: 17,
      name: "Antirrhinum Tomb Thumb Mix",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/Flowers/antirrhinum-majus-maximum-460x460-0.jpg",
      price: 220,
      discount: 240,
    },

    {
      id: 18,
      name: "Dahila Figaro Mixed(50gm Seeds)",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/Flowers/Dahila-Figaro-Mixed-500x500-0.jpg",
      price: 250,
      discount: 290,
    },
    {
      id: 19,
      name: "Chrysanthemum carinatum",
      url: "https://www.seedbasket.in/image/cache/catalog/Products/Flowers/chrysantemum-carinatum-460x460-0.jpg",
      price: 150,
      discount: 190,
    },
    {
      id: 20,
      name: "Coleus Rainbow Mixed (50gm seeds)",
      url: "https://i.ebayimg.com/images/g/yxQAAOSwoexfxF30/s-l400.jpg",
      price: 200,
      discount: 220,
    },
    {
      id: 21,
      name: "Vegetables Carry Cloth Bag",
      url: "https://th.bing.com/th/id/OIP.pJh4weYqJBpm-IVTt3xCxQHaHa?rs=1&pid=ImgDetMain",
      price: 220,
      discount: 240,
    },
    {
      id: 22,
      name: "Home Gardening Kit - Free Delivery",
      url: "https://anoregoncottage.com/wp-content/uploads/2019/12/top-gardening-tools_650x650.jpg",
      price: 3000,
      discount: 3300,
    },
    {
      id: 23,
      name: "Vegetables Carry Cloth Bag",
      url: "https://th.bing.com/th/id/OIP.DzjYUH9n4tLUfn6_KCPMFQHaHa?rs=1&pid=ImgDetMain",
      price: 150,
      discount: 180,
    },
    {
      id: 4,
      name: "Round White Printed LD Grow Bag",
      url: "https://www.santhionlineplants.com/wp-content/uploads/2021/06/White-Grow-bag-16-16-30-10-pcs.jpg",
      price: 260,
      discount: 300,
    },

    {
      id: 25,
      name: "BLACKBERRY FRUIT (15 Seeds)",
      url: "https://www.wairere.co.nz/images/13959627331.jpg",
      price: 169,
      discount: 200,
    },
    {
      id: 26,
      name: "Blueberry Bush Seeds(20 seeds)",
      url: "https://s3.amazonaws.com/mygardenlife.com/plant-library/full/7386_41.jpg",
      price: 179,
      discount: 240,
    },
    {
      id: 27,
      name: "Rare Red Lemon Tree Seeds(1 pack)",
      url: "https://m.media-amazon.com/images/I/51NXPo-1HEL.jpg",
      price: 149,
      discount: 199,
    },
    {
      id: 28,
      name: "Dwarf Guava Fruit Seed (20 seeds)",
      url: "https://rukminim1.flixcart.com/image/832/832/k1gr2q80/plant-sapling/p/x/a/seedless-honey-guava-fruit-plant-thailand-variety-1-layering-original-imaff2fhzvjyy9yv.jpeg?q=70",
      price: 80,
      discount: 120,
    },
  ];
  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}

      <div className="relative mx-auto max-w-7xl glide-04 items-center mt-8">
        {/*    <!-- Slides --> */}
        <div
          className="overflow-hidden rounded-xl h-[430px]"
          data-glide-el="track"
        >
          <ul className=" [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="src/images/bg2.png"
                className="w-full h-[430px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://www.gardenmart4u.com/image/gardenmart4u/image/cache/data/banner/1KgEN7Io1683003793-1201x601.png"
                className="w-full h-[430px] m-auto"
              />
            </li>
            <li>
              <img
                src="https://www.seedbasket.in/image/cache/catalog/Home-Sliders/HS11-1130x360-0.jpg"
                className="w-full h-[430px] object-cover bg-no-repeat m-auto"
              />
            </li>
            <li>
              <img
                src="src/images/bg3.jpg"
                className="w-full h-[430px] object-cover bg-no-repeat  m-auto"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>

        {/*    <!-- Indicators --> */}
        <div
          className="flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-blackfocus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold p-1">All Seeds Collection</h1>

        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-6 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {product.map((product, index) => {
            return (
              <div key={index}>
                <div className="rounded-md border">
                  <img
                    src={product.url}
                    alt=""
                    className="rounded-lg object-cover  px-8 py-3 md:h-[280px] transition-transform duration-300 transform hover:scale-110 "
                  />
                  <div className="p-2.5">
                    <h1 className="inline-flex text-gray-700 text-md font-semibold">
                      {product.name}
                    </h1>
                  </div>
                  <div className="p-2.5">
                    <p className="text-xl font-bold">
                      ₹ {product.price}{" "}
                      <span className="ml-6 text-red-500 line-through">
                        ₹{product.discount}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      addNow(product, product.name, product.url, product.price)
                    }
                    type="button"
                    className="mt-4 w-full rounded-lg  bg-green-600 py-2 text-lg font-semibold text-white shadow-sm 
           hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-2xl font-bold p-3 text-balance">
            Grow All Seeds in your garden with the best quality of Seeds
          </h3>
          <p className="text-lg font-medium p-3 text-balance">
            Vegetables that are not originally originated at native place are
            called Exotic . Before, native vegetable, friut and flowers were
            given more preference as it was considered more healthy. Whereas, as
            time lapsed exotic,microgreen,herbal vegetables became more
            prominent and demanded more in local cuisines. In India, exotic
            vegetables have turned out to be an integral part of the past few
            decades and one can buy exotic,microgreen,herbal seeds online in
            India easily now.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
