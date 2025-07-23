import React from 'react'
import ItemsCard from './ItemsCard'

const Card = ({ title,
    description,
    items,
    ref }) => {
    return (
        <div ref={ref}
            className='sticky  px-10 pt-6 pb-12 text-white border-t-2 border-white/30'>
            <div className='flex items-center justify-between gap-4 font-light'>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-4xl lg:text-5xl'>{title}</h2>
                    <p className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty'>
                        {description}
                    </p>
                    <div className='flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80'>
                        {items.map(({ title }, itemIndex) => (
                            <ItemsCard
                                itemsLength={items.length}
                                title={title}
                                itemIndex={itemIndex}
                                key={itemIndex + title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
