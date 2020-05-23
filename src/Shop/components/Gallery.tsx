import React, { useEffect, useCallback } from 'react';
import '../styles/gallery.css';

import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.png';

const Gallery: React.FC = (): JSX.Element => {
    const autoPlay = useCallback(() => {
        const activeClass = document.querySelectorAll('#myCarousel li');
        const item = document.getElementById('myCarousel') as HTMLElement;
        const inner = item.getElementsByClassName('carousel-inner')[0] as HTMLElement;
        const activeItem = inner.querySelectorAll('.item');

        const test = inner.getElementsByClassName('active')[0];
        const activeIndex = Array.from(activeItem).indexOf(test);
        const nextIndex = activeIndex + 1;
        
        for (let i = 0; i < activeClass.length; i++) {
            activeClass[i].classList.remove('active');
        }

        if(activeClass) {
            for (let i = 0; i < activeItem.length; i++) {
                activeItem[i].classList.remove('active');
            }

            if (nextIndex === activeItem.length) {
                let checkedIndex = nextIndex - activeItem.length;
                const next = document.getElementsByClassName('item')[checkedIndex] as HTMLElement;
                const currentClass = document.getElementsByClassName('indicators')[checkedIndex] as HTMLElement;

                next.classList.add('active');
                currentClass.classList.add('active');
            } else {
                const next = document.getElementsByClassName('item')[nextIndex] as HTMLElement;
                const currentClass = document.getElementsByClassName('indicators')[nextIndex] as HTMLElement;

                next.classList.add('active');
                currentClass.classList.add('active');
            }
        }
        setTimeout(autoPlay, 5000);
    },[]);

    useEffect(() => {
        const ac = new AbortController();
        // autoPlay();

        return function cleanup(): void {
            ac.abort();
        };
    }, []);

    const changeSlide = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
        e.preventDefault();

        const activeIndex = Number(e.currentTarget.dataset.slideTo);
        const activeClass = document.querySelectorAll('#myCarousel li');
        const item = document.getElementById('myCarousel') as HTMLElement;
        const inner = item.getElementsByClassName('carousel-inner')[0] as HTMLElement;
        const activeItem = inner.querySelectorAll('.item');

        const currentClass = document.getElementsByClassName('indicators')[activeIndex] as HTMLElement;
        const currentItem = document.getElementsByClassName('item')[activeIndex] as HTMLElement;
        
        for (let i = 0; i < activeClass.length; i++) {
            activeClass[i].classList.remove('active');
        }
        currentClass.classList.add('active');

        if (activeClass) {
            for (let i = 0; i < activeItem.length; i++) {
                activeItem[i].classList.remove('active');
            }
            currentItem.classList.add('active');
        }
    }

    const previous = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();

        const activeClass = document.querySelectorAll('#myCarousel li');

        const item = document.getElementById('myCarousel') as HTMLElement;
        const inner = item.getElementsByClassName('carousel-inner')[0] as HTMLElement;
        const activeItem = inner.querySelectorAll('.item');

        const test = inner.getElementsByClassName('active')[0];
        const activeIndex = Array.from(activeItem).indexOf(test);
        const prevIndex = activeIndex - 1;

        for (let i = 0; i < activeClass.length; i++) {
            activeClass[i].classList.remove('active');
        }
        
        if(activeClass) {
            for (let i = 0; i < activeItem.length; i++) {
                activeItem[i].classList.remove('active');
            }

            if (prevIndex === -1) {
                let checkedIndex = prevIndex + activeItem.length;
                const prev = document.getElementsByClassName('item')[checkedIndex] as HTMLElement;
                const currentClass = document.getElementsByClassName('indicators')[checkedIndex] as HTMLElement;

                prev.classList.add('active');
                currentClass.classList.add('active');
            } else {
                const prev = document.getElementsByClassName('item')[prevIndex] as HTMLElement;
                const currentClass = document.getElementsByClassName('indicators')[prevIndex] as HTMLElement;

                prev.classList.add('active');
                currentClass.classList.add('active');
            }
        }
    }

    const next = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();

        const activeClass = document.querySelectorAll('#myCarousel li');
        const item = document.getElementById('myCarousel') as HTMLElement;
        const inner = item.getElementsByClassName('carousel-inner')[0] as HTMLElement;
        const activeItem = inner.querySelectorAll('.item');

        const test = inner.getElementsByClassName('active')[0];
        const activeIndex = Array.from(activeItem).indexOf(test);
        const nextIndex = activeIndex + 1;
        
        for (let i = 0; i < activeClass.length; i++) {
            activeClass[i].classList.remove('active');
        }

        if(activeClass) {
            for (let i = 0; i < activeItem.length; i++) {
                activeItem[i].classList.remove('active');
            }

            if (nextIndex === activeItem.length) {
                let checkedIndex = nextIndex - activeItem.length;
                const next = document.getElementsByClassName('item')[checkedIndex] as HTMLElement;
                const currentClass = document.getElementsByClassName('indicators')[checkedIndex] as HTMLElement;

                next.classList.add('active');
                currentClass.classList.add('active');
            } else {
                const next = document.getElementsByClassName('item')[nextIndex] as HTMLElement;
                const currentClass = document.getElementsByClassName('indicators')[nextIndex] as HTMLElement;

                next.classList.add('active');
                currentClass.classList.add('active');
            }
        }
    }
  
    return (
        <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="indicators active" onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => changeSlide(e)}></li>
                <li data-target="#myCarousel" data-slide-to="1" className="indicators" onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => changeSlide(e)}></li>
                <li data-target="#myCarousel" data-slide-to="2" className="indicators" onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => changeSlide(e)}></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active" id="img0">
                    <div className="fill" style={{ backgroundImage: `url(${img1})` }}></div>
                    <div className="carousel-caption">
                        <h2 className="animated fadeInLeft">Caption Animation</h2>
                        <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <p className="animated fadeInUp"><a href="#shop1" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
                    </div>
                </div>
                <div className="item" id="img1">
                    <div className="fill" style={{ backgroundImage: `url(${img2})` }}></div>
                    <div className="carousel-caption">
                        <h2 className="animated fadeInDown">Caption Animation</h2>
                        <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <p className="animated fadeInUp"><a href="#shop2" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
                    </div>
                </div>
                <div className="item" id="img2">
                    <div className="fill" 
                    style={{ backgroundImage: `url(${img3})` }}
                    >
                    </div>
                    <div className="carousel-caption">
                        <h2 className="animated fadeInRight">Caption Animation</h2>
                        <p className="animated fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <p className="animated fadeInRight"><a href="#shop3" className="btn btn-transparent btn-rounded btn-large">Learn More</a></p>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" 
                href="#myCarousel" 
                data-slide="prev" 
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => previous(e)}
            >
                <span className="icon-prev"></span>
            </a>
            <a className="right carousel-control" 
                href="#myCarousel" 
                data-slide="next" 
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => next(e)}
            >
                <span className="icon-next"></span>
            </a>
        </div>
    );
}

export default Gallery;