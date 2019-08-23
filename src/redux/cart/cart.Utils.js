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