import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const TableRow = (props) => {
    const {_id, name, email, library, date} = props.volunteer;

    const handleVolunter = (id) => {

        fetch(`http://localhost:8080/deleteVolunteer/${id}`, {
            method: "DELETE"
        })
        .then(data => {


            alert("You have successfully Delete Volunteer");
            props.handleDelete()
        })

    }

    return (
            <tr>
                <td>#</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{library}</td>
                <td>
                    <button style={{backgroundColor: "tomato", padding: "10px 12px", borderRadius: "4px", border: "none"}} onClick={() => handleVolunter(_id)}>
                        <FontAwesomeIcon style={{color: "white", fontSize: "30px"}} icon={faTrashAlt} />
                    </button>
                </td>
            </tr>
    );
};

// {padding: "10px 45px", backgroundColor: "#3F90FC", border: "none", borderRadius: "4px", color: "white"}

export default TableRow;