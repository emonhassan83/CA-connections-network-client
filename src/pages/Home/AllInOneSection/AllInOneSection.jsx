/* eslint-disable react/no-unescaped-entities */
import { FiSearch } from 'react-icons/fi';
import { BsPeople, BsFillJournalBookmarkFill } from 'react-icons/bs';
import { PiGraduationCapFill } from 'react-icons/pi';
import img1 from '../../../assets/section_img/section-img1.png'
import img2 from '../../../assets/section_img/section-img2.png'
import './AllInOneSection.css'

const AlInOneSection = () => {
    return (
        <div className='my-container md:flex items-start justify-center gap-10 relative mt-[132px]'>
            <div className='md:w-[55%]'>
                <h2  className="text-[65px] font-bold leading-[80px]"><span className="gradient-text">All-in-One</span> platform that Makes Easier</h2>
                <p className="mt-[14px]">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>

                <div className='sm:flex gap-4'>
                    <div className='flex items-center gap-4'>
                        <FiSearch className='w-10 h-10'/>
                        <p><span>SEARCH</span> for vital company information </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BsPeople className='w-10 h-10'/>
                        <p><span>CONNECT</span> with the resources to meet your business needs</p>
                    </div>
                </div>
                <div className='sm:flex gap-4 mt-4'>
                <div className='flex items-center gap-4'>
                        <BsFillJournalBookmarkFill className='w-10 h-10'/>
                        <p><span>RESEARCH</span> and generate reports that drive growth </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <PiGraduationCapFill className='w-10 h-10'/>
                        <p><span>ACADEMY</span> to give you the skills for success in your career</p>
                    </div>
                </div>
            </div>

            <div className='md:w-[45%]'>
                <div className='flex items-center justify-center gap-4'>
                    <div className=''>
                        <p className='chat_bubble_pink'>Hey, check out loreumipsum services.</p>
                        <p className='chat_bubble_pink my-2'>I learned from their videos, got my first job.</p>
                        <p className='chat_bubble_pink mb-7'>You won't be disappointed with their services.</p>
                        <p className='chat_bubble_sky my-2'>I got a perfect analysis report from them too</p>
                        <p className='chat_bubble_sky'>Oh, that's great.</p>
                    </div>
                <img className='w-[270px]' src={img1} alt="" />
                </div>
                <img className='w-[270px]' src={img2} alt="" />
            </div>
        </div>
    );
};
export default AlInOneSection;