import React from 'react';

const Rating = ({value}:{value:number}) => {
    return (
        <div>
            <span className="text-primary">
                {
                    value>0&&value<1?
                <i className="bi bi-star-half"></i>
                        :value<1?
                <i className="bi bi-star"></i>
                        :
                <i className="bi bi-star-fill"></i>
                }
            </span>
            <span className="text-primary">
                {
                    value>1&&value<2?
                        <i className="bi bi-star-half"></i>
                        :value<2?
                            <i className="bi bi-star"></i>
                            :
                            <i className="bi bi-star-fill"></i>
                }
            </span>
            <span className="text-primary">
                {
                    value>2&&value<3?
                        <i className="bi bi-star-half"></i>
                        :value<3?
                            <i className="bi bi-star"></i>
                            :
                            <i className="bi bi-star-fill"></i>
                }
            </span>
            <span className="text-primary">
                {
                    value>3&&value<4?
                        <i className="bi bi-star-half"></i>
                        :value<4?
                            <i className="bi bi-star"></i>
                            :
                            <i className="bi bi-star-fill"></i>
                }
            </span>
            <span className="text-primary">
                {
                    value>4&&value<5?
                        <i className="bi bi-star-half"></i>
                        :value<4?
                            <i className="bi bi-star"></i>
                            :
                            <i className="bi bi-star-fill"></i>
                }
            </span>
        </div>
    );
};

export default Rating;
