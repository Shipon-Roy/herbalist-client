import React from 'react';
import Products from '../Products/Products';
import Review from '../Review/Review';
import img1 from '../../../images/pic1.PNG';
import img2 from '../../../images/pic2.PNG';
import img3 from '../../../images/pic3.PNG';
import img4 from '../../../images/pic4.PNG';
import img5 from '../../../images/pic5.PNG';
import img6 from '../../../images/pic6.PNG';
import img7 from '../../../images/pic7.PNG';

const Home = () => {
    return (
        <div>
            {/* banner  */}
            <div>
                <div className="row mx-3">
                    <div className="col-md-6 py-5">
                        <h1>Highest Quality <br /> Marijuana Seeds</h1>
                        <p>Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis. Euismod elementum nisi quis eleifend quam adipiscing</p>
                        <button className='btn btn-warning'>Our Products</button>
                        <p>Our support team is available 24/7 to resolve any product issues</p>
                        <p>Phone number</p>
                        <p>+1-202-555-0133</p>
                    </div>
                    <div className="col-md-6  bg-success py-5 text-white">
                        <h1>Soar Deiser</h1>
                        <p>platea dictumst quisque sagittis purus sit. Dignissim enim sit amet venenatis. In est ante in nibh mauris cursus mattis.</p>
                        <p>Savita Domainet</p>
                        <p>THC 110.0/160.0mg/g</p>
                        <p>CBD 0.0/1.0mg/g</p>
                    </div>
                </div>
            </div>
            {/* banner  */}
            <Products></Products>

            <div className='my-5'>
                <div className="row mx-3">
                    <div className="col-md-6">
                        <h2>Our knowledgeable team can help you design experiences tailored to your needs by accessing one of the flower selections</h2>
                        <p>Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis posuere</p>
                    </div>
                    <div className="col-md-6">
                        <img className='w-100 h-100 rounded' src={img1} alt="" />
                    </div>
                </div>
            </div>
            {/* counter */}
            <div>
                <div className="row mx-3">
                    <div className="col-md-3">
                        <h1 className='text-success'>180+</h1>
                        <p>New products to explore. Arcu vitae elementum curabitur vitae nunc sed</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className='text-success'>3X</h1>
                        <p>Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className='text-success'>100%</h1>
                        <p>Mauris a diam maecenas sed enim ut sem curabitur vitae nunc sed</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className='text-success'>11K</h1>
                        <p>Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc</p>
                    </div>
                </div>
            </div>
            {/* counter  */}
            <div className='my-5 py-5'>
                <div className="row mx-3">
                    <div className="col-md-6">
                        <img className='w-100 rounded' src={img2} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>CBD Facial Serum: Anti-Aging + Daily Moisturizer</h2>
                        <p>Quis risus sed vulputate odio ut. Arcu vitae elementum curabitur vitae nunc sed. Mauris a diam maecenas sed enim ut sem. Non enim praesent elementum facilisis. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum</p>
                        <ul>
                            <li>Sativa-Dominant</li>
                            <li>THC 110.0-160.0mg/g</li>
                            <li>Euismod elementum</li>
                            <li>CBD 0.0-1.0mg/g</li>
                        </ul>
                        <h2>$7.97</h2>
                        <button className='btn btn-warning my-3'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="bg-info">
            <div className="container text-white text-center p-5">
                <h1 className='my-5'>Our doctors recommend the best THC to CBD ratio to look for in a marijuana strain and suggest the recommended dosage and route of administration</h1>
            </div>
            </div>
            <div className='my-5'>
                <div className="row mx-3">
                    <div className="col-md-6">
                        <h1>Therapeutic Effects of Cannabis and Cannabinoids</h1>
                        <p>Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis posuere</p>
                        <button className='btn btn-warning rounded'>Our Products</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            {/*  */}
            <div>
                <div className="row mx-3">
                    <div className="col-md-6">
                        <img className='w-100 h-75 rounded' src={img3} alt="" />
                    </div>
                    <div className="col-md-6 py-5">
                        <h3>Relief of chronic pain</h3>
                        <p>Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat pulvinar proin</p>
                        <div className="my-3">
                        <h3>Fight cancer</h3>
                        <p>Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat pulvinar proin</p>
                        </div>
                        <h3>Depression</h3>
                        <p>Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat pulvinar proin</p>
                    </div>
                </div>
                
            </div>
            {/*  */}
            {/* Latest News */}
            <div>
                <div className="row mx-3">
                    <h1 className='text-center my-5'>Latest News</h1>
                    <div className="col-md-6">
                        <img className='w-100' src={img4} alt="" />
                    </div>
                    <div className="col-md-6 my-5">
                        <div className='row'>
                            <div className="col-md-4">
                                <img className='w-75 rounded' src={img5} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h3>Top 15 Best Strain Of Weed For Anxiety</h3>
                                <p>Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium vulputate sapien nec sagittis</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4">
                                <img className='w-75 rounded' src={img6} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h3>Top 15 Best Strain Of Weed For Anxiety</h3>
                                <p>Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium vulputate sapien nec sagittis</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4">
                                <img className='w-75 rounded' src={img7} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h3>Top 15 Best Strain Of Weed For Anxiety</h3>
                                <p>Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium vulputate sapien nec sagittis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest News */}
            {/* review  */}
            <Review></Review>
            {/* review  */}
        </div>
    );
};

export default Home;