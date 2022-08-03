import "./helloWorld.scss";

const HelloWorld = (props) => {
    const {title} = props;
    return (
        <>
            <div id="wrapper" className="flex v-center h-center">
                <div className="text-holder flex v-center h-center">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
export default HelloWorld