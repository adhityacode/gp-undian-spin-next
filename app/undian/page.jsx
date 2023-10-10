'use client'

import Image from 'next/image'

import 'app/globals.css'
import SlotCounter from 'react-slot-counter';
import {useState} from 'react';
import _ from 'lodash';
import logo from "../images/logo.png";
import Data from './Data';
import JSConfetti from 'js-confetti'
// import useSound from 'use-sound'
// import spinSound from '../sounds/spin.mp3'
// import spinEndSound from '../sounds/spin_end.mp3'

const slotDuration = 6

const CustomSlotCounter = ({value}) => {
  return (
    <SlotCounter
      value={value}
      startValue={"--------"}
      charClassName="char"
      separatorClassName="sep"
      duration={slotDuration}
      dummyCharacterCount={120}
      autoAnimationStart={false}
      animateUnchanged
      useMonospaceWidth
      direction="top-down"
      debounceDelay={1000}
    />
  )
}
const UndiButton = (props) => {
  return (
      <button {...props} className="undi-button font-poppins">
          UNDI PEMENANG
      </button>
  )
}

export default function Page({ params }) {
  const jsConfetti = new JSConfetti()
  const datasetIndexes = _.range(10)
  const emptyData = _.range(10).map(e => (
    {
      'voucher': '--------',
      'name': ''
    }
  ))
  const datasets = Data
  const chunkedDatasets = _.chunk(datasets, 10)
  const [datasetIndex, setdatasetIndex] = useState(-1)
  const [activeDataset, setactiveDataset] = useState(emptyData)
  // const [playSound, { stop:stopSound }] = useSound(spinSound)
  // const [playSpinEndSound, { stop:stopSpinEndSound }] = useSound(spinEndSound)

  const playConfetti = () => {
    jsConfetti.addConfetti({
      confettiRadius: 6,
      confettiNumber: 500,
    })
  }
  const playConfettiMore = () => {
    jsConfetti.addConfetti({
      confettiRadius: 6,
      confettiNumber: 900,
    })
  }

  const clickUndiButton = () => {
    if(datasetIndex === chunkedDatasets.length - 1) return

    let newDatasetIndex = datasetIndex +1
    setdatasetIndex(newDatasetIndex)
    setactiveDataset(chunkedDatasets[newDatasetIndex].map(e => ({
      voucher: e.voucher,
      name: ''
    })))

    playConfetti()
    // stopSound()
    // stopSpinEndSound()
    // playSound()
    
    _.delay(() => {
      // stopSound()
      // playSpinEndSound()
    }, slotDuration * 1000 - 1300)
    _.delay(() => {
      playConfettiMore()
      setactiveDataset(chunkedDatasets[newDatasetIndex])
    }, slotDuration * 1000 + 1500)
  }

  return (
    <div className="App font-poppins">
      <header className="App-header">
        <div className='container'>
          <div className='logo-container vert-move'>

           <Image
            src={logo}
            height={412}
            width={466}
            alt="undian logo"
           />
           <p>
            <span>Hadiah 1000 Poin untuk</span>
            <br/><span>100 pemenang</span>
           </p>
          </div>
          <div className="spin-container">
            {
              _.chunk(datasetIndexes, 3).map((datasetIndexChunk, i) => (
                <div className="counter-row" key={i}>
                  {
                    datasetIndexChunk.map((datasetIndex, i2) => (
                      <div className="counter-holder" key={i2}>
                        <CustomSlotCounter
                          value={activeDataset[datasetIndex]['voucher']}
                          charClassName="char"
                          separatorClassName="sep"
                          duration={2}
                        />
                        <div className='counter-relasi-name-container'>
                          {activeDataset[datasetIndex]['name']}
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }
            <UndiButton onClick={()=>clickUndiButton()}/>
            <div className='page-indicator'>{ datasetIndex >= 0 ? `Pengundian ${datasetIndex + 1}` : ''}</div>
          </div>
        </div>
      </header>
    </div>
  );
}
