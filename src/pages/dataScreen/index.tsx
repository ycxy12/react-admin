import welcome from "@/assets/images/welcome.png"
import "./index.less"

const Home = () => {
    return (
        <div className="home card">
            <img src={welcome} alt="welcome" />
        </div>
    )
}

export default Home
