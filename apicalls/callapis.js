import axios from "axios";
import Cookies from 'universal-cookie';

export default {
  requestAllBlogs : function() {
    return axios.get(`http://0.0.0.0:3000/api/Blogs`).then(response => {
      return {response};
    })
  },
  signup : function(username, password) {
    return axios.post(`http://0.0.0.0:3000/api/Bloggers`, {
      "email": username,
      "password": password
    }).then(response => {
      return {response};
    })
  },
  login : function(username, password) {
    let method = {
      method: 'post',
      url: 'http://0.0.0.0:3000/api/Bloggers/login?include=user',
      data: {
        "email": username,
        "password": password
      }
    };
    return axios(method).then(response => {
      return {response};
    })
  },
  logout : function(username, password) {
    const cookies = new Cookies();
    let method = {
      method: 'post',
      url: 'http://0.0.0.0:3000/api/Bloggers/logout',
      headers: {
        'authorization': cookies.get('accessToken')
      }
    };
    return axios(method).then(response => {
      console.log("respnse inside call apiss");
      return {response};
    })
  },
  postBlog : function(content) {
    const cookies = new Cookies();
    let method = {
      method: 'post',
      url: 'http://0.0.0.0:3000/api/Blogs',
      headers: {
        'authorization': cookies.get('accessToken'),
        'Content-Type': "application/json"
      },
      data: {
        "content": content
      }
    };
    return axios(method).then(response => {
      console.log("posted",response);
      return {response};
    })
  },
  readblogsbyblogger : function(publisherId) {
    const cookies = new Cookies();
    var filter = encodeURIComponent(JSON.stringify({
      "where": {
        "publisherId": publisherId
      },
      "include": ["blogger"]
    }));
    console.log("sending filter", filter);
    let method = {
      method: 'get',
      url: 'http://0.0.0.0:3000/api/Blogs?filter=' + filter,
      headers: {
        'authorization': cookies.get('accessToken')
      }
    };
    console.log("sending request", method);
    return axios(method).then(response => {
      return {response};
    })
  },
  getBlog : function(blogID) {
    const cookies = new Cookies();
    let method = {
      method: 'get',
      url: 'http://0.0.0.0:3000/api/Blogs/+' + blogID,
      headers: {
        'authorization': cookies.get('accessToken')
      }
    };
    return axios(method).then(response => {
      return {response};
    })
  },
  updateBlog : function(blogID) {
    const cookies = new Cookies();
    let method = {
      method: 'patch',
      url: 'http://0.0.0.0:3000/api/Blogs/+' + blogID,
      headers: {
        'authorization': cookies.get('accessToken')
      }
    };
    return axios(method).then(response => {
      return {response};
    })
  },
  deleteBlog : function(blogID) {
    const cookies = new Cookies();
    let method = {
      method: 'delete',
      url: 'http://0.0.0.0:3000/api/Blogs/+' + blogID,
      headers: {
        'authorization': cookies.get('accessToken')
      }
    };
    return axios(method).then(response => {
      return {response};
    })
  }
}
