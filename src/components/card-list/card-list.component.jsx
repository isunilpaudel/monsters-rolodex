import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component.jsx";

class CardList extends Component {
  render() {
    //console.log('render from card-list.component.jsx');
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
