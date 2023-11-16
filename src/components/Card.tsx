const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <>
            <article className="w-96 p-4 bg-[#191919] text-white flex items-center flex-col rounded-xl  border-2 hover:border-[#da4f4f] border-[#1f1f1f] transition-transform-colors ease-in-out duration-300 hover:scale-105 max-[720px]:w-72">
                <h2 className="text-2xl font-mulish-black text-white text-center mt-4 max-[720px]:text-xl">
                    {title}
                </h2>

                <p className="text-lg font-mulish-semibold text-center mt-4 text-gray-400 max-[720px]:text-base">
                    {description}
                </p>
            </article>
        </>
    )
}

export { Card }