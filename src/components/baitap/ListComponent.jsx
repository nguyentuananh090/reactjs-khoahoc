const ListComponent = (props) => {
    const {dataList} = props;
    console.log("data",dataList);
    return (
        <ul>
            {dataList.map((item,index) => {
                return (
                <>
                    <li className="dataItem" key={index}>
                        <div>{item.name} - {item.age} - {item.address}</div>
                        <button>Delete</button>
                    </li>
                </>
                )
            })}

        </ul>
    )
}   
export default ListComponent;