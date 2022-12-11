import React from 'react';
import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import './home.css';
import Axios from 'axios';
export default class home extends React.Component {
  state = {
    stars: [],
  };

  componentDidMount() {
    Axios.post('http://localhost:5000/api/users/stars', {
      email: sessionStorage.getItem('email'),
    }).then((res) => {
      this.state.stars = res.data;
      console.log(this.state.stars);
      console.log('ddaa');
      this.setState({});
    });
  }

  render() {
    return (
      <div>
        {/* {
      this.state.stars.map(p=>
        (
          <Topbar key={p._id} topbar={p} />
        )
        )
    }  */}

        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
        </div>
      </div>
    );
  }
}
