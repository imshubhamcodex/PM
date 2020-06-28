import login_signup_user from '../components/login_signup_user.vue';
import user from '../components/user.vue';
import auth from '../components/auth.vue';

export default [
{
	path:'/',
	component:auth
},
{
	path: '/login_signup_user',
	component: login_signup_user
},
{
	path: '/user',
	component: user
}

]