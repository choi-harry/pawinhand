$(document).ready(function () {
    // 볼을 클릭시 이미지변경
    $(".main_animation").click(function () {
        $(".main_animation, .ball").css({
            width:'100%',
            height: '100%',
            left:0 ,
            bottom:0
        })
        $(".ball", this).attr('src', './image/main_animate.gif');
      })
    
})
