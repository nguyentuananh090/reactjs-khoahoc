const ListComponent = (props) => {
    const { dataList, deleteFunc } = props;
    
    function handleDelete(id){
        deleteFunc(id);
    }
    return (
        <ul>
            {dataList.map((item,index) => {
                return (
                <>
                {item.name!='' &&
                    <li className="dataItem" key={item.id}>
                        <div className="dataTitle">{item.id} - {item.name}</div>
                        <button
                        onClick={() => handleDelete(item.id)}
                        style={{cursor:'pointer'}}
                        >Delete</button>
                    </li>
                }
                </>
                )
            })}

        </ul>
    )
}   
export default ListComponent;