/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="p-[50px] font-bold text-[20px]">

            <p>Hello coders</p>

            <p>Here, you can find various kind of React Component.</p>

            <p>you can find all good and famous React Component.</p>

            <p>This component will help you very much.</p>

            <p>So try it.</p>

            <p>it's save your time</p>

            <p>Never give up.</p>

            <p>You Can Do It</p>

            <div className=" mt-[20px]">
                <Link className="text-blue-700 font-bold" to="https://www.linkedin.com/in/ifthikhar-ahmed-rizve-2787322a1/" target="_blank">Linkedin Profile</Link>

            </div>




        </div>
    );
};

export default About;