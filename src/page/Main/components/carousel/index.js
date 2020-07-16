import React, { useEffect, useState } from 'react';
import Carousel from 'antd-mobile/lib/carousel';

const useSlide = () => {

    const [swiperData, setSwiperData] = useState([
        'https://pic.cdfg.com.cn/assets/upload/img/123940c7d84787b43168ca51a9fdbaa5.jpg', 
        'https://pic.cdfg.com.cn/assets/upload/img/810dc86e755dc9cf2978fff040387a51.jpg', 
        'https://pic.cdfg.com.cn/assets/upload/img/66d2934e8709615d6f185bdef56f6728.jpg'
    ]);
    const [imgHeight, setImgHeight] = useState(176);


    useEffect(()=>{
        setTimeout(() => {
            // setSwiperData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
        }, 100);
    },[])
    
  
    return (
        <div className='slid-warp'>
        <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            >
            {swiperData.map(val => (
                <a
                key={val}
                // href="https://m.cdfg.com.cn/wap/index.html"
                href="javascipt:;"
                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                >
                <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    setImgHeight('auto')
                    }}
                />
                </a>
            ))}
            </Carousel>
        </div>
      
    );
}


export default useSlide