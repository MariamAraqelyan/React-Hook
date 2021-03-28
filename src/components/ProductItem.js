import React from 'react';
import {TextContent} from '../styles';

const ProductItem = ({text}) => {
    const renderTodo = () => {
        return (
            <TextContent>
                <img alt={text?.name} src={text?.image_url}/>
                <div>
                    <p>{text?.name}</p>
                    <p>$ {text?.cash_back}</p>
                </div>
            </TextContent>
        )
    }
    return (
        <>
            {renderTodo(text)}
        </>
    )
}
export default ProductItem
