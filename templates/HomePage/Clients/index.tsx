import Image from "@/components/Image";

import { clients } from "@/mocks/clients";

type ClientsProps = {};

const Clients = ({}: ClientsProps) => (
    <div className="mb-38 px-10 xl:mb-30 lg:px-6 md:mb-24">
        <div className="mb-14 text-center text-body-xl text-secondary lg:mb-10 md:mb-8">
            Trusted by leading companies:
        </div>
        <div className="flex flex-wrap justify-center max-w-[73.75rem] -mt-10 mx-auto lg:-mt-6 lg:-mx-4 md:relative md:left-1/2 md:-translate-x-1/2 md:w-[73rem] md:mx-auto">
            {clients.map((client, index) => (
                <div className="h-10 mt-10 mx-8 lg:mt-6 lg:mx-4" key={index}>
                    <Image
                        className="w-auto h-full"
                        src={client}
                        width={136}
                        height={40}
                        alt=""
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Clients;
