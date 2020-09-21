import React from 'react';
import Page from '../components/Page';
import CourseCards from '../components/CourseCards';
//@ts-ignore
import bg0Src from "../assets/bg0.png";
//@ts-ignore
import bg1Src from "../assets/bg1.png";
//@ts-ignore
import bg2Src from "../assets/bg2.png";
//@ts-ignore
import bg3Src from "../assets/bg3.png";
//@ts-ignore
import bg4Src from "../assets/bg4.png";
//@ts-ignore
import materialBgSrc from "../assets/material-bg.jpg";
import { useState } from 'react';
//@ts-ignore
import csta1Src from '../assets/csta1.jpg'

import LevelModal  from '../components/modals/LevelModal'
import { Dialog } from '@material-ui/core';

const courses = [
  {
    title: "Level 1（12节）",
    subtitle: "入门级课程",
    content: "孩子成长的过程中，使用工具解决问题的能力至关重要，而编程恰好是培养这种能力的绝佳途径。在Level 1的课程中，孩子能学会如何使用平台提供的编程接口来操纵“程序”这一极其复杂的工具，来解决现实生活和游戏世界里的种种问题。",
    time: '学时：3个月',
    suit: '三年级及以上学生',
    imgSrc: bg0Src
  },
  {
    title: "Level 2（12节）",
    subtitle: "进阶级课程",
    content: "拥有工程思维的孩子面对任何困难都不会慌，因为工程思维的本质就是如何将大到无法解决的问题分解成可以各个击破的小目标。Level 2 的课程将教会孩子工程的最佳实践 – 如何最大化代码和资源的可重复利用性，如何组织一个复杂的系统，以及如何使用正确的工具来解决正确的问题。",
    time: '学时：3个月',
    suit: '适合三年级及以上完成L1课程的学生',
    imgSrc: bg1Src
  },
  {
    title: "Level 3（16节）",
    subtitle: "飞越级课程",
    content: "要想成为出色的工程师，必须掌握和团队沟通的核心能力，因为世界上绝大多数伟大事物都是团队协作的成果。在Level 3中，孩子会将自己在前面的课程中学会的编程知识应用到Javascript和Python – 两门全球使用人数最多的程序语言，并学会如何用正确的英语词汇来描述这些概念，以便达到和全球编程达人交流协作的目的。",
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