<template>
	<div id="login" sy>
		<div id="description">
			<h1>Login</h1>
			<p style="color:black;">Beware three(3) wrong attemps may block this portal for 24 hr. </p>
		</div>
		<div id="form">
			<form @submit.prevent="doLogin">
				<label for="email">Email</label>
				<input type="text" id="email" v-model="email" placeholder="me@gmail.com" autocomplete="off">

				<label for="password">Password</label>&nbsp;
				<input :type="passwordType" id="password" v-model="password" placeholder="**********">

				<button  type="submit" style="color:black">Log in</button>
			</form>
		</div>
	</div>
</template>



<script>
import db from '../firebase'
export default {
	data () {
		return {
			email: '',
			password: '',
			hidePassword: true

		}
	},
	computed: {
		passwordType() {
			return this.hidePassword ? 'password' : 'text'
		},
		passwordIcon() {
			return this.hidePassword ? 'fa-eye' : 'fa-eye-slash'
		}
	},
	methods: {
		async doLogin() {

			let id = this.email
			let pass = this.password;	

			await db.collection('pmID').where("id","==",id).get().then(res =>{

				if(res.docs.length==0){
					alert("Invalid Credentials");
					location.reload()
					return;
				}
				
			});

			await db.collection('pmID').where("password","==",pass).get().then(res =>{

				if(res.docs.length==0){
					alert("Invalid Credentials");
					return;
				}

				console.log("Authorized");
				this.$router.push('/login_signup_user');

			});


		}


	}
}
</script>
<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat');
* {
	box-sizing: border-box;
	font-family: 'Nunito', sans-serif;
}


div#login {
	align-items: center;
	display: flex;
	justify-content: center;
	width: 100%;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50% ,-50%);
}

div#description {
	background-color: #e2e2e5;
	width: 280px;
	padding: 35px;
}

div#login div#description h1,
div#login div#description p {
	margin: 0;
}

div#login div#description p {
	font-size: 0.8em;
	color: #95a5a6;
	margin-top: 10px;
}

div#login div#form {
	background-color: #34495e;
	border-radius: 5px;
	box-shadow: 0px 0px 30px 0px #666;
	color: #ecf0f1;
	width: 260px;
	padding: 35px;
}

div#login div#form label,
div#login div#form input {
	outline: none;
	width: 100%;
}

div#login div#form label {
	color: #95a5a6;
	font-size: 0.8em;
}

div#login div#form input {
	background-color: transparent;
	border: none;
	color: #ecf0f1;
	font-size: 1em;
	margin-bottom: 20px;
}

div#login div#form ::placeholder {
	color: #ecf0f1;
	opacity: 1;
}

div#login div#form button {
	background-color: #ffffff;
	cursor: pointer;
	border: none;
	padding: 10px;
	transition: background-color 0.2s ease-in-out;
	width: 100%;
}

div#login div#form button:hover {
	background-color: #eeeeee;
}
#users_btn:active{
	transition: all ease 0.2s;
	transform: scale(0.98);
}
#request_btn:active{
	transition: all ease 0.2s;
	transform: scale(0.98);
}

@media screen and (max-width: 600px) {
	div#login {
		align-items: unset;
		background-color: unset;
		display: unset;
		justify-content: unset;
	}

	div#login div#description {
		margin: 0 auto;
		max-width: 350px;
		width: 100%;
	}

	div#login div#form {
		border-radius: unset;
		box-shadow: unset;
		width: 100%;
	}

	div#login div#form form {
		margin: 0 auto;
		max-width: 280px;
		width: 100%;
	}
}

</style>