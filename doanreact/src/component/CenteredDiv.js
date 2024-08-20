import React from 'react';
import './CenteredDiv.css'; // Tạo một file CSS để áp dụng style

const CenteredDiv = () => {
    return (
        <div className='centered-div'>
            <div className='flex w-full  h-full bg-black bg-opacity-80 backdrop-blur-sm'>
                <div className='w-80 h-full '> <img
                    src="/image/picture.jpg"
                    alt="Description"
                    className="w-full h-full object-cover"
                /></div>
                <div className="flex-1 flex flex-col p-4">
                    <h3 className='text-4xl font-sans text-left uppercase text-customGray '>Interstellar</h3>
                    <div>
                        <TitleandText
                            title="Mankind was born on Earth. It was never meant to die here."
                            text="The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
                            titleColor="#00FC87"
                            textColor="#FFFFFF"
                        />
                        <div>
                            <TitleandText
                                title="Adventure, Drama, Science Fiction"
                                text="Legendary Pictures, Syncopy, Lynda Obst Productions"
                                titleColor="#00FC87"
                                textColor="#FFFFFF"
                            />
                            <div className='flex flex-wrap gap-4'>
                                <TitleandText
                                    title="Original Release:"
                                    text="2014-11-05"
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Running Time:"
                                    text="169 mins"
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Box Office:"
                                    text="$701,729,206"
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title="Vote Average:"
                                    text="8.439 / 10"
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
function TitleandText({ title, text, titleColor = '#00FC87', textColor = '#FFFFFF' }) {
    return (
        <div className='mt-4'>
            <h3
                className="text-xl font-sans text-left"
                style={{ color: titleColor }}
            >
                {title}
            </h3>
            <p className="text-base font-sans text-left" style={{ color: textColor }}>
                {text}
            </p>
        </div>
    );
}
export default CenteredDiv;