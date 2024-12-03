import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP} from "@/constants.jsx";
import TaskTable from "@/Pages/Task/TaskTable.jsx";

export default function Show({auth, success, project, tasks, queryParams}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Project {project.name}
                </h2>
                <Link href={route('project.edit', project.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
            </div>

            }
        >
            <Head title={'Project ' + project.name}/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div>
                            <img
                                className="w-full h-64 object-cover"
                                src={project.image_path}
                                alt=""/>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-1">
                                <div>
                                    <div>
                                        <label>Project ID</label>
                                        <p className="mt-1">{project.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Project Name</label>
                                        <p className="mt-1">{project.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Project Status</label>
                                        <p className="mt-1">
                                            <span
                                                className={"px-3 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]}
                                            >
                                                {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Project Created By</label>
                                        <p className="mt-1">{project.createdBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Due Date</label>
                                        <p className="mt-1">{project.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Created Date </label>
                                        <p className="mt-1">{project.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Updated Bt</label>
                                        <p className="mt-1">{project.updatedBy.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1">
                                <label className="font-bold text-lg">Project Description</label>
                                <p className="mt-1">{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pb-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TaskTable tasks={tasks} success={success} queryParams={queryParams} hideProjectColumn={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}