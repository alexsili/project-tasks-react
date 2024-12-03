import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextAreaInput from "@/Components/TextAreaInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";

export default function Create({auth}) {

    const {data, setData, errors, post, processing} = useForm({
        image: '',
        name: '',
        status: '',
        description: '',
        due_date: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("project.store"));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Create
                        Project
                    </h2>
                </div>
            }
        >
            <Head title="Create Project"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <form onSubmit={onSubmit}
                              className={"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"}>
                            <div>
                                <InputLabel htmlFor="project_image_path" value="Project Value"/>
                                <TextInput id="project_image_path"
                                           name="image"
                                           type="file"
                                           className="mt-1 block w-full"
                                           onChange={e => setData('image', e.target.files[0])}/>
                                <InputError message={errors.image} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="project_name" value="Project Name"/>
                                <TextInput id="project_name"
                                           name="name"
                                           type="text"
                                           value={data.name}
                                           isFocused={true}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('name', e.target.value)}/>
                                <InputError message={errors.name} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="project_description" value="Project Description"/>
                                <TextAreaInput id="project_description"
                                               name="description"
                                               type="text"
                                               value={data.description}
                                               className="mt-1 block w-full"
                                               isFocused={true}
                                               onChange={e => setData('description', e.target.value)}/>
                                <InputError message={errors.description} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="project_due_date" value="Project Deadline"/>
                                <TextInput id="project_due_date"
                                           name="due_date"
                                           type="date"
                                           value={data.due_date}
                                           isFocused={true}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('due_date', e.target.value)}/>
                                <InputError message={errors.due_date} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="project_status" value="Project Status"/>
                                <SelectInput id="project_status"
                                             name="status"
                                             type="text"
                                             value={data.status}
                                             className="mt-1 block w-full"
                                             onChange={e => setData('status', e.target.value)}>
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </SelectInput>
                                <InputError message={errors.status} className="mt-2"/>
                            </div>
                            <div className="mt-4 text-start">
                                <Link hrer={route("project.index")}
                                      className="inline-block bg-gray-100 py-1 px-3 text-gray-600 rounded shadow transition-all hover:bg-gray-200 mr-2 ">
                                    Cancel
                                </Link>
                                <button
                                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}