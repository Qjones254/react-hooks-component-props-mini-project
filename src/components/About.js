import React from 'react'

export const About = ({image,about}) => {
    const defaultImage = "https://via.placeholder.com/215";
  return (
    
      <aside>
        <img src={image || defaultImage} alt="blog logo" />
        <p>about</p>
      </aside>
  );
}
