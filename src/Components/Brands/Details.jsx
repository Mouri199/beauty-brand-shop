

const Details = ({Data}) => {
    const {image_1} = Data || {}
    return (
        <div>
            <img src={image_1} alt="" />
        </div>
    );
};

export default Details;