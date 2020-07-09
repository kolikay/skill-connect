import Cookies from 'js-cookie'


 const GetToken = () => {
    // return localStorage.getItem('JWT')
    return Cookies.get('JWT')
}
export default GetToken
