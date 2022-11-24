import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>How It Works</h1>
            <div className='flex justify-center gap-x-8 mt-12'>
                <div >
                    <h1 className='text-center font-bold text-xl text-primary'>As Buyer</h1>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">DISCOVER ITEMS</li>
                        <li className="step step-primary">PURCHASE</li>
                        <li className="step">RECIEVE THE PRODUCTS</li>
                        <li className="step">SPREAD THE LOVE</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-center font-bold text-xl  text-primary'>As Seller</h1>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">REGISTER</li>
                        <li className="step step-primary">LIST IT</li>
                        <li className="step">SHARE IT</li>
                        <li className="step">EARN CASH</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;