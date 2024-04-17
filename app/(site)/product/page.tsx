import React from 'react';
import {products} from "@/source/constant/dummy";
import Breadcrumbs from "@/source/components/global/breadcrumbs";
import Button from "@/source/components/global/button";
import Rating from "@/source/components/global/rating";
import {discountCalculator} from "@/source/utils/generator";
import ProductCarousel from "@/source/components/global/productCarousel";
import ImageMagnifiers from "@/app/(site)/product/imageMagnifiers";
import Product from "@/source/components/global/product";
import ActionThis from "@/app/(site)/product/actionThis";

type Props = {
    searchParams: { view: string | undefined }
}
const ViewProduct = ({searchParams: {view}}: Props) => {
    const item = products.find(x => x._id === view)


    // Home > category > subcategory > child-category > product name
    const breadcrumbList = [
        {
            title: "Category",
            href: `/product?view=${view}`
        }, {
            title: "Subcategory",
            href: `/product?view=${view}`
        }, {
            title: 'Child-category',
            href: `/product?view=${view}`
        }, {
            title: "Product name",
            href: `/product?view=${view}`
        }
    ]

    if (!view || !item){
        return (
            <div className='h-[75vh] flex justify-center items-center'>
                <h2 className='text-3xl font-bold text-primary'>Product not found</h2>
            </div>
        )
    }else {
        return (
            <div className="container">
                <Breadcrumbs list={breadcrumbList}/>
                 <div>
                            {/* View product column */}
                            <div className="grid bg-white p-2 gap-2 grid-cols-3 md:grid-cols-7">
                                {/*Col-1*/}
                                <div className="lg:col-span-2 col-span-3 md:col-span-3">
                                   <div className="flex flex-col gap-2">
                                       <div className="flex">
                                          <ImageMagnifiers image={item.thumbnail} />
                                       </div>
                                          <div className="flex overflow-hidden relative justify-center">
                                             <div className="w-10/12">
                                                 <ProductCarousel images={item.images}/>
                                             </div>
                                          </div>
                                   </div>
                                </div>
                                {/*Col-2*/}
                                <div className="lg:col-span-3 col-span-3   md:col-span-4">
                                    <h2 className="text-xl">{item.title}</h2>
                                    <div className="my-2 flex items-center gap-2">
                                        <Rating value={3.6}/>
                                        <span className="text-sm text-blue-500">29 ratings</span>
                                    </div>

                                    {/*  Brand  */}
                                    <div className="flex items-center">
                                        <span className="text-gray-500">Brand:</span>
                                        <div className="flex items-center">
                                            <span className="mx-1 text-sm text-blue-500">No BrandMore</span> |
                                            <span className="mx-1 text-sm text-blue-500">Men from No Brand</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 my-4 h-[1px]"></div>


                                    {/*Price*/}
                                    <span className="text-primary block font-medium text-3xl">
                                      ৳ {item.discountPrice && item.discountPrice < item.price
                                                                    ? item.discountPrice
                                                                    : item.price}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {item.price > item.discountPrice ? (
                                            <div>
                                                <span className="line-through text-sm text-slate-500">
                                                 ৳{item.price}
                                                </span>
                                            </div>
                                        ) : null}
                                        {item.price > item.discountPrice ? (
                                            <span className="text-sm">
                                              -{discountCalculator(item.price, item.discountPrice).toFixed(2) + "%"}
                                            </span>

                                        ) : null}
                                    </div>
                                    <div className="bg-gray-200 my-4 h-[1px]"></div>

                                    {/* Color and sizes information */}
                                    <div>
                                        {/* Color */}
                                        <div className="flex">
                                            <h4>Color</h4>
                                        </div>
                                        <div className="flex">
                                            <h4>Sizes</h4>
                                        </div>
                                    </div>
                                   <ActionThis item={item}/>

                                </div>
                                {/*Col-3*/}
                                <div className="lg:col-span-2 col-span-3  md:col-span-7">
                                   {/*address option*/}
                                <div>
                                    {/*Heading*/}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Delivery</span>
                                        <span className="text-sm text-gray-500"><i className="bi bi-info-circle"></i></span>
                                    </div>
                                    {/*Address*/}
                                    <div className="flex items-center gap-2 my-2">
                                        <span className="text-xl ">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                        <span className='text-[15px] leading-none'>
                                            Dhaka, Dhaka North, Banani Road No. 12 - 19
                                        </span>
                                        <Button title="CHANGE" className="text-blue-500 hover:text-blue-600 transition"/>
                                    </div>
                                    {/*Delivery System*/}
                                    <div className="flex items-center gap-2 my-2">
                                        <span className="text-gray-500"><i className="bi bi-cash"></i></span>
                                        <span className='text-[15px] text-slate-600 leading-none'>Cash on Delivery Available</span>
                                    </div>
                                </div>

                                    <div className="h-[1px] bg-gray-300"></div>

                                    {/*Service*/}
                                    <div className="my-4">
                                        {/*Heading*/}
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">Service</span>
                                            <span className="text-sm text-gray-500"><i className="bi bi-info-circle"></i></span>
                                        </div>

                                        {/*Address*/}
                                        <div className="flex items-center gap-2 my-2">
                                            <span className="text-xl text-slate-600">
                                                <i className="bi bi-alarm"></i>
                                            </span>
                                                <span className='text-[15px] text-slate-600 leading-none'>
                                                7 Days Returns
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 my-2">
                                            <span className="text-xl text-slate-600">
                                                <i className="bi bi-exclamation-octagon"></i>
                                            </span>
                                            <span className='text-[15px] text-slate-600 leading-none'>
                                               Warranty not available
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description and Specification */}
                        <div className="bg-white p-2 md:p-4 my-2">
                            <h2 className="text-[18px] font-medium">{item.title}</h2>

                            <div className="h-[1px] bg-gray-300 my-2"></div>
                            {/*Rich Text from database*/}
                            <p className="text-sm text-slate-600">
                                Fashionable Trendy 6 Pairs = 12 Pcs Pearl Stud Earrings Set for Girls Simple stylish New Collection - Big Hoop Earrings Set for Girls Simple Top - Big Geometric Pearl Rhinestones Stud Earring for Women Jewelry - Kaner Dul
                            </p>


                            {/*Product Specification*/}
                            <div className="h-[1px] bg-gray-300 my-2"></div>
                            <h2 className="text-[18px] font-medium">Specifications of {item.title}</h2>
                            <div className="grid my-3 grid-cols-2 gap-2">
                                <div>
                                    <div className="flex flex-col">
                                        <h4 className="text-slate-600">Brand</h4>
                                        <span>No Brand</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-slate-600">Material</h4>
                                        <span>Zinc Alloy</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col">
                                        <h4 className="text-slate-600">SKU</h4>
                                        <span>198260810_BD-1145095446</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Suggested Product*/}
                        <div className="my-5">
                            <h2 className="text-[18px] font-medium">People Who Viewed This Item Also Viewed</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-5">
                                {
                                    products.slice(0,5).map((x,i)=>(
                                        <Product key={i} item={x}/>
                                    ))
                                }
                            </div>
                        </div>
                        </div>
            </div>
        );
    }
};

export default ViewProduct;
