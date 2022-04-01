import './App.css';
import ManuCard from './MenuCard';
import { motion } from 'framer-motion';
function Main() {

    const cards = [
        {
            mainColor: "#343a40", name: "PLC programátori", paragraph: "K databázam, linkám atď..", secondaryColor: "#dc3545", icon:
            <img src="./icons/plc.svg"/>,linkTo:"plc"
        },
        {
            mainColor: "#dc3545", name: "Konštruktéri", paragraph: "Údaje k objednávacím stránkam, licenciám ...", secondaryColor: "#343a40", icon:
            <img src="./icons/konstrukteri.svg"/>,linkTo:"konstrukteri"
        },
        {
            mainColor: "#dc3545", name: "Ekonómky", paragraph: "Loginy k finančným veciam, firmám atď...", secondaryColor: "#343a40", icon:
            <img src="./icons/eko.svg"/>,linkTo:"ekonomky"
        },
        {
            mainColor: "#6c757d", name: "Brigádnici", paragraph: "Prihlasovacie veci k neviem k čomu ale sme tu :D", secondaryColor: "#dc3545", icon:
            <img src="./icons/brig.svg"/>,linkTo:"brigadnici"
        }

    ];
    return (
        <motion.div className="Main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="container-fluid">
                <div className="row ">
                    {cards.map(card => {
                        return (
                            <div className="col-12 col-md-6 col-lg-6" key={card.name} >
                                    <div className="card">
                                        <ManuCard object={card} />
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div >
    );
}

export default Main;
