import ShortContentBlog from "./ShortContentBlog";

function HeroBlog(props) {
    return (
        <div className="bg-gradient-to-b from-[#29003E] to-[#070309] min-h-screen flex flex-col lg:flex-row items-center lg:items-start lg:px-32 px-8 py-12">
            <img 
                src={props.imageSrc} 
                alt="Hero Image" 
                className="lg:w-1/2 w-full h-auto rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-8 object-cover"
            />
            <div className="flex flex-col text-white lg:w-1/2 w-full">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
                    {props.title}
                </h1>
                <p className="text-lg leading-relaxed text-justify lg:line-clamp-[10]">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

HeroBlog.defaultProps = {
    imageSrc: "https://placehold.co/600x400",
    title: "I know it's not aligned because I am planning to put the logo here",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod corporis magnam provident perspiciatis eaque ipsa ut debitis incidunt excepturi sapiente a maiores eius, id rem dolorum inventore non distinctio! 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi hic explicabo nulla quos quas officiis nostrum temporibus numquam magnam praesentium fugiat minus adipisci accusantium perferendis, ex odit, obcaecati eum qui. 
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis odio animi eligendi quia alias beatae cupiditate voluptatum voluptates qui! Corrupti harum reprehenderit sapiente sunt ipsum qui inventore, ipsam autem nesciunt. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat ea et voluptas nostrum ad porro, perspiciatis blanditiis eius optio cupiditate ex omnis, id dolorem ducimus enim sapiente rerum corrupti!`
};

export default HeroBlog;
