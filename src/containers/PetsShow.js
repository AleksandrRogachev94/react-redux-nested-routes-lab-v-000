import React from 'react';
import { connect } from 'react-redux';

const PetsShow = (props) => {
  const pet = props.pet;
  console.log("Hello from PetsShow")
  return (
    <div className="col-md-8">
    Show Page
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const pet = state.pets.find(pet => pet.id == ownProps.routeParams.id)
  return {
    pet
  };
};

export default connect(mapStateToProps)(PetsShow);
