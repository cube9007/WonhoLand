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
                        <h2>The moment an idea <br className="none-lg none-md"/> becomes reality</h2>
                        <div>
                            <p>아이디어가 현실이 되는 순간,</p>
                            <p><b className="wonho-box"/>가 함께합니다.</p>
                        </div>
                    </div>
                    {/* <div className="section1-img-face"/> */}
                    <div className="section1-desc">
                        마음속 상상이 빛이 될 때, 세상은 더 밝아집니다.
                        <p>
                            아이디어는 세상을 변화시킬 가능성을 품고 있습니다. <br/>
                            상상하는 모든 것을 현실로 만들어갑니다.
                        </p>
                    </div>
                    <div className="after" />
                </div>
                <div className="section1-content duplicate">
                    <div className="section1-title">
                        <h2>The moment an idea <br className="none-lg none-md"/> becomes reality</h2>
                        <div>
                            <p>아이디어가 현실이 되는 순간,</p>
                            <p><b className="wonho-box"/>가 함께합니다.</p>
                        </div>
                    </div>
                    <div className="section1-img-face"/>
                    <div className="section1-desc">
                        마음속 상상이 빛이 될 때, 세상은 더 밝아집니다.
                        <p>
                            아이디어는 세상을 변화시킬 가능성을 품고 있습니다. <br/>
                            상상하는 모든 것을 현실로 만들어갑니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section2 = () => {
    return (
        <>
        </>
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