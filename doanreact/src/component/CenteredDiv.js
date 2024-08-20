import React from 'react';
import './CenteredDiv.css'; // Tạo một file CSS để áp dụng style

const CenteredDiv = () => {
    return (

        <div className='w-screen h-screen custom-gradient '>
            <div className=' h-screen custom-container'>
                <div className='w-full h-32 grid grid-cols-2 gap-4 content-center'>
                    <div className=''>
                        <img
                            src="/image/tmdb.svg"
                            alt="Description"
                            className="w-36 h-36"
                        />
                    </div>
                    <div>
                        <div class="col-span-2 relative z-30 text-base text-black mt-10 ">
                            <input type="text" value="" placeholder="Keyword" class="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full" />
                            <div class="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
                            </div>
                        </div>

                    </div>
                </div>
                <Center />

            </div>
        </div>

    );
}

const movie = {
    id: 1,
    title: "Interstellar",
    description: {
        title: "Mankind was born on Earth. It was never meant to die here.:",
        description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
    },
    type: {
        title: "Adventure, Drama, Science Fiction",
        description: "Legendary Pictures, Syncopy, Lynda Obst Productions"
    },
    originalRelease: {
        title: "Orignal Release:",
        description: "2014-11-15"
    },
    runtime: {
        title: "Runtime:",
        description: "169 min"
    },
    boxxOffice: {
        title: "Box Office:",
        description: "$165,000,000"
    },
    VoteAvegare: {
        title: "Vote Average:",
        description: "8.439"
    }
}

function Center() {
    return (

        <div className='centered-div'>
            <div className='flex w-full  h-full bg-black bg-opacity-80 backdrop-blur-sm'>
                <div className='w-80 h-full '> <img
                    src="/image/picture1.jpg"
                    alt="Description"
                    className="w-full h-full object-cover"
                /></div>
                <div className="flex-1 flex flex-col p-4">
                    <h3 className='text-4xl font-sans text-left uppercase text-customGray '>Interstellar</h3>
                    <div>
                        <TitleandText
                            title={movie.description.title}
                            text={movie.description.description}
                            titleColor="#00FC87"
                            textColor="#FFFFFF"
                        />
                        <div>
                            <TitleandText
                                title={movie.type.title}
                                text={movie.type.description}
                                titleColor="#00FC87"
                                textColor="#FFFFFF"
                            />
                            <div className='grid grid-cols-2 gap-4'>
                                <TitleandText
                                    title={movie.originalRelease.title}
                                    text={movie.originalRelease.description}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title={movie.runtime.title}
                                    text={movie.runtime.description}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title={movie.boxxOffice.title}
                                    text={movie.boxxOffice.description}
                                    titleColor="#FFFFFF"
                                    textColor="#00FC87"
                                />
                                <TitleandText
                                    title={movie.VoteAvegare.title}
                                    text={movie.VoteAvegare.description}
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
    )
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