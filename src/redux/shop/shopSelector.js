import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectCollectionPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(items => collections[items])
);
export const selectedCollectionItem = urlparam =>{
    return (
        createSelector(
            [selectCollections],
            collections => collections[urlparam]
        )
    )
};

