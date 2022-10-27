import React from 'react'

const Developers = () => {
  return (
    <div className='container mx-auto p-5'>
        <h1>Developers</h1>
        <div className='p-5 m-5 grid grid-cols-6 gap-2'>            
                {/* Add your profile here. You can upload your image to the repo under "images"  directory
                    and link it here.                
                */}
                {/* grid item */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                        <img src="https://www.facebook.com/johnlloyd.bonga.75" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>John Lloyd Bonga, </h3>
                    <p className='font-thin italic'>Student</p>
                </div>           
                {/* grid item */}  

                

        </div>
    </div>
  )
}

export default Developers
