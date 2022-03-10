import { ArrowUpIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import React from 'react';

const features = [
    {
        name: 'Wide area service',
        description:
            'Our Delevery system supports a large scale of area so that you can have your food even if you are far long from the resturants.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'We are trustable. Our system charge you only for the food, there is no extra charge for you to get the best food',
        icon: ScaleIcon,
    },
    {
        name: 'Fastest Delevery',
        description:
            'Our people who work for delevering food are super active. You can have your food just before you even imagine',
        icon: LightningBoltIcon,
    },
    {
        name: 'Live Update',
        description:
            'Our super fast system give you update on status of your order like is it ready? or where is the delevery man? Just install our Mobile App',
        icon: ArrowUpIcon,
    },
]
const Features = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Transactions</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to get better food
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        With Foodism you can have quality food at your doorstep without any hassle to go out . We have a home delevery option so that customers can get food quickly and easily.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;