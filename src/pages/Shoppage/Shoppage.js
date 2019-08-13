import React, {Component} from 'react';
import shop_data from '../../data/shop.data';
import PreviewCollection from "../../component/PreviewCollection/PreviewCollection";
class Shoppage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: shop_data
        };
    }

    render() {
        return (
            <div className="ShopPage">
                {
                    this.state.collections.map(collectionItem => {
                        return <PreviewCollection key={collectionItem.id} {...collectionItem}/>
                    })
                }

            </div>
        );
    }
}

export default Shoppage;