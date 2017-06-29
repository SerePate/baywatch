const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  renderListItem(flick) {
    const item = document.createElement('div')
    item.textContent = flick.name

    const toFavorite = document.createElement('buttons')
    // toFavorite.document.addEventListener('fav', this.highlight.bind(this))

    const toDelete = document.createElement('buttons')
    // toDelete.document.addEventListener('delete', this.highlight.bind(this))

    const goUp = document.createElement('buttons')
    // goUp.document.addEventListener('up', this.highlight.bind(this))

    const goDown = document.createElement('buttons')
    // goDown.document.addEventListener('down', this.highlight.bind(this))



  },

  renderButtons(){
    
  }

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    this.flicks.push(flick.name)
  
    this.max ++
    
    
  },
  
  highlight(ev,flicks){ //when clicked, add a background color to the text
    ev.preventDefault()
    highlight 

  },
}


app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})