import React, { useEffect, useState } from 'react'
import loginstyle from "./Login.module.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
// import axios from 'axios'


function Login() {
  
  const token = localStorage.getItem("tokenuser")
  const navigator = useNavigate();

  if(token) {
    navigator('/')
  }


  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  async function checklogin(res) {
		console.log(res)
		const Status = res.data.Status 
		if(Status === "no_username") {
			toast.error("not is a username")
			setusername("")
			setpassword("")
		}else if(Status === "password is incorrect") {
			toast.error("password is incorrect")
			setpassword("")
		}else if(Status === "Success") {
			toast.success("Login Success")
			setTimeout(() => {
				window.localStorage.setItem("loginhomework", res.data.username)
				navigator("/homework")
			}, 2000)
		}
	}


	async function submitloginhomework(e) {
		e.preventDefault();
		// toast.success("Success")//err
		// setusername("")
		try{
			await axios.post('https://apipoomrelax.onrender.com/loginhomework', {username, password})
			.then(res => {
				checklogin(res)
			})
			.catch(err => console.log(err))
		}

		catch(err) {
			console.log(err)
		}
  }


  const proceedLogin = (e) => {
    e.preventDefault();
    if(validate()) {
      // axios.post('http://localhost:3000/user')
      submitloginhomework(e)
    }
  }

  const validate = () => {
    let result = true;
    if(username === '' || username === null) {
      result = false;
      toast.warning('โปรดใส่username')
    }
    if(password === '' || password === null) {
      result = false;
      toast.warning('โปรดใส่password')
    }
    return result;
  }

  return (
    <>
    <ToastContainer/>
      <form onSubmit={proceedLogin}>
        <div className={loginstyle.container}>
          <div className={loginstyle.content}>
            <h2>Login/เข้าสู่ระบบ</h2>
            <div className={loginstyle.input}>
              <input type="text" id="username" value={username} placeholder='username' onChange={e => setusername(e.target.value)} />
              <input type="password" id="password" value={password} placeholder='password' onChange={e => setpassword(e.target.value)} />
            </div>
            <div className={loginstyle.btn}>
              <button type='submit'>SUBMIT/ตกลง</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login