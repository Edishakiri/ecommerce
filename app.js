const wrapper  = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
  {
    id: 1,
    title: "12 cm",
    price: "199 zł",
    colors: [
      {
        code: "pink",
        img: "./image/roz.jpg",
      },
      {
        code: "silver",
        img: "./image/srebrne.jpg",
      },
       {
        code: "black",
        img: "./image/czarne_tekstylne.jpg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "11.5 cm",
  //   price: "146 zł",
  //   colors: [
     
     
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "11 cm",
  //   price: "149 zł",
  //   colors: [
  //     {
  //       code: "pink",
  //       img: "./image/roz_zamsz.jpg",
  //     },
      
  //   ],
  // },
  {
    id: 4,
    title: "11.5 cm",
    price: "169 zł",
    colors: [
      {
        code: "aliceblue",
        img: "./image/bez_eko.jpg",
      },
      {
        code: "black",
        img: "./image/brokatowe.jpg",
      },
      {
        code: "yellow",
        img: "./image/kanarkowe.jpg",
      },
     
      
    ],
  },
  {
    id: 5,
    title: "11 cm",
    price: "139 zł",
    colors: [
      {
        code: "red",
        img: "./image/czerwone.jpg",
      },
       {
        code: "black",
        img: "./image/czarne_zamsz.jpg",
      },
       {
        code: "green",
        img: "./image/kolorowe.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "10.5 cm",
    price: "129 zł",
    colors: [
      {
        code: "pink",
        img: "./image/zamsz.jpg",
      },
      {
        code: "gray",
        img: "./image/szare.jpg",
      },
      {
        code: "black",
        img: "./image/kratka.jpg",
      },
    ],
  },
];


let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=> {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the choosen product 
        choosenProduct = products[index]

        //change texts of curentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new colors
        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code 
        })
    });
});

currentProductColors.forEach((color, index) =>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click", ()=>{
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white"
    size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click", () =>{
  payment.style.display = "flex"
})


close.addEventListener("click", () =>{
  payment.style.display = "none"
})