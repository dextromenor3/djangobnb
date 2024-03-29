import Image from "next/image";
import Link from "next/link";

const PropertyListItem = () => {
  return (
    <Link href="/properties/1">
      <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl">
          <Image
            src="/beach_1.jpg"
            alt="beach house"
            fill
            sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
            className=" hover:scale-110 object-cover transition h-full w-full"
          />
        </div>

        <div className=" mt-2 ">
          <p className="text-lg font-bold"> Property Name</p>
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-500">
            <strong>$200</strong> per night
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyListItem;
