export const addItemToCart = (currentItems, newItem) =>{
    const itemExists = currentItems.find(Items => {
        return Items.id === newItem.id
    });
    if(itemExists){
        return currentItems.map(item =>
                 item.id === newItem.id
                     ? {...item, quantity: item.quantity + 1}
                     : item
         )
    }
    return [...currentItems,{...newItem, quantity: 1}]
}

export const reduceItemquantity = (currentItems, itemstoRemove) =>{
    const itemExists = currentItems.find(Items => {
        return Items.id === itemstoRemove.id
    });
    if(itemExists.quantity === 1){
        return currentItems.filter(items => items.id !== itemstoRemove.id)
    }
    return currentItems.map(item => {
       return  item.id === itemstoRemove.id ? {...item, quantity: item.quantity - 1} : item
    })

}