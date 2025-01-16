import { useEffect, useState } from "react";
import { Logo } from "./component";
import bgVideo from './assets/image/bgVideo.mp4';
import samsungImg from './assets/image/samsung.png';
import skImg from './assets/image/sk.png';
import dongaImg from './assets/image/donga.png';
import asanImg from './assets/image/asan.png';
import ajImg from './assets/image/aj.png';
import tourImg from './assets/image/tour.png';
import edulimeImg from './assets/image/edulime.png';
import vizendImg from './assets/image/vizend.png';
import ndsImg from './assets/image/nds.png';
import nomadianImg from './assets/image/nomadian.png';
import namoosoriImg from './assets/image/namoosori.png';

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
                                <p className="name"><img src={samsungImg}/> <p>2022.09 ~ 2024.10</p></p>
                                <p className="summary">엔지니어 벤더사 관리 웹 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 80%) <br/>
                                &nbsp; &nbsp; : 신규페이지 및 수정<br/>
                                &nbsp; &nbsp; : Figma 스타일가이드, UI 컴포넌트 정리 <br/>
                                &nbsp; &nbsp; : Mui, Ag-Grid, Chart.js 등 라이브러리 커스텀<br/>
                                &nbsp; &nbsp; : SCSS, Utility Class 사용<br/>
                                •  특이사항항 <br/>
                                &nbsp; &nbsp; : 퍼블 적용이 안될 시 개발계 직접 접근 <br/>
                                &nbsp; &nbsp; : 고객이 원하는 형태의 UI 라이브러리가 없는 경우 직접 구현<br/>
                                &nbsp; &nbsp; (라이브러리 없이 캘린더 UI 구현 및 커스텀)
                                </p>
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
                                <p className="name"><img src={edulimeImg}/> <p>(2024.07 ~ 2024.10)</p></p>
                                <p className="summary">대학 LMS 개발 템플릿 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 100%) <br/>
                                &nbsp; &nbsp; : Figma + Kendo UI Library 활용한 디자인 구축작업, 스타일가이드, 상세페이지<br/>
                                &nbsp; &nbsp; : 활용한 UI 소스 세팅, 컴포넌트 관리<br/>
                                &nbsp; &nbsp; : SCSS, Utility Class 사용  <br/>
                                •  특이사항 <br/>
                                &nbsp; &nbsp; : 짧은 기간 내에 타 프로젝트의 템플릿 사용하여 콘텐츠 최적화<br/>
                                &nbsp; &nbsp; : 다양한 UI 라이브러리 커스텀
                                </p>
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
                                <p className="name"><img src={vizendImg}/> <p>(2024.01 ~ 2024.10)</p></p>
                                <p className="summary">앱 모듈 구독 제작 시스템 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 100%) <br/>
                                &nbsp; &nbsp; : Figma + Mui Library 활용한 디자인 구축작업, 스타일가이드, 상세페이지 <br/>
                                &nbsp; &nbsp; : 내부 서비스 로고 작업 (약 20개) <br/>
                                &nbsp; &nbsp; : React + Mui의 유료 템플릿 이용, 템플릿 가이드에 맞춰서 UI 재세팅 <br/>
                                &nbsp; &nbsp; : CSS in JS 사용 <br/>
                                &nbsp; &nbsp; : Chart.js, Ag-Grid 커스텀 <br/>
                                •  특이사항  <br/>
                                &nbsp; &nbsp; : 유료 템플릿을 사용 <br/>
                                &nbsp; &nbsp; (사용 템플릿 : <a href='https://mui.com/store/previews/minimal-dashboard/' target="_blank"> https://mui.com/store/previews/minimal-dashboard/ </a>) <br/>
                                &nbsp; &nbsp; : 사용한 템플릿 전체 디자인 커스텀
                                </p>
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
                                <p className="name"><img src={skImg}/> <p>(2022.09 ~ 2024.06)</p></p>
                                <p className="summary">배터리 기술 직원 교육 LMS 웹 제작 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 60%)<br/>
                                &nbsp; &nbsp; : 신규페이지 및 수정 <br/>
                                &nbsp; &nbsp; : React, Mui, Ag-Grid 활용, 추가 페이지 작업<br/>
                                &nbsp; &nbsp; : 기타 이벤트 페이지, 및 메일 폼 작업<br/>
                                •  특이사항 <br/>
                                &nbsp; &nbsp; : 성적 및 채점 페이지 등 포멀하지 않은 페이지 작업<br/>
                                &nbsp; &nbsp; : 개발계 원격 작업 지원
                                </p>
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
                            <div className="project">
                                <p className="name"><img src={dongaImg}/> <p>(2023.05 ~ 2023.08)</p></p>
                                <p className="summary">도서 구독 관리 서비스 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 50%) <br/>
                                &nbsp; &nbsp; : React 사용, Metronic 라이브러리 커스텀 <br/>
                                •  특이사항  <br/>
                                &nbsp; &nbsp; : 개발자가 UI까지 선작업 한 내용 검토 후 어색한 UI를 디자인 없이 바로 수정 <br/>
                                &nbsp; &nbsp; : 작업자마다 className, 여백이나 글씨크기 등이 달라 규격화 및 정리
                                </p>
                                <div className="tool">
                                    Tools
                                    <div className="icon">
                                        <div className="html"/>
                                        <div className="css"/>
                                        <div className="sass"/>
                                        <div className="react"/>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p className="name"><img src={ndsImg}/> <p>(2023.06 ~ 2023.07)</p></p>
                                <p className="summary">디자인 시스템 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 100%) <br/>
                                &nbsp; &nbsp; : Figma 스타일가이드, 컴포넌트 디자인 <br/>
                                &nbsp; &nbsp; : 라이브러리 없이 UI 컴포넌트 구현<br/>
                                &nbsp; &nbsp; : Github로 베타 테스트 사이트 관리 및 API 가이드 체계화<br/>
                                &nbsp; &nbsp; 참고 링크 : <a target="_blank" href="https://nextreeui.github.io/nds-ui/">https://nextreeui.github.io/nds-ui/</a><br/>
                                &nbsp; &nbsp; 참고고 링크 :  <a target="_blank" href="https://nextreeui.github.io/Mockup1/">https://nextreeui.github.io/Mockup1/</a><br/>
                                •  특이사항 <br/>
                                &nbsp; &nbsp; : 디자인과 퍼블리싱을 모두 책임지며, 처음부터 끝까지 프로젝트의 방향성을 주도적으로 결정하고 실행<br/>
                                &nbsp; &nbsp; : 라이브러리를 활용하지 않고 UI 컴포넌트를 처음부터 설계하고 구현<br/>
                                &nbsp; &nbsp; : 개발자가 커스터마이징 가능하게 설계

                                </p>
                                <div className="tool">
                                    Tools
                                    <div className="icon">
                                        <div className="figma"/>
                                        <div className="git"/>
                                        <div className="html"/>
                                        <div className="css"/>
                                        <div className="sass"/>
                                        <div className="react"/>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p className="name"><img src={asanImg}/> <p>(2023.02 ~ 2023.06)</p></p>
                                <p className="summary">환자 교육 영상 웹 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 100%) <br/>
                                &nbsp; &nbsp; : 기존 페이지 뺴고 추가페이지만 새로 디자인 <br/>
                                &nbsp; &nbsp; : 기존 사이트 프레임워크를 React로 변경하는 작업 <br/>
                                •  특이사항  <br/>
                                &nbsp; &nbsp;: 라이브러리 없이 모든 컴포넌트 순수 구현 <br/>
                                &nbsp; &nbsp;: 추가 페이지는 기획자 없이 개발자와 의논해 바로 설계 및 디자인
                                </p>
                                <div className="tool">
                                    Tools
                                    <div className="icon">
                                        <div className="figma"/>
                                        <div className="git"/>
                                        <div className="html"/>
                                        <div className="css"/>
                                        <div className="sass"/>
                                        <div className="react"/>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <p className="name"><img src={ajImg}/> <p>(2022.09 ~ 2022.12)</p></p>
                                <p className="summary">영업지원 시스템 제작 </p>
                                <p className="desc">
                                •  업무 내용 (기여도 100%) <br/>
                                &nbsp; &nbsp; : PPT 화면 설계서 작업, 컨텐츠 플로우 설정 <br/>
                                &nbsp; &nbsp; : Figma 스타일가이드, UI 컴포넌트 관리 <br/>
                                &nbsp; &nbsp; : React + Vite를 활용한 UI 소스 세팅, 컴포넌트 관리,  <br/>
                                &nbsp; &nbsp; : Mui, Ag-Grid, Chart.js 등 라이브러리 커스텀 <br/>
                                &nbsp; &nbsp; : SCSS, Utility Class 사용 <br/>
                                •  특이사항  <br/>
                                &nbsp; &nbsp; : 기획부터 디자인 퍼블리싱까지 작업 <br/>
                                &nbsp; &nbsp; : 사이트 플로우를 화살표로 연결해나가면서, 기획 의도 명확히 표현
                                </p>
                                <div className="tool">
                                    Tools
                                    <div className="icon">
                                        <div className="figma"/>
                                        <div className="git"/>
                                        <div className="html"/>
                                        <div className="css"/>
                                        <div className="sass"/>
                                        <div className="react"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="career-wrap">
                        <div className="item">
                            <div className="title">
                                <div>넥스트리 (인턴) </div>
                                <div>2년 2개월 : 2020.07 ~ 2022.08</div>
                            </div>
                            <div className="contents">
                                <div className="project">
                                    <p className="name"><img src={tourImg}/> <p>2021.09 ~ 2022.03</p></p>
                                    <p className="summary">디지털 관광 콘텐츠 관리 웹 </p>
                                    <p className="desc">
                                    •  업무 내용 (기여도 30%) <br/>
                                    &nbsp; &nbsp; : 상세 페이지 디자인 및 보조 <br/>
                                    &nbsp; &nbsp; : 퍼블리싱 보조   <br/>
                                    •  특이사항  <br/>
                                    &nbsp; &nbsp; : 로고 변경 시 모든 페이지의 로고 반복 변경 작업 → 컴포넌트화 <br/>
                                    &nbsp; &nbsp; : 포토샵 방식 → 오토레이아웃 사용 <br/>
                                    &nbsp; &nbsp; : 비주얼 우선순위, 룩앤필, 톤앤매너 맞춰서 추가페이지 작업 <br/>
                                    &nbsp; &nbsp; : SCSS @for, $변수, @minin 활용
                                    </p>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="project">
                                    <p className="name"><img src={nomadianImg}/> <p>2021.12 ~ 2022.01</p></p>
                                    <p className="summary">재택근무 직원관리 서비스 </p>
                                    <p className="desc">
                                    •  업무 내용 (기여도 50%) <br/>
                                    &nbsp; &nbsp; : Figma, 스타일가이드, 컴포넌트, 상세페이지<br/>
                                    •  특이사항 <br/>
                                    &nbsp; &nbsp; : 제로베이스 프로젝트에서 UI 설계 및 스타일가이드 정립<br/>
                                    &nbsp; &nbsp; : 기획자 없이 디자인팀장이 직접 작성한 화면 설계서를 기반으로 작업 진행. 적극적 소통으로 설계 의도 파악 및 요구사항 반영
                                    </p>
                                    <div className="tool">
                                        Tools
                                        <div className="icon">
                                            <div className="figma"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="project">
                                    <p className="name"><img src={namoosoriImg}/> <p>2020.07 ~ 2024.10 </p></p>
                                    <p className="summary">개발자 교육 영상 </p>
                                    <p className="desc">
                                    •  업무 내용 <br/>
                                    &nbsp; &nbsp; 영상편집 (기여도 100%)  <br/>
                                    &nbsp; &nbsp; : 내부 직원 교육 영상 편집 <br/>
                                    &nbsp; &nbsp; : 인트로, 아웃트로 애니메이션 제작  <br/>
                                    &nbsp; &nbsp; (툴 : Premiere Pro, After Effect, Clip Studio, Blender 3D) <br/>
                                    &nbsp; &nbsp; 참고 링크 : https://www.youtube.com/@namoosori <br/>
                                    &nbsp; &nbsp; 영상 일러스트 소스 제작 (기여도 100%) <br/>
                                    &nbsp; &nbsp; : Clip Studio 툴을 이용하여, 액정 타블렛으로 일러스트 작업 <br/>
                                    &nbsp; &nbsp; 유튜브 운영 (기여도 80%) <br/>
                                    &nbsp; &nbsp; : 영상 썸네일 제작, 유튜브 페이지 배너 이미지 제작, 프로필 로고 제작 <br/>
                                    •  특이사항  <br/>
                                    &nbsp; &nbsp; : 편집 중 개발언어를 처음 접하여, 개발자와 교육 강사와 적극적 소통,  HTML, CSS, JS, 프레임워크, 라이브러리를 정확히 이해 후 영상 제작 <br/>
                                    &nbsp; &nbsp; : 영상 클릭율을 높일 수 있도록 강하고 눈에 잘 띄는 썸네일 제작 <br/>
                                    &nbsp; &nbsp; : 유튜브 배너, 로고 등 교육 브랜드 패키징
                                    </p>
                                    <div className="tool">
                                        Tools
                                        <div className="icon">
                                            <div className="figma"/>
                                            <div className="ps"/>
                                            <div className="ai"/>
                                            <div className="pr"/>
                                            <div className="ae"/>
                                            <div className="clip-studio"/>
                                            <div className="blender"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
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