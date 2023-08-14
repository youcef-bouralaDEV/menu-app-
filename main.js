const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "images/breakfast.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "images/lunch.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/shake.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "images/breakfast2.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "images/lunch2.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/shake2.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "images/breakfast3.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "images/lunch.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "images/shake3.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "images/dinner.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
let container = document.querySelector(".btn-container");
let sectionCenter =document.querySelector(".section-center") ;





window.addEventListener("DOMContentLoaded",function(){
  displayMenu(menu);
  displayMenuButtons()
})

function displayMenuButtons() {
  let catigories = menu.reduce(function(values,item){
    if(!values.includes(item.category)){
      values.push(item.category)
        }
        return values
      },["all"])
      const categoryBtn = catigories.map(function(category){
        return `<button class="filter-btn" type="button" 
        data-id=${category}>${category}</button>` ;
      }).join("")
      container.innerHTML = categoryBtn ; 

      const filterbtn = document.querySelectorAll(".filter-btn");
      
      filterbtn.forEach(function(btn){
        btn.addEventListener("click" ,function(e){
          let catigory = e.currentTarget.dataset.id ;
          let menuCatigory = menu.filter(function(menuItem){
            if(catigory === menuItem.category){
              return menuItem ;
            }
            console.log(menuItem);
          });      
          if(catigory === "all"){
           displayMenu(menu);
          }else {
           displayMenu(menuCatigory)
          }
        });
      });
 }









function displayMenu(menu) {
  let menuDetails = menu.map(function(menu){
    return `<article class="menu-item">
                <img src="${menu.img}" alt="menu item" class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${menu.title}</h4>
                        <h4 class="price">${menu.price}</h4>
                    </header>
                    <p class="item-text">
                       ${menu.desc}
                    </p>
                </div>
            </article>`

              }).join("")
             
              sectionCenter.innerHTML = menuDetails
  
}

console.log(displayMenu)


































// const sectionCentre = document.querySelector(".section-center");
// const container = document.querySelector(".btn-container");

// window.addEventListener("DOMContentLoaded" ,function(){
//   displayMenuItem(menu);
//   displayMenuButtons() ;
  
  
// });
// function displayMenuButtons() {
//   let catigories = menu.reduce(function(values,item){
//     if(!values.includes(item.category)){
//       values.push(item.category)
//         }
//         return values
//       },["all"])
//       const categoryBtn = catigories.map(function(category){
//         return `<button class="filter-btn" type="button" 
//         data-id=${category}>${category}</button>` ;
//       }).join("")
//       container.innerHTML = categoryBtn ; 

//       const filterbtn = document.querySelectorAll(".filter-btn");
      
//       filterbtn.forEach(function(btn){
//         btn.addEventListener("click" ,function(e){
//           let catigory = e.currentTarget.dataset.id ;
//           let menuCatigory = menu.filter(function(menuItem){
//             if(catigory === menuItem.category){
//               return menuItem ;
//             }
//             console.log(menuItem);
//           });      
//           if(catigory === "all"){
//            displayMenuItem(menu);
//           }else {
//            displayMenuItem(menuCatigory)
//           }
//         });
//       });
//  }

// function displayMenuItem (menu) {
//     let displayMenu = menu.map(function(item){
//     return ` <article class="menu-item">
//                 <img src=${item.img} alt="menu item" class="photo" />
//                 <div class="item-info">
//                     <header>
//                         <h4>${item.title}</h4>
//                         <h4 class="price">${item.price }</h4>
//                     </header>
//                     <p class="item-text">
//                       ${item.desc}
//                     </p>
//                 </div>
//             </article>` ;
//   }).join("")
// sectionCentre.innerHTML =displayMenu;
// }

