"use client"
const ServiceCard = () => {
    return (
        <>
            <div className=" border-1 border-[#D9D9D933] rounded-[12px]">
                <div
                    className=" h-[50px] w-[50px]" // Add your own height/width
                    style={{
                        backgroundImage: `
                linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%),
                linear-gradient(229.29deg, rgba(158, 255, 0, 0.2) -68.25%, rgba(158, 255, 0, 0) 32.16%)
              `
                    }}
                >

                </div>
                <h3>Blockchain Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet metus et aliquam. Sit feugiat duis proin hendrerit faucibus tempus varius ut volutpat. A venenatis senectus auctor aliquam donec nibh aliquet nulla. Vel nisl consequat est in rhoncus urna. Dolor diam mauris nec ut ac nibh.</p>
            </div>        </>
    )
}

export default ServiceCard;