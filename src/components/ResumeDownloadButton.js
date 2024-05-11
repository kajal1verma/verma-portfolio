import React from 'react';
// import kajal from '../resume/kajal.pdf'
import '../css/style.css'
const ResumeDownloadButton = () => {
    const handleDownload = () => {
        // Replace 'your_resume_path.pdf' with the actual path to your resume file
        const resumeUrl = 'resume/kajal.pdf';
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.download = 'kajal_resume.pdf';
        anchor.click();
    };

    return (
        <button className='button' onClick={handleDownload}>
            Download Resume
        </button>
    );
};

export default ResumeDownloadButton;