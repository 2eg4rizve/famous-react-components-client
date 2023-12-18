import Swal from "sweetalert2";


const Title = () => {

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

     
        const titleName = form?.titleName?.value || "";
       
        // console.log("authorName : ", authorName);
        // console.log("levelName : ", levelName);

        const newTitle = { titleName }

        console.log("newTitle : ", newTitle);



        fetch('http://localhost:5000/componentsTitle', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTitle)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Title add successfully',

                    })
                }
            })
    }
    return (
        <div>
            <div className="bg-[#EEEEEE] p-10 text-black">
                <p className="text-3xl font-bold text-center mb-[30px] "> Add Level Problem</p>

                <form onSubmit={handleAdd}>


                    {/*Title Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Title Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='titleName' placeholder="Title Name" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                </form>
            </div>
        </div>
    );
};

export default Title;