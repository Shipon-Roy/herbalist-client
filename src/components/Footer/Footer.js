import React from 'react';
import img1 from '../../images/instragram/instragram1.PNG';
import img2 from '../../images/instragram/instragram2.PNG';
import img3 from '../../images/instragram/instragram3.PNG';
import img4 from '../../images/instragram/instragram4.PNG';
import img5 from '../../images/instragram/instragram5.PNG';
import img6 from '../../images/instragram/instragram6.PNG';

const Footer = () => {
    return (
        <div className='bg-success py-5 text-white'>
            <div className="row mx-3">
                <div className="col-md-3">
                    <h2 className='my-3'>Herbalist</h2>
                    <p>Elementum nisi quis eleifend quam adipiscing. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin</p>
                </div>
                <div className="col-md-3">
                    <h2 className='my-3'>Contacts information</h2>
                    <ul>
                        <ul>
                            <li>+1-202-555-0133</li>
                            <li>+1-202-555-0133</li>
                        </ul>
                        <li className='my-3'>192 North Border Street <br />
                        Lithonia, GA 30038</li>
                        <li>9:00 am to 5:00 pm <br />
                        Monday to Saturday</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2 className='my-3'>Shop Products</h2>
                    <ul>
                        <li>Flower</li>
                        <li>Oils</li>
                        <li>Edibles</li>
                        <li>Concentrates</li>
                        <li>Seeds</li>
                        <li>Shop All</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2 className='my-3'>Instagram</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img className='w-100 rounded' src={img1} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img className='w-100 rounded' src={img2} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img className='w-100 rounded' src={img3} alt="" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <img className='w-100 rounded' src={img4} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img className='w-100 rounded' src={img5} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img className='w-100 rounded' src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;