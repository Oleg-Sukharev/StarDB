import React from 'react';
import { withData } from "../hoc-helpers/";
import './item-list.css';
import SwapiService from '../../services/swapi-service';

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
const {getAllPeople} = new SwapiService();

export default withData(ItemList, getAllPeople);