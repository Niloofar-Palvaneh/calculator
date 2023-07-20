"use client"

import { CgLogOff } from "react-icons/cg"
import { useState } from "react"


export default function Home() {
  const [isOnCalculator, setIsOnCalculator] = useState(false)
  const [numbers, setNumbers] = useState("")

  const play = () => {
    var audio = new Audio("/cliclSound.mp3");
    audio.play();
  }


  return (
    <>
      <div className='flex w-full items-center justify-center'>
        <div className='w-[30%] bg-stone-200 border-4 border-gray-800 sm:w-[90%]'>
          <div className='flex items-center  justify-center gap-4 mt-4 ml-4 mr-4 sm:flex-col-reverse md:flex-col-reverse'>
            <input
              value={numbers}
              type="text"
              className={`
              ${isOnCalculator == true ? "bg-green-100" : "disable"}
               w-[500px] h-[50px] text-2xl p-2 font-bold rounded border-4 border-gray-600 sm:w-full md:w-full lg:w-full `} />
            <div onClick={() => {
              setNumbers("")
              setIsOnCalculator(!isOnCalculator)
            }}>
              <input type="checkbox"
                className={`checkbox`} />
              <label for="checkbox" className={`switch 
              ${isOnCalculator == true ? "active" : ""}`}>
                <CgLogOff className={`text-2xl font-bold 
                ${isOnCalculator == true ? "text-green-800" : "text-gray-400"}`} />
              </label>
            </div>

          </div>

          <div >
            <div >
              <div className='flex items-center'>
                <div className='flex flex-col p-4 w-1/2 gap-4'>
                  <div className='flex items-center gap-4'>

                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"1"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"2"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`}
                      type="button"
                      value={"3"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                  </div>
                  <div className='flex items-center gap-4'>
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"4"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"5"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"6"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                  </div>
                  <div className='flex items-center gap-4'>
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"7"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"8"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                    <input className={`button ${isOnCalculator == true ? "" : "disablebtn"}`} type="button"
                      value={"9"}
                      onClick={e => {
                        play()
                        setNumbers(numbers + e.target.value)
                      }}
                    />
                  </div>
                </div>

                <div className='flex flex-col w-full p-4'>
                  <input
                    type="button"
                    value={"+"}
                    onClick={e => {
                      play()
                      setNumbers(numbers + e.target.value)
                    }}
                    className={`button w-custom ${isOnCalculator == true ? "" : "disablebtn"}`} />
                  <input
                    type="button"
                    value={"-"}
                    onClick={e => {
                      play()
                      setNumbers(numbers + e.target.value)
                    }}
                    className={`button w-custom ${isOnCalculator == true ? "" : "disablebtn"}`} />
                  <input
                    type="button"
                    value={"*"}
                    onClick={e => {
                      play()
                      setNumbers(numbers + e.target.value)
                    }}
                    className={`button w-custom ${isOnCalculator == true ? "" : "disablebtn"}`} />
                  <input
                    type="button"
                    value={"/"}
                    onClick={e => {
                      play()
                      setNumbers(numbers + e.target.value)
                    }}
                    className={`button w-custom ${isOnCalculator == true ? "" : "disablebtn"}`} />
                </div>
              </div>

              <div className='flex  w-full p-4 -mt-4 gap-4'>
                <input
                  value={"0"}
                  onClick={e => {
                    play()
                    setNumbers(numbers + e.target.value)
                  }}
                  className={`button flex-1 items-center justify-center flex ${isOnCalculator == true ? "" : "disablebtn"}`} type="button" />

                <input
                  value={"."}
                  onClick={e => {
                    play()
                    setNumbers(numbers + e.target.value)
                  }}
                  type="button"
                  className={`button flex-2 items-center justify-center bg-gray-300 flex ${isOnCalculator == true ? "" : "disablebtn"}`} />

                <button
                  onClick={() => {
                    play()
                    setNumbers("")
                  }}
                  className={`button flex-1 items-center justify-center flex bg-red-300 ${isOnCalculator == true ? "" : "disablebtn"}`}>C</button>

                <button
                  onClick={() => {
                    play()
                    setNumbers(eval(numbers))
                  }}
                  className={`button flex-2 items-center justify-center flex ${isOnCalculator == true ? "" : "disablebtn"}`}>=</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}




