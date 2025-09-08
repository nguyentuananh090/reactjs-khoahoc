const ListComponent = (props) => {
    console.log("props",props);

    const {name,age,data} = props;
    // console.log("name",name);
    // console.log("age",age);
    // console.log("data",data);
    return (
        <ul>
            {data.map((item,index) => (
                <li key={index}>{item.name} - {item.age} - {item.address}</li>
            ))}
            <li>{name} - {age}</li>
            <li>Học VueJS</li>
            <li>Học Angular</li>
        </ul>
    )
}   
export default ListComponent;