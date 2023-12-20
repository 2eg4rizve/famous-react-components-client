/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useComponent from "../../hooks/useComponent";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TableX = () => {
    const {currentTitle,setCurrentTitle,user} = useContext(AuthContext);
    const [refetch,component,isLoading] =useComponent();
    
    if (isLoading) {
        return <p>Loading ..................</p>
    }
    const myComponent = component?.filter(item => item?.titleName == currentTitle);

    const handleDelete = id => {
        console.log("delete id : ", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/component/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    console.log("myComponent : ", myComponent);
    return (
        <div>
            

            <p className="text-center text-[30px] font-bold">{currentTitle}</p>
            <p className="mb-[15px]">Total  Components :  {myComponent?.length}</p>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="font-bold">Components Name</th>
                            {
                                user?.email == "rizve@gmail.com" && <th>Action</th>
                            }

                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            myComponent .map((item, index) => <tr key={item._id}>
                                <th className="w-[35px]">
                                    {index + 1}
                                </th>
                                <td className="">
                                    <Link className="text-blue-600 font-bold " to={item.componentUrl} target="_blank" > {item.componentName}</Link>
                                </td>
                                {
                                    user?.email=="rizve@gmail.com"&&<td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-sm">
                                            Delete

                                        </button>
                                    </td>
                                }


                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default TableX;