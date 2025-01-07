import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
              <figure>
                <Image className="w-full"
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" width={500} height={500}
                />
              </figure>
              <div className="card-body p-2">
                <div>
                  <p className="my-1 bg-red-500 rounded-full px-2 py-1 text-white inline-block">Technology</p>
                </div>
                <h2 className="card-title text-xl">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h3 className="text-xl font-semibold">By John smith 3-8-2024</h3>
                <p>The city’s booming real estate has also been used by Bangladeshis as an offshore haven to park wealth for a big reason</p>
              </div>
            </div>

            {/* Side bar repeted items  */}
                <div className="flex items-center mt-4 shadow-md">
                    
                        <Image className="w-16 h-10 md:w-24 md:h-20 object-cover rounded-md"
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes" width={100} height={100}
                        />
                    
                    <div className="card-body p-2">
                        
                        <h2 className="font-semibold text-sm md:text-xl">Shoes!</h2>
                        <p className='text-sm md:tex-md'>By John smith 3-8-2024</p>
                    </div>
                </div>
                <div className="flex items-center mt-4 shadow-md">
                    
                    <Image className="w-25 h-20 object-cover rounded-md"
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" width={100} height={100}
                    />
                
                <div className="card-body p-2">
                    
                    <h2 className="font-semibold text-xl">Shoes!</h2>
                    <p>By John smith 3-8-2024</p>
                </div>
                </div>
        </div>
    );
};

export default Sidebar;