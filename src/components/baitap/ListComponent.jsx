const ListComponent = (props) => {
    // console.log("props",props);

    const {name,age,data,dataList} = props;
    // console.log("name",name);
    // console.log("age",age);
    // console.log("data",data);
    console.log("data",dataList);
    return (
        <ul>
            {dataList.map((item,index) => (
                <li key={index}>{item.name} - {item.age} - {item.address}</li>
            ))}

        </ul>
    )
}   
export default ListComponent;