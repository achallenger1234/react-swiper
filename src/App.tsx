
// @ts-nocheck

// 上の行を追加することでtsの型判定を無視することができる

import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styled from 'styled-components';



const swiper = new Swiper(".swiper", {

//jsをいかに記載
  
  /* slidesPerView: ｛表示枚数｝,　表示枚数を増やしたいときこの行を追加 */

  slidesPerView: 1, //通常(769px以下)画面表示枚数を一枚に指定
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3
    }
  },
  
    // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


function App() {
  

  return (
    
    
    <>

    
        <div className="swiper">
      <SwiperContents className="swiper-wrapper">
        <SwiperSlideContents className="swiper-slide">Slide 1</SwiperSlideContents>
        <SwiperSlideContents className="swiper-slide">Slide 2</SwiperSlideContents>
        <SwiperSlideContents className="swiper-slide">Slide 3</SwiperSlideContents>
        <SwiperSlideContents className="swiper-slide">Slide 4</SwiperSlideContents>
      </SwiperContents>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
    

    </>
  );
}

const SwiperContents = styled.div`
    /* wrapperのサイズを調整 */
  width: 100%;
  height: 300px;
`
const SwiperSlideContents = styled.div`
  /* スライドのサイズを調整、中身のテキスト配置調整、背景色 */
  color: #ffffff;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 300px;
  text-align: center;
  background-color: #000
`
//ナビゲーション等にcssを当てたいときは@``内にcss タグをdiv -> SwiperPaginationContents に変更

// const SwiperPaginationContents = styled.div`
// `
// const SwiperButtonPrevContents = styled.div`
// `
// const SwiperButtonNextContents = styled.div`
// `

export default App;
