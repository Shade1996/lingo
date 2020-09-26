import React, { useRef, useEffect, useMemo } from 'react';
import { Dialog, Fab } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import tossable from "tossable";
import { mapRange } from '@lincode/math';
import { useCallback } from 'react';
import VisibilityDetector from './VisibilityDetecor';
//@ts-ignore
import { tween } from "shifty";
import useWindowWidth from '../utils/useWindowWidth';
import LevelModal from './modals/LevelModal';
//@ts-ignore
import csta1Src from '../assets/ipad3.jpg'
import { useState } from 'react';



function mapX(x: number): number {
  if (x < 0) return x * mapRange(x, 0, -250, 1, 6)
  return x
}

function mapZ(z: number): number {
  return mapRange(z, -60, -120, 0, 100)
}

function index2pos(x: number) {
  return -53.3 * x - 1;
}

function pos2index(x: number) {
  return Math.max(Math.round(-0.01875889 * x - 0.01845621), 0);
}

type Course = {
  title: string,
  subtitle: string,
  content?: string,
  time?: string,
  suit?: string,
  imgSrc?: string
};

const CourseCards: React.FC<{
  dark?: boolean,
  courses: Array<Course>
  isAdvanced?: boolean

}> = props => {
  const [openModalA, setOpenModalA] = useState(false)
  const [openModalB, setOpenModalB] = useState(false)
  const [openModalC, setOpenModalC] = useState(false)

  const containerRef = useRef<any>();
  const indexRef = useRef(0);
  const xRef = useRef(0);
  const cardElements = useMemo(() => new Array<HTMLElement>(), []);
  const windowWidth = useWindowWidth();
  const tossableHandleRef = useRef<any>();

  const nextCard = useCallback(() => {
    if (indexRef.current + 1 >= cardElements.length)
      return;

    tween({
      from: { val: xRef.current },
      to: { val: index2pos(indexRef.current + 1) },
      duration: 500,
      step: (state: any) => tossableHandleRef.current.set(state.val),
      easing: "easeInOutQuad"
    });

  }, []);

  const prevCard = useCallback(() => {
    if (indexRef.current - 1 < 0)
      return;

    tween({
      from: { val: xRef.current },
      to: { val: index2pos(indexRef.current - 1) },
      duration: 500,
      step: (state: any) => tossableHandleRef.current.set(state.val),
      easing: "easeInOutQuad"
    });

  }, []);

  const setCardElement = useCallback((el: HTMLDivElement | null) => {
    if (el) cardElements.push(el);
  }, []);

  useEffect(() => {
    const handle = tossable({
      touchTarget: containerRef.current,
      min: index2pos(props.courses.length - 1),
      max: 0,
      start: 0,
      current: () => xRef.current,
      speed: 0.2,
      bounceStiffness: 100,
      step: val => {
        xRef.current = val;
        indexRef.current = Math.min(pos2index(val), props.courses.length);

        const pos = val - 50;
        for (let i = 0; i < cardElements.length; ++i) {
          const cardEl = cardElements[i];
          cardEl.style.transform = `translate3d(${mapX(pos + i * 50)}px, 0px, ${mapZ(pos) - i * 100}px)`;
        }
      }
    });

    tossableHandleRef.current = handle;

    return () => {
      handle.cancel();
    };
  }, []);

  const cardHeight = 450;

  return (
    <div>
    <VisibilityDetector>
      {visible => (
        <div className="w-full" ref={containerRef}>
          <div className="mx-auto" style={{ width: 295, height: cardHeight }}>
            <div className="transition-1000 change-opacity change-transform" style={{
              height: cardHeight - 100,
              perspective: "1000px",
              perspectiveOrigin: "500% 50%",
              marginLeft: 85,
              transform: visible ? "scale(1)" : "scale(0.75)",
              opacity: visible ? 1 : 0
            }} 
            // onClick={()=>{
            //     if (indexRef.current==0) {
            //       setOpenModalA(true)
            //     } else if (indexRef.current==1) {
            //       setOpenModalB(true)
            //     }  else if (indexRef.current==2) {
            //       setOpenModalC(true)
            //     }
            //   }}
              >
              {props.courses.map((c, i) => (
                <div key={i} ref={setCardElement} style={{
                  position: "absolute",
                  zIndex: props.courses.length - i
                }}>
                  <div className="shadow-2xl p-10 bg-cover bg-center rounded overflow-hidden text-white" style={{
                    width: 295,
                    height: cardHeight,
                    backgroundImage: c.imgSrc ? `url(${c.imgSrc})` : ""
                  }}>
                    <div className="absolute w-full h-full bg-black inset-0" style={{
                      opacity: props.dark ? 0.5 : 0.1
                    }} />
                    <div className="font-bold">{c.title}</div>
                    <div className='font-bold text-2xl my-4'>{c.subtitle}</div>
                    <div className="text-sm">{c.content}</div>
                    {props.isAdvanced ? (
                      <div className='absolute bottom-0 mb-10'  >
                        <div className="text-sm opacity-50">即将发布 敬请期待</div>
                      </div>
                    ) : (
                      <div className='absolute bottom-0 mb-10'  >
                        <div className="text-sm mb-1">{c.time}</div>
                        <div className="text-sm ">{c.suit}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="font-normal text-sm opacity-25 text-center text-white mt-5 sm:mt-10">
            （左右滑动查看）
          </div>
          {windowWidth > 640 && (
            <>
              <Fab color="primary" onClick={nextCard} style={{
                position: "absolute",
                right: '5%',
                top: '45%'
              }}>
                <ArrowForwardIcon />
              </Fab>
              <Fab color="primary" onClick={prevCard} style={{
                position: "absolute",
                left: '5%',
                top: '45%'
              }} >
                <ArrowBackIcon />
              </Fab>
            </>
          )}
        </div>
      )}
    </VisibilityDetector>
    <Dialog className="levelModal" fullScreen open={openModalA} onClose={() => setOpenModalA(false)}>
        <LevelModal onCloseModal={() => setOpenModalA(false)}>
          <img className="w-full md:w-1/2 rounded-lg" src={csta1Src}/>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 p-8 break-normal tracking-wide">
            <p className="text-center font-bold text-2xl text-white bg-black mb-10 rounded-lg">Level 1 入门级课程</p>
            <div className="grid grid-cols-4 gap-2">
              <p>总课时</p>
              <p>每课用时</p>
              <p>学时</p>
              <p>上课频次</p>
              <p>12节</p>
              <p>60分钟</p>
              <p>3个月</p>
              <p>一周一次</p>
            </div>
            <p className="font-bold">学习目标：</p>
            <p>在Level1的课程中，孩子能学会如何使用平台提供的编程接口来操纵“程序”这一极其复杂的工具，来解决现实生活和游戏世界里的种种问题。</p>
            <p className="font-bold">学习成果：</p>
            <p>1. 学到基本的编程知识：变量和函数、事件和流程控制等；</p>
            <p>2. 学完后可独立制作单人游戏和如计算器工具类APP；</p>
            <p className="text-blue-700">适合：三年级及以上的学生</p>
          </div>
        </LevelModal>
      </Dialog>
      <Dialog className="levelModal" fullScreen open={openModalB} onClose={() => setOpenModalB(false)}>
        <LevelModal onCloseModal={() => setOpenModalB(false)}>
          <img className="w-full md:w-1/2" src={csta1Src} />
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 p-8 break-normal tracking-wide">
            <p className="text-center font-bold text-2xl text-white bg-black mb-10 rounded-lg">Level 2 进阶级课程（12节）</p>
            <div className="grid grid-cols-4 gap-2">
              <p>总课时</p>
              <p>每课用时</p>
              <p>学时</p>
              <p>上课频次</p>
              <p>12节</p>
              <p>60分钟</p>
              <p>3个月</p>
              <p>一周一次</p>
            </div>
            <p className="font-bold">学习目标：</p>
            <p>Level 2 的课程将教会孩子运用“工程思维‘进行实践 – 如何最大化代码和资源的可重复利用性，如何组织一个复杂的系统，以及如何使用正确的工具来解决正确的问题。</p>
            <p>适合：三年级及以上完成L1课程的学生</p>
            <p className="font-bold mt-10">学习成果：</p>
            <p>1. 学到基本的面向对象编程知识：类型；</p>
            <p>2. 学完后可独立制作复杂的单人游戏和有存储功能的工具类APP；</p>
            <p>3. 可参加应用性创新大赛，Technovation等国际大赛；</p>
          </div>
        </LevelModal>
      </Dialog>
      <Dialog className="levelModal" fullScreen open={openModalC} onClose={() => setOpenModalC(false)}>
        <LevelModal onCloseModal={() => setOpenModalC(false)}>
          <img className="w-full md:w-1/2" src={csta1Src} />
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 p-8 break-normal tracking-wide">
            <p className="text-center font-bold text-2xl text-white bg-black mb-10 rounded-lg">Level 3 飞越级课程（16节）</p>
            <div className="grid grid-cols-4 gap-2">
              <p>总课时</p>
              <p>每课用时</p>
              <p>学时</p>
              <p>上课频次</p>
              <p>16节</p>
              <p>60分钟</p>
              <p>4个月</p>
              <p>一周一次</p>
            </div>
            <p className="font-bold">学习目标：</p>
            <p>在Level3中，孩子会将自己在前面的课程中学会的编程知识应用到Javascript和Python – 两门全球使用人数最多的程序语言，并学会如何用正确的英语词汇来描述这些概念，以便达到和全球编程达人交流协作的目的。</p>
            <p>适合：三年级及以上完成L2课程的学生</p>
            <p className="font-bold mt-6">学习成果：</p>
            <p>1. 无缝对接学会Javascript和Python；</p>
            <p>2. 学完后可独立制作复杂的多人作战游戏和通信功能的APP；</p>
            <p>3. 可参加应用性创新大赛，ISEF国际科学与工程大奖赛等国际大赛；</p>
          </div>
        </LevelModal>
      </Dialog>
    </div>
    
  )
};
export default CourseCards;