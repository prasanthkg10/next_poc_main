import styles from './container.module.css'
import { Button } from "@material-tailwind/react";
import SideBar from './SideBar';
import TopNav from './TopNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DivContainer = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
                <TopNav />
                <SideBar />
                <section class="home">
                    {children}
                </section>
            </div>

        </>
    )
}
export default DivContainer