// components/Card.tsx
import Image from "next/image";

export default function Card() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-4">
      <Image
        src="/assets/images/house.png"
        alt="House"
        width={400}  // set desired width
        height={300} // set desired height
        className="rounded-xl mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold mb-2">Beautiful House</h2>
      <p className="text-gray-700 mb-4">
        This is a lovely house with modern design and spacious rooms.
      </p>
      <div className="flex items-center">
        <Image
          src="/assets/images/star.png"
          alt="Star rating"
          width={20}
          height={20}
          className="mr-1"
        />
        <span className="text-gray-600">4.5 (120 reviews)</span>
      </div>
    </div>
  );
}
