import './main.scss';
import img from '../../assets/image.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {ImClipboard} from 'react-icons/im'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Main = () => {
    const data =[
        {
            id:1,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:2,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:3,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:4,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:5,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:6,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:7,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:8,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        {
            id:9,
            imgSrc:img,
            destTitle: 'Bora Bora',
            location:'New Zealand',
            grade :'CULTURAL RELAX',
            fees:'$700',
            description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        },
        // {
        //     id:10,
        //     imgSrc:img,
        //     destTitle: 'Bora Bora',
        //     location:'New Zealand',
        //     grade :'CULTURAL RELAX',
        //     fees:'$700',
        //     description: "The epitome of romance, It is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities"
        // },
    ]
    useEffect(() =>{
        Aos.init({duration:2000})
    },[])
    return (
        <section className="main container section">
            <div className="secTitle" >
            <h3 className="title" data-aos="fade-right">
                    Most Visited Destinations
            </h3>
            </div>
            <div className="secContent grid">
                {
                    data.map(({id, imgSrc,destTitle,location,grade,fees, description}) =>{
                        return(
                            <div key={id} data-aos="fade-up"
                             className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle" >
                                        {destTitle}
                                    </h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name' >{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS<ImClipboard className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Main;