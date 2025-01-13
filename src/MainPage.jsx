const Header = () => {
    return (
        <div>
        
        </div>
    )
}
  
const MainBanner = () => {
    return (
        <>
        <div className="main-banner-wrap" >
            <div className="bg"/>
            <div className="title-wrap">
                <div className="title">
                    <div>
                        <p><b>Wanna</b> create?</p>
                        <p><b>Want a</b> how?</p>
                    </div>
                    WONHO make it Real
                </div>
            </div>
            <div className="banner-arrow-wrap" onClick={()=>{
                window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
            }}>
                <div className="banner-arrow"/>
            </div>
        </div>
        </>
    )
}

// 메세지 영역 idea becomes reality
const Section1 = () => {
    let currentScroll = window.scrollY;
    window.addEventListener('scroll', () => {
        currentScroll = window.scrollY;
        let sectionScroll = currentScroll - window.innerHeight ;
        let sectionScrollRatio = sectionScroll / window.innerHeight * 100;
        let sectionImgFace = document.querySelector('.section1-img-face');
        let sectionImg1 = document.querySelector('.after');
        let sectionImg2 = document.querySelector('.section1-content.duplicate');
        if (currentScroll < window.innerHeight) {
            sectionImgFace.style.width = '0';
            sectionImgFace.style.height = '0';
            sectionImg1.style.width = `0`;
            sectionImg1.style.height = `0`;
            sectionImg2.style.maskSize = `0 0`;
        }else if (currentScroll > window.innerHeight && currentScroll < window.innerHeight * 2) {
            sectionImgFace.style.width = `${sectionScrollRatio/4 * 3 * 1.2 + 30}px`;
            sectionImgFace.style.height = `${sectionScrollRatio/4 * 3 * 0.9 + 20}px`;
            if(window.innerWidth / window.innerHeight > 1.33) {
                sectionImg1.style.width = `${sectionScrollRatio * 1.1}vw`;
                sectionImg1.style.height = `${sectionScrollRatio * 1.1 * 1.748}vw`;
                sectionImg2.style.maskSize = `${sectionScrollRatio * 1.1 }vw ${sectionScrollRatio * 1.1 *  1.748}vw`;
            } else {
                sectionImg1.style.width = `${sectionScrollRatio / 1.748 * 2.33}vh`;
                sectionImg1.style.height = `${sectionScrollRatio * 2.33}vh`;
                sectionImg2.style.maskSize = `${sectionScrollRatio / 1.748 * 2.33}vh ${sectionScrollRatio * 2.33}vh`;
            }
        }else if (currentScroll > window.innerHeight * 2) {
            if(window.innerWidth / window.innerHeight > 1.33) {
                sectionImg1.style.width = `110vw`;
                sectionImg1.style.height = `188vw`;
                sectionImg2.style.maskSize = `110vw 188vw`;
            } else {
                sectionImg1.style.width = 'calc(233 /1.748)vh';
                sectionImg1.style.height = `233vh`;
                sectionImg2.style.maskSize = `calc(233 /1.748)vh 233vh`;
            }
        }
    });
    return (
        <div className="section1-wrap">
            <div className="section1">
                <div className="section1-content original">
                    <div className="section1-title">
                        <h2>The moment an idea <br className="lg-none md-none"/> becomes reality</h2>
                        
                    </div>
                    {/* <div className="section1-img-face"/> */}
                    <div className="section1-desc">
                        <p>아이디어가 현실이 되는 순간,</p>
                        <p><b className="wonho-box"/>가 함께합니다.</p>
                    </div>
                    <div className="after" />
                </div>
                <div className="section1-content duplicate">
                    <div className="section1-title">
                        <h2>The moment an idea <br className="lg-none md-none"/> becomes reality</h2>
                    </div>
                    <div className="section1-img-face"/>
                    <div className="section1-desc">
                        <p>아이디어가 현실이 되는 순간,</p>
                        <p><b className="wonho-box"/>가 함께합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 프로필 영역
const Section2 = () => {
    return (
        <div className="section2-wrap">
            <div className="section2 md-column sm-column">
                <div className="section2-profile-img"/>
                <div className="section2-content">
                    <div className="section2-title">
                        <div>About <b>WONHO</b></div>
                        <h5>
                            브라우저 속 작은 세계를 빚어내는 <br/>
                            <b>최원호</b> 입니다.
                        </h5>
                    </div>
                    <div className="section2-tag">
                        <div>체계 있는 코드</div>
                        <div>함께하는 작업</div>
                        <div>창의성 + 효율성 = 가능성</div>
                    </div>
                    <div className="section2-desc">
                        브라우저라는 창을 통해 사용자와<br className="lg-none md-none"/> 만나는 세계를 빚는 퍼블리셔입니다. <br/>
                        코드 조각들이 모여 큰 그림이 되고<br className="lg-none md-none"/> 웹 사이트가 되는 데 흥미를 느꼈습니다.<br/>
                        <br/>
                        지난 4년간 웹 디자이너와 퍼블리셔로 활동하며,<br/>
                        제 코드가 다른 이들의 손에서 <br className="lg-none md-none"/>살아 움직이며 완성되는 과정을 보았습니다.<br/>
                        그 과정에서 <b>소스 하나에도 배려와 체계</b>가 <br className="lg-none md-none"/>담겨야 한다는 것을 알게 되었습니다. <br/>
                        <br/>
                        단순히 기능을 구현하는 데 그치지 않고, <br className="lg-none md-none"/><b>모두가 함께</b> 만들어가는 작업을<br/>
                        더 나은 방향으로 이끄는 데 매력을 느끼고 있습니다.<br/>
                        <br/>
                        브라우저라는 공간에 더 많은 가능성을 담기 위해, <br/>
                        <b>작은 코드가 모여 함께 더 큰 이야기를 <br className="lg-none md-none"/>완성하는 협업을 이어가고 싶습니다</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
const MainPage = () => {

    return (
        <div className='main'>
            <Header />
            <MainBanner />
            <Section1 />
            <Section2 />
        </div>
    )
}

export default MainPage;