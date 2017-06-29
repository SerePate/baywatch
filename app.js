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

  toFavorite(flick,ev){
    const listItem = ev.target.closest('.flick')
    flick.fav = !flick.fav

    if(flick.fav){
      listItem.classList.add('fav')
    }
    else{
      listItem.classList.remove('fav')
    }
  },


  renderListItem(flick) {
    const item = document.createElement('div')
    item.dataset.id=flick.id
    
    item
      .querySelector('.flick-name')
      .textContent = flick.name

    item
      .querySelector("button.fav")
      .addEventListener(
        'click',
        this.toFavorite.bind(this,flick)
      )

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

    this.flicks.push(flick.name)
  
    this.max ++
    
    
  },
  
  highlight(ev,flicks){ //when clicked, add a background color to the text
     ev.preventDefault()
     

   },


 }


app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})