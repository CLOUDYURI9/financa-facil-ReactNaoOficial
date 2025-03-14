import estilo from './Header.module.css';
import logoSem from '../../assets/logoSEM.png';
import perfil from '../../assets/perfil.png';
import menu from '../../assets/menu.png';
import meta from '../../assets/meta.png';
import calculadora from '../../assets/calculadora.png';



function Header() {
    return (
        <div className={estilo.sidebar}>
            <div className={estilo.logo}>
                <div className={estilo.circleBranco}>
                    <img className={estilo.imgCircleBranco} src={logoSem} alt=""/>
                </div>
            </div>
            <div className={estilo.funcoes}>
                <div className={estilo.circleBranco}>
                    <img className={estilo.imgCircleBranco} src={perfil} alt=""/>
                </div>
                <div className={estilo.circle}>
                    <img className={estilo.imgCircle} src={menu} alt=""/>
                </div>
                <div className={estilo.circle}>
                    <img className={estilo.imgCircle} src={meta} alt=""/>
                </div>
                <div className={estilo.circle}>
                    <img className={estilo.imgCircle} src={calculadora} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;