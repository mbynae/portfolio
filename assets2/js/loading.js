// 로딩 감지 함수
document.onreadystatechange = function() {
    // 로딩 중 실행
    if(document.readyState === "loading" || document.readyState === "interactive"){
        document.querySelector(".wrap").classList.add("hide");
        loading();
        console.log("loading");
    
    // 로딩 후 실행
    } else if(document.readyState === "complete"){
        console.log("complete");

        const timer = setInterval(()=>{
            clearInterval(timer);
            setTimeout(complete, 800);
        }, 1100)
    }
} 

// 로딩 중 함수
function loading(){

    function Ticker( elem ) {
        elem.lettering();
        this.done = false;
        this.cycleCount = 5;
        this.cycleCurrent = 0;
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
        this.charsCount = this.chars.length;
        this.letters = elem.find( 'span' );
        this.letterCount = this.letters.length;
        this.letterCurrent = 0;
    
        this.letters.each( function() {
            var $this = $( this );
            $this.attr( 'data-orig', $this.text() );
            $this.text( '-' );
        });
    }
    
    Ticker.prototype.getChar = function() {
        return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
    };
    
    Ticker.prototype.reset = function() {
        this.done = false;
        this.cycleCurrent = 0;
        this.letterCurrent = 0;
        this.letters.each( function() {
            var $this = $( this );
            $this.text( $this.attr( 'data-orig' ) );
            $this.removeClass( 'done' );
        });
        this.loop();
    };
    
    Ticker.prototype.loop = function() {
        var self = this;
    
        this.letters.each( function( index, elem ) {
            var $elem = $( elem );
            if( index >= self.letterCurrent ) {
                if( $elem.text() !== ' ' ) {
                    $elem.text( self.getChar() );
                    $elem.css( 'opacity', Math.random() );
                }
            }
        });
    
        if( this.cycleCurrent < this.cycleCount ) {
            this.cycleCurrent++;
        } else if( this.letterCurrent < this.letterCount ) {
            var currLetter = this.letters.eq( this.letterCurrent );
            this.cycleCurrent = 0;
            currLetter.text( currLetter.attr( 'data-orig' ) ).css( 'opacity', 1 ).addClass( 'done' );
            this.letterCurrent++;
        } else {
            this.done = true;
        }
    
        if( !this.done ) {
            requestAnimationFrame( function() {
                self.loop();
            });
        } else if(document.readyState === "complete"){
            setTimeout(()=>{
                gsap.to(".word span", {y: -130, ease: "power3.out", duration: 0, stagger: 0.03})
            }, 300)
        } else {
            setTimeout( function() {
                self.reset();
            }, 750 );
        } 
    };
    
    $words = $( '.word' );
    
    $words.each( function() {
        var $this = $( this ),
            ticker = new Ticker( $this ).reset();
        $this.data( 'ticker', ticker  );
    });
}

// 로딩 후 함수
function complete(){
    const Tl = gsap.timeline();
    Tl.to(".loadingM", {top: 0, duration: 0.8, delay: 0, ease: Circ.easeOut})
    .to(".loadingE", {top: 0, duration: 0.8, delay: -0.6, ease: Circ.easeOut, onComplete: contentsOn})
}

// 로딩 후 컨텐츠 실행
function contentsOn(){
    document.querySelector(".loading-page").classList.add("hide");
    document.querySelector("#pageOn").classList.add("hide");
    document.querySelector(".wrap").classList.remove("hide");
    init();
}

// 시작 함수
function init(){
    titleRun();
    aboutRun();
    mySkillRun();
    projectRun();
    effectRun();
    summaryRun();
    contactBtn();
}
