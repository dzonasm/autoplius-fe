
const modal = document.querySelectorAll('.img-container img').forEach((el, index) => {
  el.addEventListener('click', () => {

    createModal(el)

    //First creating element then adding selector to element btn
    const closeBtn = document.querySelector('.t-right i')


    closeBtn.addEventListener('click', () => {
      document.querySelector('.modal-model').remove()
    })
  })
})

const createModal = (el) => {
  const div = document.createElement('div')
  div.classList.add('modal-model')

  div.innerHTML = `
  <div class="modal">
  <div class="modal-container">

      <div class="t-right">
          <i class="far fa-times-circle fa-2x"></i>
      </div>

      <div class="modal-title ma-top t-center">Supra</div>

      <div class="modal-img ma-top ">
          <img src=${el.target.src} alt="">
      </div>

      <div class="modal-info-1">
          <div class="info-1-border">
              <p>Toyota Supra</p>
          </div>
          <div class="info-1-border t-right">
              <p>40 000 e</p>
          </div>
      </div>

      <div class="modal-info-2">
          <div class="info-2-wrap">
              <div class="titles">
                  <div class="ma-top">Make</div>
                  <div class="ma-top">Modal</div>
                  <div class="ma-top">Year</div>
                  <div class="ma-top">Milage</div>
              </div>
              <div class="title-info ma-left">
                  <div class="ma-top">-----</div>
                  <div class="ma-top">Supra</div>
                  <div class="ma-top">iki baznycios km</div>
                  <div class="ma-top">1991 m</div>
              </div>
          </div>
          <div class="info-2-wrap">next flex div</div>
       </div>

  </div>
</div>
  `
  body.appendChild(div)
}

