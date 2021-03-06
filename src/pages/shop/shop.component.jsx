import React from 'react'
import './shop.styles.scss'

import SHOP_DATA from "./shop.data";
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionsProps}) => {
                        return(
                            <PreviewCollection 
                                key={id}
                                {...otherCollectionsProps}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;