function ImgTextCombo1(props) {
    return (
      <div className="flex items-center justify-center py-4 space-x-32">
        <img src={props.img} alt="Description Image" className="w-[500px] h-auto" />
        <p className="text-transparent text-[40px] font-BlackHanSans bg-clip-text bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] w-80">{props.text}</p>
      </div>
    );
  }
  
  export default ImgTextCombo1;
