import React from "react";
import Card from "./Card";


const CardList = ({books, onBookSelect}) => {
    if(false){
        throw new Error("this is Error");
    }
    const cardArray = books.map(
        (user,i)=> {
            return <Card 
                        onBookSelect = {onBookSelect}
                        key = {i}
                        name = {books[i].bookName}
                        isbn = {books[i].isbn}
                        category = {books[i].category}
                        rowNo = {books[i].rowNo}
                        count = {books[i].count}
                        cost = {books[i].cost}
                        availability = {books[i].availability}
                    />
    });
    return(
        <div>
            {cardArray}
            
        </div>
    );    
}

export default CardList;