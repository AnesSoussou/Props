import React from 'react';
import propTypes from 'prop-types';
const Profile = (props )=> {
  function handleName(e) {
  e.preventDefault();
  alert(`Hello batal`) ;
}
    return (
        <div>
          <h1>
          <img src={props.source} width={props.width}/>
          {props.children}
         </h1>
         <h1 style={{fontFamily:'serif'}}>My Name: {props.FullName}</h1>
        <h1 style={{fontFamily:'serif'}}>BIO: {props.bio}</h1>
         <h1 style={{fontFamily:'serif'}}>Profession : {props.profession}</h1>
          <button href="/" onClick={handleName}>
    Click me Trah
  </button> </div>
       
    )
}

Profile.defaultProps = {
  FullName: 'Anes Soussou',
  bio:'I am a 30 year old man passionate about web development,photography and surely playing football',
  profession:'Full stack web developer'
};
Profile.propTypes={
  FullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  width: propTypes.any,
  source: propTypes.any
}

export default Profile;

