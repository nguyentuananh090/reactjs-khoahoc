//fragment
import "./style.css"
const MyComponent = () => {
    const name = "ReactJS";//string
    const number = 25;
    const bool = true;
    const arr = [1,2,3,4,5];
    const obj = {
        name: "Hoài Đạt",
        age: 25,
        address: "Hà Nội"
    }
    // Lấy ra obj
    return (
        <>
            <h1>Hello word 2</h1>
            <h1 className="test_fragment" style={{border:"1px solid"}}>
                {name} - {number + 1} - {bool ? 'thành công' : ''} - {arr} - {obj.name} - {JSON.stringify(obj)}
            </h1>
            <div>
                {arr.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <div>
                <p>Tên: {obj.name}</p>
                <p>Tuổi: {obj.age}</p>
                <p>Địa chỉ: {obj.address}</p>
            </div>
        </>
    );
}
export default MyComponent;