$(function(){

  gsap.to('.section-wrap',{
  
    scrollTrigger:{
      trigger:".section-wrap",
      start:"top top",
      end:"+=2000%",
      markers:true,
      scrub:1,
      pin:true,
    },
  
    /* xPercent:-100 */
    /* background:'#f00', */
    //x:100
  
    xPercent:-677 /* 총 width 더한 값에서 100vh를 뺀다 */
  })

  // 강제 스크롤 모션 생성 , 트리거 강제적으로 만든 것


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





/*   m2 = gsap.timeline({
    defaults:{
      ease:'none',
    },
    scrollTrigger:{
        trigger:".sc-video",
        start: "100%",
        end: "170%",
        scrub: 1,
        markers:true,
    }
  })

  m2.to('.prd4',{duration: 2, x:100, stagger:0.1})
  m2.to('.prd5',{duration: 2, x:-200, stagger:0.1}) */

  
   m3 = gsap.timeline({
    defaults:{
      ease:'none',
    },
    scrollTrigger:{
        trigger:".sc-video",
        start: "500%",
        markers:true,
    }
  })

  m3.to('.msg',{x:100, stagger:0.1})








// m1.paused(true);



  /*   let total = 0;
  
  $('.section').each(function(index,el){
    total+=$(this).outerWidth();
  }) */

})// end