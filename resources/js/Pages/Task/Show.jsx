import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {
    TASK_PRIORITY_CLASS_MAP,
    TASK_PRIORITY_TEXT_MAP,
    TASK_STATUS_CLASS_MAP,
    TASK_STATUS_TEXT_MAP
} from "@/constants.jsx";
import TaskTable from "@/Pages/Task/TaskTable.jsx";

export default function Show({auth, task, tasks, queryParams}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Task {task.name}
                    </h2>
                    <Link href={route('task.edit', task.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                </div>
            }
        >
            <Head title={'Task ' + task.name}/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div>
                            <img
                                className="w-full h-64 object-cover"
                                src={task.image_path}
                                alt=""/>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-1">
                                <div>
                                    <div>
                                        <label>Task ID</label>
                                        <p className="mt-1">{task.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Task Name</label>
                                        <p className="mt-1">{task.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Task Status</label>
                                        <p className="mt-1">
                                            <span
                                                className={"px-3 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]}
                                            >
                                                {TASK_STATUS_TEXT_MAP[task.status]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Task Priority</label>
                                        <p className="mt-1">
                                            <span
                                                className={"px-3 py-1 rounded text-white " + TASK_PRIORITY_CLASS_MAP[task.priority]}
                                            >
                                                {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Task Created By</label>
                                        <p className="mt-1">{task.createdBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Due Date</label>
                                        <p className="mt-1">{task.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Created Date </label>
                                        <p className="mt-1">{task.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Updated By</label>
                                        <p className="mt-1">{task.updatedBy.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Project</label>
                                        <Link href={route('project.show', task.project.id)}>
                                            <p className="mt-1 hover:underline text-lg">{task.project.name}</p>
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <label>Assigned User </label>
                                        <p className="mt-1 text-lg">{task.assignedUser.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1">
                                <label className="font-bold text-lg">Task Description</label>
                                <p className="mt-1">{task.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}