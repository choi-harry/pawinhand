$(document).ready(function () {
    // 볼 클릭시: 애니메이션 재생
    if (matchMedia("screen and (orientation:landscape)").matches) {
        // 가로형일때
        $(".main_animation").click(function () {
            $(".ball").css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            })
            $(".ball", this).attr('src', './image/main_animate.gif');
        })
    } else if (matchMedia("screen and (orientation:portrait)").matches) {
        // 세로형일때
        $(".main_animation").click(function () {
            $(".ball").css({
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            })
            $(".ball", this).attr('src', './image/mainani_mo.gif');
        })
    }
    // 메뉴 숨김창 활성화
    $(".icon_menu").click(function(){
        $(".menu-popup").fadeIn();
        // body에 스크롤을 숨김
        $("body").css("overflow", "hidden");
    })
    $(".menu_close").click(function(){
        $(".menu-popup").fadeOut();
        $("body").css("overflow", "auto");
    })

    // 카카오톡 알림창 스타일제어
    $(".hide_butt").click(function () {
        if ($('.talk_pop').hasClass("talk_hide") === true) {

            $(".talk_pop").removeClass("talk_hide");

        } else if($('.talk_pop').hasClass("talk_hide") === false) {

            $(".talk_pop").addClass("talk_hide");
            // $(".talk_pop").css({
            //     width: 4,
            //     padding: 10
            // })
        }
    })

    
    // 인포그래픽 통계 아이콘 스타일제어
    $(".info_item").click(function () {
        let i = $(this).index();
        if ($(this).hasClass("style_on") === false) {
            // changeNum(i);
            $(".info_item").removeClass("style_on");
            $(this).addClass("style_on");
            
        }
    })
    
    // 통계수치 up 1번 : 유튜브 참고
    // var numAnimation = document.querySelector('.data_up');
    
    // function changeNum(idx){
    //     // let timer = setInterval(할일,시간);
    //     var num = 0;
    //     var targetNum = numAnimation[idx].getAttribute('data-rate');
    //     var timer = setInterval(function(){
    //         ++num;
    //         numAnimation[idx].innerText = num;
    //         if(num == targetNum){
    //             clearInterval(timer);
    //         }
    //     },10);
    // }

    // 챗 GPT 사용
    // $(document).ready(function() {
    //     // info_item 요소들을 선택한다.
    //     var infoItems = $('.info_item');
    
    //     // info_item 클릭 이벤트 핸들러를 등록한다.
    //     infoItems.on('click', function() {
    //         var $this = $(this);
    //         // 해당 info_item의 data-rate 값을 가져온다.
    //         var countTo = parseInt($this.find('.data_up').data('rate'));
            
    //         // 카운트 애니메이션 함수를 호출한다.
    //         countUp($this.find('.data_up'), countTo);
    //     });
    
    //     // 카운트 애니메이션 함수를 정의한다.
    //     function countUp($element, targetNum) {
    //         // 시작 숫자를 0으로 설정한다.
    //         var num = 0;
    //         // 10밀리초마다 반복되는 타이머를 설정한다.
    //         var timer = setInterval(function() {
    //             // 숫자를 1씩 증가시킨다.
    //             num++;
    //             // 요소의 텍스트를 갱신한다.
    //             $element.text(num);
    //             // 만약 카운트가 목표 숫자에 도달하면 타이머를 멈춘다.
    //             if (num === targetNum) {
    //                 clearInterval(timer);
    //             }
    //         }, 10);
    //     }
    // });

    // // 챗이 style이랑 합쳐준거
    // $(document).ready(function() {
    //     // info_item 요소들을 선택한다.
    //     var infoItems = $('.info_item');
    
    //     // info_item 클릭 이벤트 핸들러를 등록한다.
    //     infoItems.on('click', function() {
    //         var $this = $(this);
    //         // 선택된 버튼의 스타일이 있는지 확인한다.
    //         if ($this.hasClass("style_on")) {
    //             // 해당 info_item의 data-rate 값을 가져온다.
    //             var countTo = parseInt($this.find('.data_up').data('rate'));
                
    //             // countUp 함수를 호출한다.
    //             countUp($this.find('.data_up'), countTo);
    //         }
    //     });
    
    //     // 카운트 애니메이션 함수를 정의한다.
    //     function countUp($element, targetNum) {
    //         // 시작 숫자를 0으로 설정한다.
    //         var num = 0;
    //         // 10밀리초마다 반복되는 타이머를 설정한다.
    //         var timer = setInterval(function() {
    //             // 숫자를 1씩 증가시킨다.
    //             num++;
    //             // 요소의 텍스트를 갱신한다.
    //             $element.text(num);
    //             // 만약 카운트가 목표 숫자에 도달하면 타이머를 멈춘다.
    //             if (num === targetNum) {
    //                 clearInterval(timer);
    //             }
    //         }, 10);
    //     }
    // });

    $(document).ready(function() {

        // $(document).ready(function(){
        //     $(".talk_wrap").animate({"top": "130px","opacity":"1"}, 500); // 1초 동안 서서히 나타나도록 animate 메소드 사용
        // });

        // info_item 요소들을 선택한다.
        var infoItems = $('.info_item');
    
        // info_item 클릭 이벤트 핸들러를 등록한다.
        infoItems.on('click', function() {
            var $this = $(this);
            // 선택된 버튼의 스타일이 있는지 확인한다.
            if ($this.hasClass("style_on")) {
                // 해당 info_item의 data-rate 값을 가져온다.
                var countTo = parseInt($this.find('.data_up').data('rate'));
                
                // countUp 함수를 호출한다.
                countUp($this.find('.data_up'), countTo);
            }
        });
    
        // 카운트 애니메이션 함수를 정의한다.
        function countUp($element, targetNum) {
            // 시작 숫자를 0으로 설정한다.
            var num = 0;
            // 10밀리초마다 반복되는 타이머를 설정한다.
            var timer = setInterval(function() {
                // 숫자를 1씩 증가시킨다.
                num++;
                // 요소의 텍스트를 갱신한다.
                $element.text(num);
                // 만약 카운트가 목표 숫자에 도달하면 타이머를 멈춘다.
                if (num === targetNum) {
                    clearInterval(timer);
                }
            }, 10);
        }
    
        // 문서가 로드될 때 실행되는 초기화 함수를 호출한다.
        initialize();
    
        // 초기화 함수를 정의한다.
        function initialize() {
            // 각 info_item 요소에 대해 초기 카운트업을 수행한다.
            infoItems.each(function() {
                var $this = $(this);
                if ($this.hasClass("style_on")) {
                    var countTo = parseInt($this.find('.data_up').data('rate'));
                    countUp($this.find('.data_up'), countTo);
                }
            });
        }
    });
    
    
    

    // 텍스트 흐름
    let moveBox = setInterval(function () {
        $(".move_text").animate({
            left: -2600
        }, 5000, function () {
            $(".move_text span").eq(0).appendTo(".move_text");
            $(".move_text").css({
                left: 0
            })
        })
    })

        let inner_img =document.querySelector("inner_img");
        let auto =setInterval(function(){
           $(".container").animate({
            left:'-100%'
           },3000,function(){
            inner_img.eq(0).appendTo(".container");
            $(".container").css({
                left:0
            })
           }) 
        })
    

})// 제이쿼리 끝

// nav 스크롤시 영역숨기기
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var curScrollPos = window.pageYOffset;
    if (prevScrollpos > curScrollPos) {
        document.querySelector(".hd").style.top = "0";
    } else {
        document.querySelector(".hd").style.top = "-120px";
    }
    prevScrollpos = curScrollPos;
}
// 카드 
class CardFlipOnScroll {
    constructor(wrapper, sticky) {
        this.wrapper = wrapper
        this.sticky = sticky
        this.cards = sticky.querySelectorAll('.card')
        this.length = this.cards.length

        this.start = 0
        this.end = 0
        this.step = 0
    }

    init() {
        this.start = this.wrapper.offsetTop - 100
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
        this.step = (this.end - this.start) / (this.length * 2)
    }

    animate() {
        this.cards.forEach((card, i) => {
            const s = this.start + this.step * i
            const e = s + this.step * (this.length + 1)

            if (scrollY <= s) {
                card.style.transform = `
                        perspective(100vw)
                        translateX(100vw) 
                        rotateY(180deg)
                      `
            } else if (scrollY > s && scrollY <= e - this.step) {
                card.style.transform = `
                        perspective(100vw)
                        translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
                        rotateY(180deg)
                      `
            } else if (scrollY > e - this.step && scrollY <= e) {
                card.style.transform = `
                        perspective(100vw)
                        translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
                        rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
                      `
            } else if (scrollY > e) {
                card.style.transform = `
                        perspective(100vw)
                        translateX(0vw) 
                        rotateY(0deg)
                      `
            }
        })
    }
}

const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector('.sticky')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
    cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
    cardFlipOnScroll.init()
})