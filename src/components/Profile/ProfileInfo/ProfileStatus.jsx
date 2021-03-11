import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {changeStatus} from '../../../redux/profile-reducer';

const ProfileStatus = (props) => {
    
  const [localStatus, setLocalStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  const handleStatusChange = () => {
    setEditMode(false);
    props.changeStatus(localStatus);
  }

  return (
    <div>
      {
        editMode ?
          <textarea 
            autoFocus={true} 
            onChange={e => setLocalStatus(e.target.value)} 
            onBlur={handleStatusChange}
            value={localStatus}
          >
          </textarea>
          :
          <span onDoubleClick={() => setEditMode(true)}>
            &#x270E;
            {props.status || "status"}
          </span>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  status : state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {changeStatus})
)(ProfileStatus)