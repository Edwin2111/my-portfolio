import { useEffect, useRef,useState } from "react";
import "../assets/css/slider.css"
import { dataImag } from "../assets/datas/data-images";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Slider() {
    const listRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(()=>{
        const listNode=listRef.current
        const imgNode=listNode.querySelectorAll("li > img")[currentIndex]

        if(imgNode){
            imgNode.scrollIntoView({
                behavior:"smooth"
            })
        }
    },[currentIndex])

    const scrollToImage=(direction)=>{
        if(direction==='prev'){
            setCurrentIndex(curr => {
                const isFritSlider = currentIndex===0
                return isFritSlider ? 0 : curr-1
            })
        }else{
            const isLastSlider = currentIndex === dataImag.length-1
            // console.log(`is last slider ${isLastSlider}`)
            if(!isLastSlider){
                setCurrentIndex(curr => curr+1)
            }
        }
    }

    const goToSlide=(sliderIndex)=>{
        setCurrentIndex(sliderIndex)
    }

  return (
    <div className='main-container w-[330px] h-[180px] md:w-[500px] md:h-[280px]'>
        <div className="slider-container">
            <div className="leftArrow backdrop-contrast-50" onClick={()=>scrollToImage('prev')}>
                <GrPrevious className="w-5 h-12 font-serif"/>
            </div>
            <div className="rightArrow backdrop-contrast-50 " onClick={()=>scrollToImage('next')}>
                <GrNext className="w-5 h-12 font-serif"/>
            </div>
            <div className="container-images ">
                <ul ref={listRef}>
                    {
                        dataImag.map((data)=>{
                            return <li className="il" key={data.id}>
                                <img src={data.imgUrl} className="imag w-[330px] h-[180px] md:w-[500px] md:h-[280px]"/>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="dots-container ">
                {
                    dataImag.map((_,idx)=>(
                        <div key={idx} className={`dot-container-item ${idx===currentIndex ? "active":""}`} onClick={()=>goToSlide(idx)}>
                            &#9865;
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Slider