import './login.css';
import Instalogo from '../instalogo.jpg';
function login() {
    return(
            <div className="maindiv grid justify-center mt-[30px]">{/*main div which cointain all the dives*/}
                <div className='grid w-[330px]  border rounded-sm justify-center'>{/*logo, input and button*/}
                    <div className='mt-[30px]'>{/* logo */}
                        <img src={Instalogo} className='w-[180px] ml-[30px]' alt='instagram logo' />
                    </div>
                    <div className='grid mt-[20px]'>{/* main form for input and submit */}
                        <input className="border rounded p-2 m-1 w-[250px] text-[12px]" placeholder='Phone number, username, or email'/>
                        <input className="border rounded p-2 m-1 w-[250px] text-[12px]" placeholder='Password'/>
                        <button type="button" className="border rounded-lg p-1 m-1 bg-cyan-500 text-white text-[12px] p-1 font-bold mt-[10px]">Log in. </button>
                    </div>
                    <div className='align-center'>
                        <div className='w-[80px] bg-cyan-600 h-[1px]'></div>
                        <p className='my-[10px]'>OR</p>
                        <div className='w-[20px]'></div>
                    </div>
                 </div>
            </div>
    )
}
export default login;