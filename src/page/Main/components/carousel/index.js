import React, { useEffect, useState } from 'react';
import Carousel from 'antd-mobile/lib/carousel';

const useSlide = () => {

    const [swiperData, setSwiperData] = useState(['1', '2', '3']);
    const [imgHeight, setImgHeight] = useState(176);


    useEffect(()=>{
        setTimeout(() => {
            setSwiperData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
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
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
                >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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