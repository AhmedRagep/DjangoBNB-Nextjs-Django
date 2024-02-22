import Image from "next/image"
const MyReservationsPage = ()=>{
  return (
    <main className="max-w-[1500px] max-auto px-6 pb-6">
      
      <h1 className="my-6 text-2xl">MY Reservations</h1>
      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 shadow-md border border-gray-3 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src='/img-03.jpg'
                className='hover:scale-110 object.cover transition h-full w-full'
                alt='Beach hose'
              />
            </div>
          </div>
          <div className="ml-2 col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">property naem</h2>
            <p className="mb-2"><strong>Check in date:</strong> 14/2/2023</p>
            <p className="mb-2"><strong>Check out date:</strong> 14/2/2023</p>
            <p className="mb-2"><strong>Number of Night:</strong> 3</p>
            <p className="mb-2"><strong>Total price:</strong> $300</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-djbnb hover:bg-djbnb-dark transition text-white rounded-xl">
              go to property
            </div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 shadow-md border border-gray-3 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src='/img-03.jpg'
                className='hover:scale-110 object.cover transition h-full w-full'
                alt='Beach hose'
              />
            </div>
          </div>
          <div className="ml-2 col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">property naem</h2>
            <p className="mb-2"><strong>Check in date:</strong> 14/2/2023</p>
            <p className="mb-2"><strong>Check out date:</strong> 14/2/2023</p>
            <p className="mb-2"><strong>Number of Night:</strong> 3</p>
            <p className="mb-2"><strong>Total price:</strong> $300</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-djbnb hover:bg-djbnb-dark transition text-white rounded-xl">
              go to property
            </div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 shadow-md border border-gray-3 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src='/img-03.jpg'
                className='hover:scale-110 object.cover transition h-full w-full'
                alt='Beach hose'
              />
            </div>
          </div>
          <div className="ml-2 col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">property naem</h2>
            <p className="mb-2"><strong>Check in date:</strong> 14/2/2023</p>
            <p className="mb-2"><strong>Check out date:</strong> 14/2/2023</p>
            <p className="mb-2"><strong>Number of Night:</strong> 3</p>
            <p className="mb-2"><strong>Total price:</strong> $300</p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-djbnb hover:bg-djbnb-dark transition text-white rounded-xl">
              go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyReservationsPage