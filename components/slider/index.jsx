import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function NewHome2() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const property1= {
        imageUrl: "https://www.esan.edu.pe/apuntes-empresariales/2016/06/07/identidad_principal.jpg",
        title: "paisaje2",
        keys: "slide-1",
    }

    const property2= {
        imageUrl: "https://st2.depositphotos.com/3591429/5245/i/600/depositphotos_52459243-stock-photo-busy-people-working-in-an.jpg",
        title: "paisaje2",
        keys: "slide-2",
    }

    const property3= {
        imageUrl: "https://i.pinimg.com/736x/cf/03/da/cf03daabe3b377987013a4994efe500a.jpg",
        title: "paisaje2",
        keys: "slide-3",
    }

    const property4= {
        imageUrl: "https://www.esan.edu.pe/apuntes-empresariales/2016/06/07/identidad_principal.jpg",
        title: "paisaje2",
        keys: "Thumbnail 1",
    }

    const property5= {
        imageUrl: "https://st2.depositphotos.com/3591429/5245/i/600/depositphotos_52459243-stock-photo-busy-people-working-in-an.jpg",
        title: "paisaje2",
        keys: "Thumbnail 2",
    }

    const property6= {
        imageUrl: "https://i.pinimg.com/736x/cf/03/da/cf03daabe3b377987013a4994efe500a.jpg",
        title: "paisaje2",
        keys: "Thumbnail 3",
    }

    const items = [property1, property2, property3 ];
    const thumbs  = [property4, property5, property6 ];
    
    return (
        <>
        <div className=""></div>
        <Swiper
                id="main"
                thumbs={{ swiper : thumbsSwiper }}
                controller={{ control: controlledSwiper }}
                tag="section"
                wrapperTag="ul"
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={true}
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                onSlideChange={(swiper) => {
                console.log('Slide index changed to: ', swiper.activeIndex);
                }}
                onReachEnd={() => console.log('Swiper end reached')}
            > 
                {items.map((item,index)=>{
                    
                    return  <SwiperSlide key={item.keys}  tag="li" >
                                <img className="slaceImg"
                                    src={item.imageUrl} 
                                    style={{listStyle: 'none'}}
                                    alt="paisaje" />
                            </SwiperSlide>
                    })
                }    
        </Swiper>
        <Swiper className="mrgSlice"
                id="thumbs"
                spaceBetween={5}
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
            >
                {thumbs.map((item2,index)=>{
                    
                    return  <SwiperSlide key={item2.keys} tag="li" style={{ listStyle: 'none' }}>
                                <img className="slaceImg2"
                                    src={item2.imageUrl}
                                    alt="tex"
                                ></img>
                            </SwiperSlide>
                    })
                }
        </Swiper>

      {/* <Swiper id="controller" onSwiper={setControlledSwiper}>
            {items.map((item,index)=>{
                    
                    return  <SwiperSlide key={item.keys}  tag="li" >
                                <img 
                                    src={item.imageUrl} 
                                    style={{listStyle: 'none'}}
                                    alt="paisaje" />
                            </SwiperSlide>
                    })
                }
      </Swiper> */}
    </>
  )
}

