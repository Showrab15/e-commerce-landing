import logo from "../../assets/velki-logo.jpg";
import moment from "moment";

export default function DateNav(){
    return (
        <div className="md:block hidden bg-cyan-900">
            <div className="flex p-10">
                <img className="mr-auto" src={logo} alt="" />
                <div className="bg-green-500 text-black text-center p-4 rounded-sm ">
            <h3 className="font-semibold text-4xl">
              {moment().format("D")}
            </h3>
            <h4 className="font-normal text-white">  {moment().format("dddd MMMM")}</h4>
          </div>
            </div>
        </div>
    );
}