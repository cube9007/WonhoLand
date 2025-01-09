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
            <div className="title">
                <div>
                    <p><b>Wanna</b> create?</p>
                    <p><b>Want a</b> how?</p>
                </div>
                WONHO make it Real
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
        let sectionImg1 = document.querySelector('.after');
        let sectionImg2 = document.querySelector('.section1-content.duplicate');
        if (currentScroll < window.innerHeight) {
            sectionImg1.style.width = `0`;
            sectionImg1.style.height = `0`;
        }
        if (currentScroll > window.innerHeight && currentScroll < window.innerHeight * 2) {
            sectionImg1.style.width = `${sectionScrollRatio}vw`;
            sectionImg1.style.height = `${sectionScrollRatio * 1.78}vw`;
            sectionImg2.style.maskSize = `${sectionScrollRatio}vw ${sectionScrollRatio * 1.748}vw`;
        }
    });
    return (
        <div className="section1-wrap">
            <div className="section1">
                <div className="section1-content original">
                    <div className="section1-title">
                        <h2>The moment an idea becomes reality</h2>
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
                    <div className="after" />
                </div>
                <div className="section1-content duplicate">
                    <div className="section1-title">
                        <h2>The moment an idea becomes reality</h2>
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