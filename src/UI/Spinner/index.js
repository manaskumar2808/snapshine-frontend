import { Oval } from "react-loader-spinner";

const Spinner = ({
    radius = 40,
    color = '#fff',
    secondaryColor = '#c2c2c2',
    strokeWidth = 2,
    strokeWidthSecondary = 2
}) => { 
    return <Oval
        height={2 * radius}
        width={2 * radius}
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor={secondaryColor}
        strokeWidth={strokeWidth}
        strokeWidthSecondary={strokeWidthSecondary}
    />
}

export default Spinner;