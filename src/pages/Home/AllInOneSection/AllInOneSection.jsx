import { FiSearch } from 'react-icons/fi';
import { BsPeople, BsFillJournalBookmarkFill } from 'react-icons/bs';
import { PiGraduationCapFill } from 'react-icons/pi';
const AlInOneSection = () => {
    return (
        <div className='my-container'>
            <div>
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
            <div>

            </div>
        </div>
    );
};

export default AlInOneSection;