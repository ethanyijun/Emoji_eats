import React from 'react'

const MenuItem = ({label, emoji, name, description, price, updateOrder}) => (
            <div className="menuitem__wrapper">
                <div>
                    <span role="img" aria-label = {label} className="menuitem__emoji">
                        {emoji}
                    </span>
                </div>
                <div className="menuitem__column">
                    <div className="menuitem__name">
                        {name}
                    </div>
                    <div className="menuitem__description">
                        {description}
                    </div>
                    <button className="menuitem__button" onClick={()=>updateOrder(name,price)}>
                        add to order
                    </button>
                    <div className="menuitem__price">
                        ${price}.00
                    </div>
                </div>
            </div>
)
export default MenuItem