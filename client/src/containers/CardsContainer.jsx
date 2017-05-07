import React from 'react'
import Card from '../components/Card'

class CardsContainer extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        const CardsDisplay = this.props.cards.map((card, index) => {
            return <Card key={index} card={card} />
        })

        return(
            <div className="cards-container" >
                {CardsDisplay}
            </div>
        )}

}

export default CardsContainer