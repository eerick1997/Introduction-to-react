import React, { useEffect, useState, createContext } from "react"
import styles from "./App.module.css"
import { useAudio } from "react-use"
import { Route, Switch, useHistory } from "react-router-dom"

import Search from "../Search/Search"
import Nav from "../Nav/Nav"
import Header from "../Header/Header"
import Player from "../Player/Player"

const NumberOfPlayedSongs = createContext(() => {})

type song = { albumName: string; songName: string; url: string; needToPlay: boolean } | null
const App = () => {
  const [songInfo, setSongInfo] = useState<song>(null)
  const [audio, state, controls, ref] = useAudio({ src: songInfo?.url ?? "", autoPlay: false })

  const history = useHistory()
  useEffect(() => {
    history.push("/search")
  }, [history])

  useEffect(() => {
    if (songInfo?.needToPlay) {
      controls.play()
      setSongInfo({ ...songInfo, needToPlay: false })
    }
  }, [songInfo, controls])

  const [times, setTimes] = useState(0)

  useEffect(() => {
    console.log({ times })
  }, [times])

  const add1 = () => setTimes(t => t + 1)

  return (
    <NumberOfPlayedSongs.Provider value={add1}>
      <section className={styles.container}>
        <Nav />
        {audio}
        <main className={styles.main}>
          <Header />

          <Switch>
            <Route path="/about">
              <div>About!</div>
            </Route>
            <Route path="/me">
              <div>Me!</div>
            </Route>
            <Route path="/search">
              <Search
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                state={state}
                controls={controls}
              />
            </Route>
          </Switch>
        </main>
        <Player songInfo={songInfo} state={state} controls={controls} audio={ref.current} />
      </section>
    </NumberOfPlayedSongs.Provider>
  )
}

export type { song }
export { NumberOfPlayedSongs }
export default App
