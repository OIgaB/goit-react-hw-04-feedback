// import { Component } from "react";                // для класів
import PropTypes from 'prop-types';
import { List, Item, Property, Numbers } from "./styled";


export const Statistics = ({ options, total, positivePercentage }) => {  // options - об'єкт
        const entries = Object.entries(options); // масив масивів
        return (
            <> 
                <List>
                    {entries.map(([name, value]) => (  //деструктуризація масиву
                        <Item key={name}>
                            <Property>{name}:</Property>
                            <Numbers>{value}</Numbers>
                        </Item>                        
                    ))}
                </List>
                <List>
                    <Item>
                        <Property>total:</Property>
                        <Numbers>{total}</Numbers>
                    </Item>
                    <Item>
                        <Property>positiveFeedback:</Property>
                        <Numbers>{positivePercentage}</Numbers>
                    </Item>
                </List>
            </>
        );
}

Statistics.propTypes = {
    options: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};