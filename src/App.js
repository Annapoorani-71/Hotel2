import React, { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './components/Data'
import Header from './components/Header'
import Footer from './components/Footer'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <Header/>
        <div className="title">
          <h2>Famous city Hotel card</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <Footer/>
    </main>
  )
}

export default App