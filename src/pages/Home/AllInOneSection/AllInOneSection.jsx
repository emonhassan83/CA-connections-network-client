/* eslint-disable react/no-unescaped-entities */
import { FiSearch } from 'react-icons/fi';
import { BsPeople, BsFillJournalBookmarkFill } from 'react-icons/bs';
import { PiGraduationCapFill } from 'react-icons/pi';
import img1 from '../../../assets/section_img/section-img1.png'
import img2 from '../../../assets/section_img/section-img2.png'
import './AllInOneSection.css'

const AlInOneSection = () => {
    return (
        <div className='my-container lg:flex items-start justify-center gap-20 relative my-[132px]'>
            <div className='lg:w-[50%] mt-6'>
                <h2  className="text-3xl sm:text-5xl md:text-[65px] font-bold sm:leading-[80px] leading-10"><span className="gradient-text">All-in-One</span> platform that Makes Easier</h2>
                <p className="mt-[14px] text-base sm:text-xl md:text-2xl font-medium">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals.</p>

                <div className='sm:flex gap-10 my-12 w-full'>
                    <div className='flex items-center gap-4 mx-auto'>
                        <FiSearch className='w-10 h-10 sm:w-16 sm:h-16 text-[#0076CE]'/>
                        <p className='text-lg sm:text-xl'><span className='font-bold'>SEARCH</span> for vital <br /> company <br /> information </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BsPeople className='w-10 h-10 sm:w-16 sm:h-16 text-[#0076CE]'/>
                        <p className='text-lg sm:text-xl'><span className='font-bold'>CONNECT</span> with the <br /> resources to meet <br /> your business needs</p>
                    </div>
                </div>
                <div className='sm:flex gap-4 mt-8 w-full'>
                <div className='flex items-center gap-4 mx-auto'>
                        <BsFillJournalBookmarkFill className='w-10 h-10 sm:w-16 sm:h-16 text-[#0076CE]'/>
                        <p className='text-lg sm:text-xl'><span className='font-bold'>RESEARCH</span> and <br /> generate reports <br /> that drive growth </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <PiGraduationCapFill className='w-10 h-10 sm:w-16 sm:h-16 text-[#0076CE]'/>
                        <p className='text-lg sm:text-xl'><span className='font-bold'>ACADEMY</span> to give you <br /> the skills for success <br /> in your career</p>
                    </div>
                </div>
            </div>

            <div className='mt-10 lg:mt-0 lg:w-[45%]'>
                <div className='sm:flex flex-row-reverse items-center justify-center gap-4'>
                <img className='w-[270px] bg_img_one' src={img1} alt="" />
                    <div className=''>
                        <p className='chat_bubble_pink whitespace-nowrap'>Hey, check out loreumipsum services.</p>
                        <p className='chat_bubble_pink my-2 whitespace-nowrap'>I learned from their videos, got my first job.</p>
                        <p className='chat_bubble_pink mb-7 whitespace-nowrap'>You won't be disappointed with their services.</p>
                        <p className='chat_bubble_sky my-2 whitespace-nowrap'>I got a perfect analysis report from them too</p>
                        <p className='chat_bubble_sky whitespace-nowrap'>Oh, that's great.</p>
                    </div>
                </div>
                <img className='w-[270px] bg_img_two' src={img2} alt="" />
            </div>
        </div>
    );
};
export default AlInOneSection;