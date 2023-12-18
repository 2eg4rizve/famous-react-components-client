import { useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const AddComponent = () => {

    const [selectedItem, setSelectedItem] = useState('');

    const  [refetch,title,isLoading] = useTitle();

    if (isLoading) {
        return <p>Loading ..................</p>
     }

     console.log("all title : " , title)

    

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
        console.log(event.target.value)
    }

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;


        const titleName = selectedItem || "";
        const componentName = form?.componentName?.value || "";
        const componentUrl = form?.componentUrl?.value || "";


        // console.log("authorName : ", authorName);
        // console.log("levelName : ", levelName);

        const newComponent = { titleName, componentName ,componentUrl }

        console.log("newComponent : ", newComponent);



        fetch('http://localhost:5000/component', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComponent)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Code add successfully',

                    })
                }
            })
    }

    return (
        <div>
            <div className="bg-[#EEEEEE] p-10 text-black">
                <p className="text-3xl font-bold text-center mb-[30px] "> Add Level Problem</p>

                <form onSubmit={handleAdd}>







                    {/* Category Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <div>
                            <select
                                onChange={handleSelectChange}
                                value={selectedItem}
                                required
                                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option value="">Select a Level </option>
                                {
                                    // eslint-disable-next-line react/jsx-key
                                    title.map(item =>   <option value={item.titleName}>{item.titleName}</option>)
                                }
                               


                            </select>

                        </div>

                    </div>


                    {/*Problem Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Component Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='componentName' placeholder="ComponentName" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/*Problem Url */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Component Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='componentUrl' placeholder="Component Url" className="input input-bordered w-full" required />
                        </label>
                    </div>













                    <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                </form>
            </div>

        </div>
    );
};

export default AddComponent;