const ListComponent = (props) => {
    const {dataList} = props;
    console.log("data",dataList);
    return (
        <ul>
            {dataList.map((item,index) => {
                return (
                <>
                {item.name!='' &&
                    <li className="dataItem" key={item.id}>
                        <div className="dataTitle">{item.id} - {item.name}</div>
                        <button>Delete</button>
                    </li>
                }
                </>
                )
            })}

        </ul>
    )
}   
export default ListComponent;