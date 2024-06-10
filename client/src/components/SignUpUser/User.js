// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function User() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data based on the stored email
//     const userEmail = localStorage.getItem('userEmail');
//     axios.get(`http://localhost:5050/staffList?user_email=${userEmail}`)
//       .then(response => {
//         if (response.data && response.data.length > 0) {
          
//           setUserData(response.data[0]);
//         } else {
//           console.log('User data not found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div>
//      <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <div className='heading'> 
//     <span style={{
//       color:"red"
//     }}> E</span>
//     <span style={{
//       color:"green"
//     }}> M</span>
//     <span style={{
//       color:"yellow"
//     }}> P</span>
//     <span style={{
//       color:"blue"
//     }}> L</span>
//     <span> O</span>
//     <span> Y</span>
//     <span> E</span>
//     <span> E</span>

      
//     </div>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
    
//     </div>
//   </div>
// </nav>
//       {userData ? (
//         <p>Welcome, {userData.user_name}</p>
//       ) : (
//         <div className="alert alert-danger d-flex align-items-center" role="alert">
//           No Staff Member Found in our Company.
//           <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ml-10>
//             See Reason
//           </button>

//           {/* Modal */}
//           <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h1 className="modal-title fs-5" id="exampleModalLabel">Reason</h1>
//                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body">
//                   Please use your email ID provided during registration to access the your account. If you are not a staff member, this feature is not intended for you.
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                   <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function User() {
    const [userData, setUserData] = useState(null);
    const { token, id } = useParams(); // Access token and database ID from URL parameters

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch user details from the server using the token and database ID
                const response = await axios.get(`http://localhost:5050/user/${token}/${id}`);

                if (response.data) {
                    // Set user data in state
                    setUserData(response.data);
                } else {
                    console.log('User data not found');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [token, id]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='heading'> 
            <span style={{ color: "red" }}> E</span>
            <span style={{ color: "green" }}> M</span>
            <span style={{ color: "yellow" }}> P</span>
            <span style={{ color: "blue" }}> L</span>
            <span> O</span>
            <span> Y</span>
            <span> E</span>
            <span> E</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div>
      </nav>
      {userData ? (
        <p>Welcome, {userData.name}</p>
      ) : (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          No Staff Member Found in our Company.
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ml-10>
            See Reason
          </button>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Reason</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Please use your email ID provided during registration to access your account. If you are not a staff member, this feature is not intended for you.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
