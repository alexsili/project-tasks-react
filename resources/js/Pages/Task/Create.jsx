import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import TextAreaInput from "@/Components/TextAreaInput.jsx";
import SelectInput from "@/Components/SelectInput.jsx";

export default function Create({auth, projects, users}) {

    const {data, setData, errors, post, processing} = useForm({
        image: '',
        name: '',
        status: '',
        description: '',
        due_date: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("task.store"));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Create
                        Task
                    </h2>
                </div>
            }
        >
            <Head title="Create Task"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <form onSubmit={onSubmit}
                              className={"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"}>
                            <div>
                                <InputLabel htmlFor="task_project_id" value="Project"/>
                                <SelectInput id="task_project_id"
                                             name="project_id"
                                             type="text"
                                             value={data.project_id}
                                             className="mt-1 block w-full"
                                             onChange={e => setData('project_id', e.target.value)}>
                                    <option value="">Select Project</option>
                                    {projects.data.map((project) => (
                                        <option value={project.id} key={project.id}>{project.name}</option>
                                    ))}
                                </SelectInput>
                                <InputError message={errors.project_id} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="task_image_path" value="Task Image"/>
                                <TextInput id="task_image_path"
                                           name="image"
                                           type="file"
                                           className="mt-1 block w-full"
                                           onChange={e => setData('image', e.target.files[0])}/>
                                <InputError message={errors.image} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="task_name" value="Task Name"/>
                                <TextInput id="task_name"
                                           name="name"
                                           type="text"
                                           value={data.name}
                                           isFocused={true}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('name', e.target.value)}/>
                                <InputError message={errors.name} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="task_description" value="Task Description"/>
                                <TextAreaInput id="task_description"
                                               name="description"
                                               type="text"
                                               value={data.description}
                                               className="mt-1 block w-full"
                                               isFocused={true}
                                               onChange={e => setData('description', e.target.value)}/>
                                <InputError message={errors.description} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="task_due_date" value="Task Deadline"/>
                                <TextInput id="task_due_date"
                                           name="due_date"
                                           type="date"
                                           value={data.due_date}
                                           isFocused={true}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('due_date', e.target.value)}/>
                                <InputError message={errors.due_date} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="task_priority" value="Task Priority"/>
                                <SelectInput id="task_priority"
                                             name="priority"
                                             type="text"
                                             value={data.priority}
                                             className="mt-1 block w-full"
                                             onChange={e => setData('priority', e.target.value)}>
                                    <option value="">Select Priority</option>
                                    <option value="low">Low</option>
                                    <option value="mediu">Medium</option>
                                    <option value="high">High</option>
                                </SelectInput>
                                <InputError message={errors.priority} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="task_status" value="Task Status"/>
                                <SelectInput id="task_status"
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
                            <div className="mt-2">
                                <InputLabel htmlFor="assigned_user" value="Assigned User"/>
                                <SelectInput id="assigned_user"
                                             name="assigned_user_id"
                                             type="text"
                                             value={data.assigned_user_id}
                                             className="mt-1 block w-full"
                                             onChange={e => setData('assigned_user_id', e.target.value)}>
                                    <option value="">Select User</option>
                                    {users.data.map((user) => (
                                        <option value={user.id} key={user.id}>{user.name}</option>
                                    ))}
                                </SelectInput>
                                <InputError message={errors.assigned_user_id} className="mt-2"/>
                            </div>
                            <div className="mt-4 text-start">
                                <Link hrer={route("task.index")}
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