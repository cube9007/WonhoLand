import { useEffect, useState } from "react";
import { Logo } from "./component";
import bgVideo from './assets/image/bgVideo.mp4';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [changed, setChanged] = useState(false);
    let currentScroll = window.scrollY;
    window.addEventListener('scroll', () => {
        currentScroll = window.scrollY;
        if (currentScroll > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        if (currentScroll > window.innerHeight * 1.7) {
            setChanged(true);
        } else {
            setChanged(false);
        }
    });

    const [menuOn, setMenuOn] = useState(false);
    const menuClose = () => {
        setMenuOn(false);
    }
    const menuOpen = () => {
        setMenuOn(true);
    }
    useEffect(() => {
        const backdrop = document.querySelector('.backdrop');
        const body = document.querySelector('body');
        if (menuOn) {
            backdrop.style.display='block';
            body.style.overflow = 'hidden';
        } else {
            backdrop.addEventListener('transitionend', () => {
                backdrop.style.display='none';
                body.style.overflow = 'auto';
            });
        }
    }, [menuOn]);
    return (
        <div className={`header-wrap ${scrolled ? 'scrolled' : ''} ${changed ? 'changed' : ''}`}>
            <div className="header">
                <Logo primary={changed}/>
                <div className="btn-menu" onClick={menuOpen}/>
                <div className={`backdrop ${menuOn ? 'open' : ''}`} onClick={menuClose}/>
                <div className={`menu ${menuOn ? 'open' : ''}`}>
                    <div className="btn-close" onClick={menuClose}/>
                    <p>PROJECT</p>
                    <p>VIDEO EDITING</p>
                    <p>2D & 3D</p>
                    <p>TOY PROJECT</p>
                </div>
            </div>
        </div>
    )
}

const MainBanner = () => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > window.innerHeight) {
            document.querySelector('.main-banner-wrap .bg').style.display = 'none';
        } else {
            document.querySelector('.main-banner-wrap .bg').style.display = 'block';
        }
    });
    // let bgCanvas = document.querySelector('#bg-video-canvas').getContext('2d');
    // if (bgCanvas) {
    //     bgCanvas.drawImage(images[0], 0, 0);
    // }
    return (
        <>
        <div className="main-banner-wrap" >
            <video className="bg" src={bgVideo} autoPlay muted playsInline/>
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
                sectionImg1.style.width = `${sectionScrollRatio / 1.748 * 2.1}vh`;
                sectionImg1.style.height = `${sectionScrollRatio * 2.1}vh`;
                sectionImg2.style.maskSize = `${sectionScrollRatio / 1.748 * 2.1}vh ${sectionScrollRatio * 2.33}vh`;
            }
        }else if (currentScroll > window.innerHeight * 2) {
            if(window.innerWidth / window.innerHeight > 1.33) {
                sectionImg1.style.width = `110vw`;
                sectionImg1.style.height = `188vw`;
                sectionImg2.style.maskSize = `110vw 188vw`;
            } else {
                sectionImg1.style.width = 'calc(210 /1.748)vh';
                sectionImg1.style.height = `210vh`;
                sectionImg2.style.maskSize = `calc(210 /1.748)vh 233vh`;
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

const Section2 = () => {
    return (
        <div className="section2-wrap">
            <div className="section2 md-column sm-column">
                <div className="section2-profile-img-wrap">
                    <div className="section2-profile-img"/>
                </div>
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

const Section3 = () => {
    const SkillItem = ({img, title, level, text}) => {
        return (
            <div className="item">
                <div className={`skill-img ${img}`} />
                <div className="skill-title">{title}</div>
                <div className={`skill-level ${level}`}>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <div className="skill-text"> {text} </div>
            </div>
        )
    }
    return (
        <div className="section3-wrap">
            <div className="section3">
                <b>Skills</b>
                <div className="skill-wrap">
                    <div>
                        <b>Design Skills</b>
                        <div className="skills">
                            <SkillItem img='ps' title='Photoshop' level='level2' text='중' />
                            <SkillItem img='ai' title='Photoshop' level='level2' text='중' />
                            <SkillItem img='figma' title='Photoshop' level='' text='상' />
                            <SkillItem img='pr' title='Photoshop' level='level2' text='중' />
                            <SkillItem img='ae' title='Photoshop' level='level2' text='중' />
                            <SkillItem img='blender' title='Photoshop' level='level2' text='중' />
                            <SkillItem img='clip-studio' title='Photoshop' level='' text='상' />
                        </div>
                    </div>
                    <div>
                        <b>Publishing Skills</b>
                        <div className="skills">
                            <SkillItem img='html' title='HTML' level='' text='상' />
                            <SkillItem img='css' title='CSS' level='' text='상' />
                            <SkillItem img='sass' title='SASS' level='' text='상' />
                            <SkillItem img='js' title='JS' level='' text='상' />
                            <SkillItem img='react' title='React' level='level2' text='중' />
                            <SkillItem img='ts' title='TypeScript' level='level2' text='중' />
                            <SkillItem img='mui' title='UI Library' level='' text='상' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section4 = () => {
    return (
        <div className="section4-wrap">
            <div className="section4">
                <b>Education</b>
                <div className="education-wrap">
                    <div className="title"> 
                        <div> 2023 <div/> 상명대(천안) 산업디자인과 학사 졸업 </div>
                        <p>학점 : 3.76</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section5 = () => {
    return (
        <div className="section5-wrap">
            <div className="section5">
                <b>경력</b>
                <div className="career-wrap">
                    <div className="item">
                        <div className="title">
                            <div>넥스트리</div>
                            <div>2년 2개월 : 2022.09 ~ 2024.10</div>
                        </div>
                        <div className="contents">
                            <div className="project">
                                <p className="name">삼성 E&A (2022.03 ~ 2024.10)</p>
                                <pre className="desc">
{`•  참여 프로젝트 : 세부 프로젝트 4개, 총 7개 사이트
•  업무 내용 (기여도 75%)
    : 신규페이지 및 수정
    : Figma 스타일가이드, UI 컴포넌트 정리 
    : Mui, Ag-Grid, Chart.js 등 라이브러리 커스텀
    : SCSS, Utility Class 사용
•  기여항목 
    : 퍼블 적용이 안될 시 개발계 직접 접근 
    : 고객이 원하는 형태의 UI 라이브러리가 없는 경우 직접 구현
    (라이브러리 없이 캘린더 UI 구현 및 커스텀)`}
                                </pre>
                                <div className="tool">
                                    Tools
                                    <div className="icon">
                                        <div className="figma"/>
                                        <div className="git"/>
                                        <div className="notion"/>
                                        <div className="ps"/>
                                        <div className="ai"/>
                                        <div className="html"/>
                                        <div className="css"/>
                                        <div className="sass"/>
                                        <div className="react"/>
                                        <div className="ts"/>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p className="name">SK (2022.09 ~ 2024.06)</p>
                                <pre className="desc">
{`•  참여 프로젝트 : 세부 프로젝트 1개
•  업무 내용 (기여도 60%)
    : 신규페이지 및 수정 
    : React, Mui, Ag-Grid 활용, 추가 페이지 작업
    : 기타 이벤트 페이지, 및 메일 폼 작업
•  기여항목 
    : 성적 및 채점 페이지 등 포멀하지 않은 페이지 작업
    : 개발계 원격 작업 지원
•  사용 툴
    커뮤니케이션 :  피그마, PPT, Git
    디자인 : 피그마, 포토샵, 일러스트
    퍼블리싱 : HTML, CSS, SCSS, React, TypeScript`}
                                </pre>
                                <div className="tool">
                                    Tools
                                    <div className="icon">
                                        <div className="figma"/>
                                        <div className="git"/>
                                        <div className="ps"/>
                                        <div className="ai"/>
                                        <div className="html"/>
                                        <div className="css"/>
                                        <div className="sass"/>
                                        <div className="react"/>
                                        <div className="ts"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title">
                            <div>넥스트리</div>
                            <div>2022.09 ~ 2024.10</div>
                        </div>
                        <div className="contents">
                            <p>웹 디자인 및 퍼블리싱</p>
                            <p>웹 디자인 및 퍼블리싱</p>
                            <p>웹 디자인 및 퍼블리싱</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Section6 = () => {
    return (
        <div className="section6-wrap">
            <div className="section6">

            </div>
        </div>
    )
}

const MainPage = () => {
    useEffect(() => {
        const handleLoad = () => {
            document.body.classList.remove('before-load');
            // 로딩 화면 DOM에서 제거
            const loadingElement = document.querySelector('#loading');
            if (loadingElement) {
                loadingElement.addEventListener('transitionend', () => {
                    if (loadingElement.parentNode) {
                        loadingElement.parentNode.removeChild(loadingElement);
                    }
                });
            }
        };

        if (document.readyState === 'complete') {
            handleLoad();
            setIsRunning(true);
        } else {
            window.addEventListener('load', handleLoad);
            setIsRunning(true);
            // Cleanup event listener on component unmount
            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if (isRunning) {
            document.querySelector('#root').style.display = 'block';
            setTimeout(() => {
                setIsRunning(false);
                document.body.style.overflow = 'auto';
                document.querySelector('.main-banner-wrap .title-wrap').style.opacity = '1';
                document.querySelector('.main-banner-wrap .banner-arrow-wrap').style.opacity = '1';
                document.querySelector('.header-wrap').style.opacity = '1';
                // document.body.style.overflow='auto';
            }, 25 * 50);
            return () => {
            };
        }
    }, [isRunning]);



    return (
        <div className='main'>
            <Header />
            <MainBanner />
            <Section1 />{/*  skill */}
            <Section2 />{/*  about WONHO */}
            <Section3 />{/*  Skill */}
            <Section4 />{/*  Education */}
            <Section5 />{/*  경력 */}
            <Section6 />
        </div>
    )
}

export default MainPage;