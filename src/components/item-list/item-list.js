import React from 'react';
import './item-list.css';

const  ItemList = (props) => {
    const { data, onItemSelected, renderItem } = props;
    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item
            const label = renderItem(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }
    const content = data ? renderItems(data) : null;
    return (
        <React.Fragment>
            <ul className="item-list list-group">
                {content}
            </ul>
        </React.Fragment>
    );
}
export default ItemList;