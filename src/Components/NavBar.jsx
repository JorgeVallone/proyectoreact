
import './NavBar.css';

const NavBar = () =>
{

    return(
       
        <nav className='navFather'>
            <ul className='navUnorderedList'>
           <li><a href="#">Inicio</a></li>
           <li><a href="#">Nosotros</a></li>
           <li><a href="#">Servicios</a>
             <ul className='navUlistSubmenu'> 
               <li><a href="">Envio a Domicilio</a></li>
               <li><a href="">Envio a Sucursal</a></li>
               <li><a href="">Retiro en Delivery Point</a></li>
             </ul>
            </li>
           <li><a href="">Conctactos</a></li>

        


            </ul>

        </nav>



    )

}
export default NavBar