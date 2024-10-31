function HeroBlog(props) {
    return (
        <div className="">
            <div className="bg-slate-900 max-w-72 min-w-72 text-white rounded-3xl min-h-[380px] max-h-[380px] mx-5 mt-5 mb-4 overflow-hidden">
                <img 
                    src={props.image1} 
                    alt="pic" 
                    className="px-6 pt-5 rounded-3xl object-fill w-full h-[200px]" 
                />
                <div className="px-6">
                    <h3 className="text-xl font-bold overflow-hidden text-ellipsis line-clamp-2">
                        {props.title}
                    </h3>
                    <p className="text-sm overflow-hidden text-ellipsis line-clamp-4 pt-3"> 
                        {props.content} 
                    </p>
                </div>
            </div>
        </div>
    );
}

HeroBlog.defaultProps = {
    title: "Title lorem ipsum dolor sit amet lorem ipsum dolor sit amet", 
    content: "Content is here lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, modi expedita. laborum, quos, voluptate, quibusdam, quia, quae voluptates quod quidem. lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, modi expedita. laborum, quos, voluptate, quibusdam, quia, quae voluptates quod quidem. lo",
    image1: "https://placehold.co/600x400"
};

export default HeroBlog;
