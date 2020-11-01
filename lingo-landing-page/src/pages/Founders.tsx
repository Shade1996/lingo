import React from 'react'
import Page from '../components/Page'
//@ts-ignore
import candySrc from '../assets/candy.jpg'
//@ts-ignore
import xuelaiSrc from '../assets/xuelai.jpg'
//@ts-ignore
import hyunkiSrc from '../assets/li.jpg'
//@ts-ignore
import yeSrc from '../assets/ye.jpg' 
//@ts-ignore
import boySrc from '../assets/voxel.jpg'
import NameCard from '../components/NameCard'
import NB from '../components/nb'
import strings from '../utils/localization'

const Founders: React.FC<{ pageRef: any, bgColor: string, textColor: string }> = (props) => {
  return (
    <Page
      pageRef={props.pageRef}
      background={props.bgColor}
      background2={`url(${boySrc})`}
      useFooter
      insert={(
        <div className="w-full h-full absolute" style={{
          background: "linear-gradient(to bottom, rgb(14,124,121), rgba(51,50,74, 0))"
        }} />
      )}
    >
      <div style={{ maxWidth: 640 }} className='text-white mx-auto mb-20 sm:mb-10'>
        <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold mb-4">
          真编程，学得会{strings.founders1}
        </h1>
        <span className="text-2xl sm:text-4xl text-center  sm:text-left font-bold mb-4">“</span>
        <span className='text-sm'>对于中国的孩子们来说，初学编程最大的挑战是识别和回忆复杂的英文关键词。我们曾多次见到许多原本很喜欢图形化编程的孩子，在进阶到Python等文字化“真编程”之后，由于总是拼写不出(或回忆不起)正确的英文指令而产生强烈挫败感，从而放弃学习编程。经过在多所机构和学校中面对着真实的孩子长时间反复试错和打磨，凌高编程的在线教育平台可以很大程度解决这个痛点：通过使用汉语拼音学会文字编程的操作方式、调试最佳实践、和思维模型，并在课程的最后再学习如何用英文编写同样的程序，孩子们学习编程的难度曲线会变得平缓。希望在我们的平台上，每个孩子都能学有所得，学以致用。</span><span className="text-2xl sm:text-4xl text-center sm:text-left font-bold mb-4">”</span>
      </div>
      <NameCard name="薛来" position="创始人 & CEO" imgSrc={xuelaiSrc}>
        <div className="mt-2 sm:mt-0">• 曾就职于英特尔亚太研发中心系统优化工程师</div>
        <div className="mt-2 sm:mt-0">• 曾担任全球青少年创意行动挑战赛DFC评委和全国青少年科技创新大赛总决赛评委</div>
        <div className="mt-2 sm:mt-0">• 全球顶级科创竞赛英特尔国际科学与工程大赛<NB>(Intel ISEF)一等奖，</NB><NB>计算机类别最佳奖得主</NB></div>
        <div className="mt-2 sm:mt-0">• ISEF欧盟青年科学家奖(European Union Contest for Young Scientists)得主</div>
        <div className="mt-2 sm:mt-0">• 2009-2010凤凰卫视影响世界华人盛典希望之星奖得主</div>
        <div className="mt-2 sm:mt-0">• 曾担任东方卫视《少年爱迪生》梦想导师</div>
      </NameCard>


      <NameCard name="刘乐" position="联合创始人" imgSrc={candySrc}>
        <div className="mt-2 sm:mt-0">• 英国牛津大学硕士</div>
        <div className="mt-2 sm:mt-0">• 拥有超过10年市场营销经验，<NB>曾在LVMH集团、</NB>Pepsi、L'Oréal等500强外企<NB>任职</NB></div>
      </NameCard>

      <NameCard name="叶蓉" position="课程教学总监" imgSrc={yeSrc}>
        <div className="mt-2 sm:mt-0">• 归国博士，教育教学论教授，高校教龄35年</div>
        <div className="mt-2 sm:mt-0">• 曾任教于国内三所及欧洲两所知名大学，培育海内外教师逾千人</div>
        <div className="mt-2 sm:mt-0">• 2012年荣获上海市育才奖。2020年加盟凌高编程</div>
      </NameCard>
      <div className='mt-24 pb-10' />

    </Page>
  )
}

export default Founders