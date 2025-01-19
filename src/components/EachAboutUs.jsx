import ImageAboutUs1 from "../assets/ImageAboutUs1.svg";

function EachaboutUs(props) {
    return (
        <div className="text-center pb-12">
            <h1 className=" pb-7 pt-12 text-transparent text-[40px] font-BlackHanSans bg-clip-text bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] mx-auto">{props.title}</h1>
            <img className="pb-12 mx-auto" src={props.img3} alt="" />
            <p className="px-36 mx-auto text-white font-Alata space-y-3 leading-loose">{props.content}</p>
        </div>
    )
}

export default EachaboutUs;
