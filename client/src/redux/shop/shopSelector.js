import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectCollectionPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(items => collections[items]) : []
);
export const selectedCollectionItem = urlparam =>{
    return (
        createSelector(
            [selectCollections],
            collections => collections ? collections[urlparam] : null
        )
    )
};

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);