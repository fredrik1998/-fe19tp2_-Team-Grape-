import React, { Component } from "react"
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';

class AdminPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       users: {},
//     };
//   }

//   componentWillUnmount() {
//     this.props.firebase.users().off();
//   }


//   componentDidMount() {
//     this.setState({ loading: true });

//     this.props.firebase.users().on('value', snapshot => {
//       const usersObject = snapshot.val();

//       const usersList = Object.keys(usersObject).map(key => ({
//         ...usersObject[key],
//         uid: key,
//       }));

//       this.setState({
//         // users: snapshot.val(),
//         users: usersList,
//         loading: false,
//       });
//     });
//   }


//   render() {
//     const { users, loading } = this.state;

//     return (
//       <div>
//         <hi>Admin</hi>
//         <p>
//           The Admin Page is accessible by every singed in admin user.
//      </p>

//         {loading && <div>Loading ...</div>}

//         <UserList users={users} />

//       </div>
//     )
//   }
// }

// const UserList = ({ users }) => (
//   <ul>
//     {users.map(user => (
//       <li key={user.uid}>
//         <span>
//           <strong>ID:</strong> {user.uid}
//         </span>
//         <span>
//           <strong>E-Mail:</strong> {user.email}
//         </span>
//         <span>
//           <strong>Username:</strong> {user.username}
//         </span>
//       </li>
//     ))}
//   </ul>
// );
}


export default AdminPage;