
const Header = () => {
    return (
        <div>
        
        </div>
    )
}
  
const MainBanner = () => {
    return (
        <>
        <div className="main-banner-wrap">
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
    return (
        <div className="section1-wrap">
            <div className="section1">
                <div className="section1-content">
                    <div className="section1-title">
                        <h2>The moment an idea becomes reality</h2>
                        <div>
                            <p>아이디어가 현실이 되는 순간,</p>
                            <p><div className="wonho-box"/>가 함께합니다.</p>
                        </div>
                    </div>
                    <div className="section1-desc">
                        마음속 상상이 빛이 될 때, 세상은 더 밝아집니다.
                        <p>
                            당신의 아이디어는 세상을 변화시킬 가능성을 품고 있습니다. <br/>
                            당신이 상상하는 모든 것을 현실로 만들어갑니다.
                        </p>
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
        </div>
    )
}

export default MainPage;