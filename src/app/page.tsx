import CloseIcon from "@/components/CloseIcon";
import Container from "@/components/Container";

const Page = () => {
    return (
        <Container>
            <div className="min-h-screen h-full w-full">
                <section> {/* Hero section */}
                    <div className="flex flex-row justify-between items-center w-full">
                        <ul className="flex justify-center space-x-20">
                            <li className="hover:text-lightBlue cursor-pointer">Home</li>
                            <li className="hover:text-lightBlue cursor-pointer">About Us</li>
                            <li className="hover:text-lightBlue cursor-pointer">Facilities</li>
                            <li className="hover:text-lightBlue cursor-pointer">Rules</li>
                            <li className="hover:text-lightBlue cursor-pointer">Timings</li>
                            <li className="hover:text-lightBlue cursor-pointer">Contact Us</li>
                        </ul>
                        <div className="p-3 rounded-lg border-2 border-neonGreen shadow-[0_0_10px_3px_#2cff05] text-neonGreen">
                            <p className="text-shadow-md text-shadow-neonGreen">SSL IS OPEN</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center min-h-screen">
                        <h1 className="text-6xl md:text-8xl font-bold">Software Systems Laboratory</h1>
                    </div>
                </section>

                <section id="about-us" className="relative min-h-[75dvh] h-full flex justify-between">

                    <CloseIcon />
                    <div className="w-full h-inherit outline">
                        something
                    </div>
                    <div className="w-full h-inherit outline">
                        something
                    </div>
                </section>
                <section id="facilities" className="relative min-h-[75dvh] h-full">
                    <CloseIcon />
                    <div className="">

                    </div>
                </section>
                <section id="resources" className="relative min-h-[75dvh] h-full">
                    <CloseIcon />
                    <div className="">

                    </div>
                </section>
                <section id="more-links" className="relative min-h-[75dvh] h-full">
                    <CloseIcon />
                    <div className="">

                    </div>
                </section>
            </div>
        </Container>
    );
}

export default Page;
