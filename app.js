const menu =[
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "Qui elit sint ea Lorem.Sint exercitation cupidatat amet officia nostrud dolore pariatur sint veniam occaecat ex consectetur enim.",
},
{
  id: 2,
  title: 'diner double',
  category: 'lunch',
  price: 13.99,
  img: './images/item-2.jpeg',
  desc: 'In minim sint est in laborum sunt enim.Eu cupidatat aliqua nisi id cupidatat cillum cupidatat esse culpa.',
},
{
  id: 3,
  title: 'godzilla milkshake',
  category: 'shakes',
  price: 6.99,
  img: './images/item-3.jpeg',
  desc: 'Minim est in nostrud aute ipsum dolore consequat consectetur.Veniam labore dolore proident consectetur mollit proident eu eiusmod commodo quis laborum aliqua ullamco.',
},
{
  id: 4,
  title: 'country delight',
  category: 'breakfast',
  price: 20.99,
  img: './images/item-4.jpeg',
  desc: 'Sint ex eu id sunt duis dolor aliqua veniam reprehenderit nisi ad.Eu consectetur laborum exercitation quis fugiat velit.',
},
{
  id: 5,
  title: 'egg attack',
  category: 'lunch',
  price: 22.99,
  img: './images/item-5.jpeg',
  desc: 'Irure cupidatat ut esse irure voluptate anim esse aute et ipsum id sit nulla.Proident non culpa nostrud consequat aliqua et ex nostrud nostrud proident nostrud aliquip cillum.',
},
{
  id: 6,
  title: 'oreo dream',
  category: 'shakes',
  price: 18.99,
  img: './images/item-6.jpeg',
  desc: 'Et sit ullamco magna dolore laboris aliqua dolor fugiat nisi tempor est mollit.Adipisicing nisi consectetur minim sit elit fugiat laboris qui in.',
},
{
  id: 7,
  title: 'bacon overflow',
  category: 'breakfast',
  price: 8.99,
  img: './images/item-7.jpeg',
  desc: 'Enim Lorem nisi in ipsum eu sint ea quis labore magna velit aute dolor cupidatat.Excepteur occaecat minim culpa sint occaecat consectetur.',
},
{
  id: 8,
  title: 'american classic',
  category: 'lunch',
  price: 9.99,
  img: './images/item-8.jpeg',
  desc: 'Minim aliqua dolor aliqua tempor et adipisicing ipsum dolor excepteur.Enim aliquip elit commodo qui qui reprehenderit mollit aliquip voluptate velit culpa.',
},
{
  id: 9,
  title: 'quarantine buddy',
  category: 'shakes',
  price: 8.98,
  img: './images/item-9.jpeg',
  desc: 'Commodo proident non nostrud deserunt ad quis.Proident ullamco dolore pariatur excepteur occaecat nulla anim proident velit dolor consequat.'
},
{
  id: 10,
  title: 'steak dinner',
  category: 'dinner',
  price: 48.98,
  img: './images/item-10.jpeg',
  desc: 'Commodo proident non nostrud deserunt ad quis.Proident ullamco dolore pariatur excepteur occaecat nulla anim proident velit dolor consequat.'
},
]

const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')



window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu)
  displayMenuButtons()
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class='price'>$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`
  })
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons(){
  const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },
  ['all']
  )

  const categoryBtns = categories
  .map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}> ${category} </button>`
  })
  .join('')
  container.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
          return menuItem
        }
      })
      if(category === 'all'){
        displayMenuItems(menu)
      } else{
        displayMenuItems(menuCategory)
      }
    })
  })
}