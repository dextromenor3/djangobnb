import Image from "next/image";

const MyReservationsPage = () => {
  return (
    <main className=" pb-6 max-w-[1500px] mx-auto px-6">
      <h1 className=" my-6 text-2xl">My reservations</h1>

      <div className=" space-y-4">
      <div className=" p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className=" col-span-1">
            <div className=" relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/beach_1.jpg"
                fill
                className=" hover:scale-110 object-cover transition h-full w-full"
                alt="beach house"
              />
            </div>
          </div>
          <div className="col-span-3">
                <h2 className=" mb-4 text-xl">
                    Property name
                </h2>

                <p className=" mb-2"><strong>Check in date</strong> 14/02/2024</p>
                <p className=" mb-2"><strong>Check out date</strong> 16/02/2024</p>
                <p className=" mb-2"><strong>Number of nights</strong> 2</p>
                <p className=" mb-2"><strong>Total price:</strong> $200</p>

                <div className="mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl w-fit">Go to your property</div>
            </div>
        </div>

        <div className=" p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className=" col-span-1">
            <div className=" relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/beach_1.jpg"
                fill
                className=" hover:scale-110 object-cover transition h-full w-full"
                alt="beach house"
              />
            </div>
          </div>
          <div className="col-span-3">
                <h2 className=" mb-4 text-xl">
                    Property name
                </h2>

                <p className=" mb-2"><strong>Check in date</strong> 14/02/2024</p>
                <p className=" mb-2"><strong>Check out date</strong> 16/02/2024</p>
                <p className=" mb-2"><strong>Number of nights</strong> 2</p>
                <p className=" mb-2"><strong>Total price:</strong> $200</p>

                <div className="mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl w-fit">Go to your property</div>
            </div>
        </div>

        <div className=" p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className=" col-span-1">
            <div className=" relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/beach_1.jpg"
                fill
                className=" hover:scale-110 object-cover transition h-full w-full"
                alt="beach house"
              />
            </div>
          </div>
          <div className="col-span-3">
                <h2 className=" mb-4 text-xl">
                    Property name
                </h2>

                <p className=" mb-2"><strong>Check in date</strong> 14/02/2024</p>
                <p className=" mb-2"><strong>Check out date</strong> 16/02/2024</p>
                <p className=" mb-2"><strong>Number of nights</strong> 2</p>
                <p className=" mb-2"><strong>Total price:</strong> $200</p>

                <div className="mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl w-fit">Go to your property</div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
