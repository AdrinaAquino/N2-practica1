export function CardPersonal() {
    const cards = [
        { nombre: "Bill Mahoney", cargo: "PRODUCT OWNER", imagen: "./images/photo1.png" },
        { nombre: "Saba Cabrera", cargo: "ART DIRECTOR", imagen: "./images/photo2.png" },
        { nombre: "Shae Le", cargo: "TECHLEAD", imagen: "./images/photo3.png" },
        { nombre: "Skylah Lu", cargo: "UX DESIGNER", imagen: "./images/photo4.png" },
        { nombre: "Griff Richards", cargo: "DEVELOPER", imagen: "./images/photo5.png" },
        { nombre: "Stan John", cargo: "DEVELOPER", imagen: "./images/photo6.png" },
       
    ];

    return (
        <>
            {cards.map((card,car) => {
                return (
                    <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-7 " key={car} >
                        <div className='flex w-4/7'>
                            <img src={card.imagen} alt="" />
                            <p className=' h-4 rotate-90 origin-top-left ml-29 w-30  text-black text-[8px] md:text-[12px] md:mx-45 md:text-white  absolute'>{card.cargo}</p>
                        </div>
                        <p className='text-xs md:text-sm'>{card.nombre}</p>
                    </div>
                )
            })}
        </>
    )
}