import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-e_purple even:bg-e_yellow p-4 flex-1 min-w-[130px]">
      <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
        2024/12/26
      </span>

      <div className="flex justify-between items-center">
        <Image src="/more.png" width={20} height={20} alt="" />
      </div>
      <h1 className="text-2xl font-semibold my-4">1234</h1>
      <h2 className="captalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
