import React from 'react';
import Page from '../components/Page';
import CourseCards from '../components/CourseCards';
//@ts-ignore
import bg0Src from "../assets/bg0.png";
//@ts-ignore
import bg1Src from "../assets/bg1.png";
//@ts-ignore
import bg4Src from "../assets/bg4.png";
//@ts-ignore
import materialBgSrc from "../assets/material-bg.jpg";
import { useState } from 'react';


const courses = [
  {
    title: "Level 1（12节）",
    subtitle: "入门级课程",
    content: "孩子将学会超过30种程序语言中最常用的语法结构，语句，组件，和概念。在游戏设计课程中，孩子将学会如何用实例，赋值，函数等概念来创造旋转的3D星球，浩瀚的宇宙，和无尽的大海，让孩子充分发挥想象力；在APP课程中，孩子将学会操作谷歌设计的组件库，搭建自己生活中能够用到的，如时间管理器之类的软件工具，让孩子真正理解编程如何解决生活中的问题。",
    time: '学时：3个月',
    suit: '三年级及以上学生',
    imgSrc: bg0Src
  },
  {
    title: "Level 2（12节）",
    subtitle: "进阶级课程",
    content: "孩子将学会超过10种基础的“服务器编程”概念。在APP课程中，孩子将使用“文件上传和下载“接口来制作可以供全家上传照片的家庭云相册平台，以及拥有简单数据库和联网功能的家庭共享记事本APP。在游戏课中，孩子会把之前学到的3D引擎知识升华到开放式3D视角，从而构造沉浸感更强的3D世界，并在过程中培养更强的空间想象力。",
    time: '学时：3个月',
    suit: '适合三年级及以上完成L1课程的学生',
    imgSrc: bg1Src
  },
  {
    title: "Level 3（14节）",
    subtitle: "飞越级课程",
    content: "孩子将学会多个高级服务器编程概念，以及两门世界上最流行的程序语言 – JavaScript和Python的语法和语句。在APP课程中，孩子将学会用UDP通信接口来实现类似微信的即时聊天软件，以及能供多人同时在线对抗的小型“吃鸡”游戏。在课程的最后，我们会让孩子用JavaScript和Python把每节课做好的作品重新编写一次，从而实现和专业编程无缝对接。",
    time: '学时：4个月',
    suit: '适合三年级及以上完成L2课程的学生',
    imgSrc: bg4Src
  },
  // {
  //   title: "Level 3 （12-16节）",
  //   subtitle: "进阶级课程",
  //   content: "拥有工程思维的孩子面对任何困难都不会慌，因为工程思维的本质就是如何将大到无法解决的问题分解成可以各个击破的小目标。Level 3 的课程将教会孩子工程的最佳实践 – 如何最大化代码和资源的可重复利用性，如何组织一个复杂的系统，以及如何使用正确的工具来解决正确的问题。",
  //   time: '学时：3-6个月',
  //   suit: '适合三年级及以上完成L2课程的学生',
  //   imgSrc: bg3Src
  // },
  // {
  //   title: "Level 4 (20-40节)",
  //   subtitle: "飞越级课程",
  //   content: "",
  //   time: '学时：3-6个月',
  //   suit: '适合三年级及以上完成L1-L3课程的学生',
  //   imgSrc: bg4Src
  // }
]

const CoreCourses: React.FC<{ pageRef: any, bgColor: any, textColor: any }> = (props) => {

  return (
    <Page
     className="z-20"
     pageRef={props.pageRef}
     background={props.bgColor}
     background2={`url(${materialBgSrc})`}
     insert={(
      <div className="w-full h-full absolute" style={{
        background: "linear-gradient(to bottom, rgba(65,172,205,1), rgba(62,158,187,0) 10%, rgba(45,45,45,1))"
      }} />
    )}
    >
      <div className="w-full p-6 text-white mb-20">
            {/* <div className="w-3/5 p-6 rounded-lg shadow-lg  border-white bg-white"> */}
            <p className="text-3xl sm:text-4xl font-bold text-center">凌高编程课程体系</p>
            <p className="text-2xl text-center">对标美国CSTA K12计算机科学标准</p>
            <p className="text-xl text-center">采用PBL项目制教学法，注重实用，启发、沉浸、完善你的学习</p>
            {/* </div> */}
      </div>
      <h2
       className="text-2xl sm:text-3xl opacity-75 mb-10 text-center font-bold transition-1000 change-opacity"
       style={{ color: props.textColor }}
      >
        核心基础课程
        <br />
        <span className='text-xl sm:text-2xl'>
          LEVEL1 - LEVEL3
        </span>
      </h2>
        <CourseCards courses={courses}  />
    </Page>
  )
}
export default CoreCourses