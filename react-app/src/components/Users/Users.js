import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_642/prd-emea/sys-master/content/P1/h93/h41/9654374367262-Homepage_Fashion_ONE_Mobile(9).jpg', 
                followed: false,
                fullName: 'Sally',
                status: 'Hey guys!',
                location: {city: 'New York', country: 'USA'}
            },
            {
                id: 2,
                photoUrl: 'https://i.elele.com.tr/storage/files/images/2022/03/04/chanel-handbag-iFyI.jpg', 
                followed: true,
                fullName: 'Bella',
                status: 'The happiest',
                location: {city: 'Madrid', country: 'Spain'}
            },
            {
                id: 3,
                photoUrl: 'https://i2.wp.com/merveozkaynak.com/wp-content/uploads/2018/08/chanel-koleksiyonum.jpg?resize=400%2C242&ssl=1', 
                followed: true,
                fullName: 'Kate',
                status: 'In love with Chanel..',
                location: {city: 'London', country: 'UK'}
            },
            {
                id: 4,
                photoUrl: 'https://avvenice.com/img/cms/CHANEL/1%20Avvenice%20-%20Chanel%20Official%20-%20New%20Collection%20-%20Bags%20-%20Model.jpg', 
                followed: false,
                fullName: 'Ann',
                status: 'Contact me!',
                location: {city: 'Miami', country: 'USA'}
            }
        ])
    }
    return (
        <div>
           {
            props.users.map( u => <div key={u.id}>
                <div>
                    {u.fullName}
                    </div>
                <div>
                    {u.status}
                    </div>
                <div>
                    {u.location.country}
                    </div>
                <div>
                    <img src={u.photoUrl} className={classes.userPhoto} />
                </div>
                <div>
                    { u.followed 
                    ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                    : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
                </div>
            </div> )
           }
        </div>
    )
}

export default Users;