import React from "react";
import CollectionMenu from "../collection-item/collection-item";
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => {
    return(
            <div className="collection-preview">
                <h1 className="title">{title.toUpperCase()}</h1>
                <div className="preview">
                    {
                        items
                            .filter((item, index) => index < 4)
                            .map(({id, ...otherItemsCollection}) => {
                                return(
                                    <CollectionMenu 
                                        key={id}
                                        {...otherItemsCollection}
                                    />
                                )
                            })
                    }
                </div>
            </div>
    )
}

export default PreviewCollection;