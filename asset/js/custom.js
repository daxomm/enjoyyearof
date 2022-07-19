$(function(){

   // 탑 버튼

   $('.btn-rewind').click(function(){

    $('html,body').animate({'scrollTop':0},400)

  });



  gsap.to('.section-wrap',{
  
    scrollTrigger:{
      trigger:".section-wrap",
      start:"top top",
      end:"+=2000%",
      markers:true,
      scrub:1,
      pin:true,
    },

  
    xPercent:-677 /* 총 width 더한 값에서 100vh를 뺀다 */
  })

  // 강제 스크롤 모션 생성 , 트리거 강제적으로 만든 것



  // sc-brand

  m1 = gsap.timeline({
    defaults: {
      ease: 'none',
    },
    scrollTrigger: {
      trigger: ".sc-brand",
      start: "0%",
      end: "170%",
      scrub: 1,
      markers: true,
    }
  })

  m1.addLabel('m1')
  .to('.prd1',{duration: 3, x:-300},'m1')
  .to('.prd2',{duration: 2.5, x:-350},'m1')
  .to('.prd3',{duration: 3, x:-10},'m1')



  // sc-video

  m2 = gsap.timeline({
    defaults:{
      ease:'none',
    },
    scrollTrigger:{
        trigger:".sc-video",
        start: "130%",
        markers:true,
    }
  });

  m2.to('.prd4',{opacity: 1, duration: 0.2, y:60, delay: 0.4})
  m2.to('.prd5',{opacity: 1, duration: 0.2, y:60, delay: 0.2})


  // sc-service
  
   m3 = gsap.timeline({
    defaults:{
      ease:'none',
    },
    scrollTrigger:{
        trigger:".sc-service",
        start: "520%",
        markers:true,
    }
  })

  m3.to('.msg1',{opacity: 1, duration: 0.3, y:50, delay: 1.2})
  m3.to('.msg2',{opacity: 1, duration: 0.3, y:50, delay: 0.3})


  // sc-product

  m4 = gsap.timeline({
    defaults:{
      ease:'none',
    },
    scrollTrigger:{
        trigger:".sc-product",
        start: "320%",
        markers:true,
    }
  });

  m4.to('.prd6',{opacity: 1, duration: 0.2, y:0, delay: 0.4})
  m4.to('.prd7',{opacity: 1, duration: 0.2, y:0, delay: 0.4})
  m4.to('.prd8',{opacity: 1, duration: 0.2, y:0, delay: 0.4})
  m4.to('.prd9',{opacity: 1, duration: 0.2, y:0, delay: 0.2})


})// end