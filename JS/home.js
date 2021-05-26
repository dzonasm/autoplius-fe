const body = document.querySelector('body')
const carMakeInput = document.querySelector("#carMakeInput");
const carModelInput = document.querySelector("#carModelInput");
const carPriceFromInput = document.querySelector("#carPriceFromInput");
const carPriceToInput = document.querySelector("#carPriceToInput");
const carYearFromInput = document.querySelector("#carYearFromInput");
const carYearToInput = document.querySelector("#carYearToInput");
const carMilageFromInput = document.querySelector("#carMilageFromInput");
const carMilageToInput = document.querySelector("#carMilageToInput");
const carSearchForm = document.querySelector("#carSearchForm");

// carSearchForm.addEventListener("submit", event => {
//   event.preventDefault();
//   console.log(carMakeInput.value);
//   console.log(carModelInput.value);
//   console.log(carPriceFromInput.value);
//   console.log(carPriceToInput.value);
//   console.log(carYearFromInput.value);
//   console.log(carYearToInput.value);
//   console.log(carMilageFromInput.value);
//   console.log(carMilageToInput.value);
// });



// ---Modal

// const modal = document.querySelectorAll('.card').forEach((el, index) => {
//   el.addEventListener('click', () => {

//     createModal()
//   })
// })


// const createModal = () => {
//   console.log('creating modal...')

//   //--- main container for bacground
//   const div = document.createElement('div')
//   div.classList.add('modal')

//   //--- container for modal
//   const div2 = document.createElement('div')
//   div2.classList.add('modal-container')
//   div.appendChild(div2)

//   //--- Close button
//   const div3 = document.createElement('div')
//   div.classList.add('t-right')
//   const i = document.createElement('i')
//   i.classList.add('far', 'fa-times-circle', 'fa-2x')
//   div3.appendChild(i)

//   //--- Title car modal
//   const div4 = document.createElement('div')
//   div4.classList.add('modal-title', 'ma-top', 't-center')
//   // div4.innerText = `${}`
//   div4.innerText = 'Supra'

//   // --- Div5 Img
//   const div5 = document.createElement('div')
//   div5.classList.add('modal-img', 'ma-top')
//   div5.appendChild(img)
//   const img = document.createElement('img')
//   img.src = ''

//   // --- Div6 car name and price
//   const div6 = document.createElement('div')
//   div6.classList.add('modal-info-1')

//   const div6innerDiv1 = document.createElement('div')
//   div6innerDiv1.classList.add('info-1-border')
//   const pCar = document.createElement('p')
//   // pCar.innerText = `${}`
//   pCar.innerText = 'Supra'
//   div6innerDiv1.appendChild(pCar)


//   const div6innerDiv2 = document.createElement('div')
//   div6innerDiv2.classList.add('info-1-border', 't-right')
//   const pPrice = document.createElement('p')
//   // p.innerText = `${}`
//   pPrice.innerText = '40 000e'
//   div6innerDiv2.appendChild(pPrice)


//   div6.appendChild(div6innerDiv1)
//   div6.appendChild(div6innerDiv2)

//   // --- Div7 car info
//   const div7 = document.createElement('div')
//   div7.classList.add('modal-info-2')

//   const div7innerDiv1 = document.createElement('div')
//   div7innerDiv1.classList.add('info-2-wrap')
//   const Div7Title = document.createElement('div')
//   Div7Title.classList.add('titles')
//   //-
//   const Div7TitleDiv1 = document.createElement('div')
//   Div7TitleDiv1.classList.add('ma-top')
//   // Div7TitleDiv1.innerText = `${}`
//   Div7TitleDiv1.innerText = 'Make'

//   const Div7TitleDiv2 = document.createElement('div')
//   Div7TitleDiv2.classList.add('ma-top')
//   // Div7TitleDiv1.innerText = `${}`
//   Div7TitleDiv2.innerText = 'Modal'

//   const Div7TitleDiv3 = document.createElement('div')
//   Div7TitleDiv3.classList.add('ma-top')
//   // Div7TitleDiv1.innerText = `${}`
//   Div7TitleDiv3.innerText = 'Year'

//   const Div7TitleDiv4 = document.createElement('div')
//   Div7TitleDiv4.classList.add('ma-top')
//   // Div7TitleDiv1.innerText = `${}`
//   Div7TitleDiv4.innerText = 'Year'




//   Div7Title.appendChild(Div7TitleDiv1)
//   Div7Title.appendChild(Div7TitleDiv2)
//   Div7Title.appendChild(Div7TitleDiv3)
//   Div7Title.appendChild(Div7TitleDiv4)

//   div7innerDiv1.appendChild(Div7Title)
//   div7innerDiv1.appendChild(Div7Info)

//   const div7innerDiv2 = document.createElement('div')
//   div7innerDiv2.classList.add('info-2-wrap')



//   div7.appendChild(div7innerDiv1)
//   div7.appendChild(div7innerDiv2)




//   div2.appendChild(div3)
//   div2.appendChild(div4)
//   div2.appendChild(div5)
//   div2.appendChild(div6)
//   div2.appendChild(div7)



//   body.appendChild(div)
// }




// function getAllCars (){}