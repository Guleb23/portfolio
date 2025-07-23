import React from 'react'

const ItemsCard = ({ title,
    itemIndex, itemsLength }) => {
    return (
        <div >
            <h3 className={`${itemIndex === itemsLength - 1 ? "border-b-0" : "border-b-2 "}flex border-white/30 items-cards`}>
                <span
                    className='mr-12 text-lg text-white/30'>
                    0{itemIndex + 1}
                </span>
                {title}
            </h3>

        </div>
    )
}

export default ItemsCard
