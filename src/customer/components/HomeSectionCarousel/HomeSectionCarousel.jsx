import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../homesectioncard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';

export const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
    return (
        <div className='px-4 lg:px-8 '>
            <div className='relative p-5'>
                <AliceCarousel

                    items={items}
                    disableButtonsControls
                    // autoPlay
                    // autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}

                />
                {activeIndex !== items.length - 5 && <Button Button variant="contained"
                    className="z-50 bg-white"
                    onClick={slideNext}
                    sx={{
                        position: 'absolute', top: "8rem",
                        right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                    }}
                    aria-label='next'

                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
                <Button variant="contained"
                    className="z-50 bg-white"
                    onClick={slidePrev}
                    sx={{
                        position: 'absolute', top: "8rem",
                        left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white"
                    }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
            </div>
        </div >
    )
}
