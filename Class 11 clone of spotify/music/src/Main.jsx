import React, { useRef, useState } from "react"
import styles from "./Main.module.css"

const baseURL = "https://api.napster.com"
const key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"

const Main = () => {
  const [data, setData] = useState([])

  const callAPI = async inputData => {
    let query = "query=" + inputData
    let url = baseURL + `/v2.2/search/verbose?${key}&${query}`
    console.log(url)
    let response = await fetch(url)
    let json = await response.json()
    console.log(json)

    setData(json.search.data.tracks)
  }

  const searchInput = useRef(null)
  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          const inputData = searchInput.current.value
          callAPI(inputData)
          e.preventDefault()
          return false
        }}
      >
        <input ref={searchInput} />
      </form>

      <div className={styles.container}>
        {data.map(({ albumName, name, previewURL }) => (
          <div key={name + albumName} className={styles.tracks}>
            <p>{name}</p>
            <p>albumName</p>
            <audio controls class="audio">
                <source src={previewURL} type="audio/mpeg"/>
            </audio>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Main
