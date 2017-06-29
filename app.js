const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    let list = document.querySelectorAll('div')
    let flicks = Array.from(list)
    flicks.map((div)=>{
        div.textContent})

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  renderListItem(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name
    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    this.max ++
  },

  favButton(){
      const favorite = document.createElement('fav-flick-button')
      favorite.document.addEventListener('')
      
      
      

  }
}


app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})