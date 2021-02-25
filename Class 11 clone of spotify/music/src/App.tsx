import React from "react"
import styles from "./App.module.css"
import { FiAperture, FiArrowUpCircle, FiBluetooth, FiCoffee } from "react-icons/fi"
import Main from "./Main"

function App() {
  return (
    <section>
      <aside>
      <FiAperture/>
      <FiArrowUpCircle/>
      <FiBluetooth/>
      <FiCoffee/>
      </aside>
      <main className={styles.main}>
        <Main />
      </main>
    </section>
  )
}

export default App
