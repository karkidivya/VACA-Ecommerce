interface Iprops{
    color?: string,
    height?: number | string,
    width?: number | string,
}

export default function Reactangle({color, height, width}: Iprops){
    return <>
        <span style = {{background: `${color? color: 'red'}`,
                        height: `${height ? height : '50px'}`,
                        width: `${width ? width : '30px'}`,
                        borderRadius: `${ height ? Number(height) / 10 + 'px' : '5px'}`}}
        >

        </span>
    </>
}