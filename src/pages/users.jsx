import UsersForm from "../components/users/users.form";
import UsersTable from "../components/users/users.table";

const UsersPage = () => {
    return ( 
        <div className="min-wrap">    
            <UsersForm/>
            <UsersTable/>
        </div>
        );
}
export default UsersPage;
