

import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../homesectioncard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 1 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            bgcolor: 'white',
                        }}
                        aria-label='next'
                    >
                        <KeyboardArrowRightIcon sx={{ color: 'black' }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            bgcolor: 'white',
                        }}
                        aria-label='prev'
                    >
                        <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

