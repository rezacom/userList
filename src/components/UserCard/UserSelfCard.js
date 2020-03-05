import React, { useState, useEffect } from "react";
import styles from "./UserSelfCard.module.scss";
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdDateRange } from 'react-icons/md';
import { FaMapMarked } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { FaUnlock } from 'react-icons/fa';


const UserSelfCard = ({ users }) => {
  
  // const [textStatus, setTExtStatus] = useState({users});
  const [textContent, setTextContent] = useState({
    header: "Hi, My name is",
    content: `${users.name.first} ${users.name.last}`
  });

  useEffect(() => {
    if (users) {
      setTextContent({
        header: "Hi, My name is",
        content: `${users.name.first} ${users.name.last}`
      });
    }
    
  }, [users]);
 
  return (
    <>
      <div className={styles.card}>
        <div>
          <img className={styles.image} src={users.picture.large} />
        </div>
        <div className={styles.detail}>
          <p className={styles.header}>{textContent.header}</p>
          <p className={styles.content}>{textContent.content}</p>
        </div>
        <div className={styles.userDataItems}>
          <span className={styles.userDataItemSpan} onMouseEnter={() => setTextContent({ header: "hi, my name is",content: `${users.name.first} ${users.name.last}`})}>
            
            <div className={styles.hideIcon}>
              <FaUserCircle />
              <span><FaUserCircle /></span>
            </div>
           
          </span>
          <span className={styles.userDataItemSpan} onMouseEnter={() => setTextContent({ header: "hi, my eamil is",content: `${users.email}`})}>
          
            <div className={styles.hideIcon}>
              <MdEmail />
              <span><MdEmail /></span>
            </div>
      
          </span>
          <span className={styles.userDataItemSpan} onMouseEnter={() => setTextContent({ header: "hi, my date is",content: `${users.dob.date}`})}>

            <div className={styles.hideIcon}>
              <MdDateRange />
              <span> <MdDateRange /></span>
            </div>
      
          </span>
          <span className={styles.userDataItemSpan} onMouseEnter={() => setTextContent({ header: "hi, my location is",content: `${users.location.street.name} ${users.location.street.number}`})}>

            <div className={styles.hideIcon}>
              <FaMapMarked />
              <span><FaMapMarked /></span>
            </div>

          </span>
          <span className={styles.userDataItemSpan} onMouseEnter={() => setTextContent({ header: "hi, my phone is",content: `${users.phone}`})}>
          
            <div className={styles.hideIcon}>
              <FiPhone />
              <span><FiPhone /></span>
            </div>

          </span>
          <span className={styles.userDataItemSpan} onMouseEnter={() => setTextContent({ header: "hi, my pass is",content: `${users.login.password}`})}>
            
            <div className={styles.hideIcon}>
              <FaUnlock />
              <span><FaUnlock /></span>
            </div>

          </span>
        </div>
      </div>
    </>
  );
};

export default UserSelfCard;
