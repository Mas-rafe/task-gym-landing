import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="relative w-[376px] mt-6 ml-4">

            {/* SVG Background */}
            <svg
                width="376"
                height="705"
                viewBox="0 0 376 705"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 z-0"
            >
                <path
                    d="M0 626.701V78.0796C0 22.5849 56.3152 -15.1589 107.645 5.93289L327.645 96.3318C356.9 108.353 376 136.85 376 168.479V626.701C376 669.779 341.078 704.701 298 704.701H78C34.9218 704.701 0 669.779 0 626.701Z"
                    fill="#71AC16"
                />
            </svg>

            {/* Content on top */}
            <div className="absolute w-xs mx-5 justify-center top-66  z-10 text-white">

                {/* Heading */}
                <h2 className="text-3xl font-bold mb-4">
                    OUR SPECIALITY
                </h2>

                {/* List */}
                <ul className="space-y-3  text-2xl">
                    <div className="bg-[#77bd07]  flex items-center gap-4 cursor-pointer rounded-3xl  border p-4 hover:underline">
                        <Image
                            src="/icon1.png"
                            alt="gym"
                            width={62}
                            height={62}
                            className=" bg-[#71AC16]  object-contain"
                        />
                        <h3>Ground Running</h3>
                    </div>
                    <div className="bg-[#77bd07] flex items-center gap-4 cursor-pointer rounded-3xl  border p-4 hover:underline">
                        <Image
                            src="/icon2.png"
                            alt="gym"
                            width={62}
                            height={62}
                            className=" object-contain"
                        />
                        <h3>Yoga Assistance</h3>
                    </div>
                    <div className="bg-[#77bd07]   rounded-3xl   flex items-center gap-4 cursor-pointer   border p-4 hover:underline">
                        <Image
                            src="/icon3.png"
                            alt="gym"
                            width={62}
                            height={62}
                            className="object-contain"
                        />
                        <h3>Personal Trainer</h3>
                    </div>



                </ul>

            </div>
        </div>
    );
};

export default Sidebar;