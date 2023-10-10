'use client'

import Image from 'next/image'

import 'app/globals.css'
import SlotCounter from 'react-slot-counter';
import {useState, useEffect} from 'react';
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
      animateUnchanged={true}
      useMonospaceWidth
      direction="top-down"
      debounceDelay={0}
      autoAnimationStart={false}
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
      page: 1,
      image: '',
      items: [
        {
          title: 'Voucher Alfamart',
          data: [
            {
              "no": 1,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 2,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 3,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 4,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 5,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 6,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 7,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 8,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
            {
              "no": 9,
              "Order": "49 INTISUMBER HASIL SEMPURNA GLOBAL, PT",
              "Nomor Kupon": 88888888
            },
          ]
        },
      ]
    }
  ))
  const datasets = Data
  const [datasetIndex, setdatasetIndex] = useState(0)
  const [activeDataset, setactiveDataset] = useState(Data)
  const [showName, setshowName] = useState(false)
  
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
    // if(datasetIndex === chunkedDatasets.length - 1) return
    setshowName(false)

    let newDatasetIndex = datasetIndex +1
    setdatasetIndex(newDatasetIndex)

    playConfetti()
    _.delay(() => {
    }, slotDuration * 1000 - 1300)
    _.delay(() => {
      playConfettiMore()
      setshowName(true)
    }, slotDuration * 1000 + 1500)
  }
  useEffect(() => {
    console.log(activeDataset)
  
  })
  

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
          </div>
          <div className="spin-container">
            {/* {
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
            } */}
            {
              activeDataset[datasetIndex]?.items?.map((item, i) => (
                <div key={i}>
                  <div className="font-poppins text-4xl font-medium text-black font-bold">
                    {item.title}
                  </div>
                  <div className='flex flex-row flex-wrap justify-center'>
                    {
                      item.data.map((d, i2) => (
                        <div className="counter-holder basis-1/3" key={i2}>
                          <CustomSlotCounter
                            value={d['voucher']}
                            charClassName="char"
                            separatorClassName="sep"
                            duration={2}
                          />
                          <div className='counter-relasi-name-container font-poppins'>
                            {showName && d['name']}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
            <UndiButton onClick={()=>clickUndiButton()}/>
            <div className='page-indicator'>{ datasetIndex > 0 ? `Pengundian ${activeDataset[datasetIndex].page}` : ''}</div>
          </div>
        </div>
      </header>
    </div>
  );
}
