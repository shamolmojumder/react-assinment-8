import React from 'react';

const Courses = (props) => {
    // console.log(props);
    const {id,mentorName,image,price,course}=props.loadDat
    const handleBtn=props.handleBtn

    const courseStyle={
        border:'1px solid black'
    }
    return (
        <div className="course" style={{  border:'1px solid black',backgroundColor:"skyblue"}}>
            
            <h2> Mentor Name: {mentorName} </h2>
            <img style={{height:'150px'}} src={image} alt=""/>
            <h2>Price  : $ {price} </h2>
            <h2>Course Name: {course} </h2>
            <p>Id: {id} </p>
            <button onClick={()=>handleBtn(props.loadDat)} style={{border:'none',backgroundColor:"slateblue",height:'30px',margin:"10px 0"}}> Enroll   </button>
        </div>
    );
};

export default Courses;