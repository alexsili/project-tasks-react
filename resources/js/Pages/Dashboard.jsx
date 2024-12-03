import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP} from "@/constants.jsx";

export default function Dashboard({
                                      auth,
                                      totalPendingTasks,
                                      myPendingTasks,
                                      totalInProgressTasks,
                                      myInProgressTasks,
                                      totalCompletedTasks,
                                      myCompletedTasks,
                                      activeTasks
                                  }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-amber-500 text-2xl font-semibold">Pending Tasks</h3>
                            <p className="text-xl mt-2"><span className="mr-2"> {myPendingTasks}</span>/
                                <span className="ml-2"> {totalPendingTasks}</span></p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-blue-500 text-2xl font-semibold">In Progress Tasks</h3>
                            <p className="text-xl mt-2"><span className="mr-2"> {myInProgressTasks}</span>/
                                <span className="ml-2"> {totalInProgressTasks}</span></p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-green-500 text-2xl font-semibold">Completed Tasks</h3>
                            <p className="text-xl mt-2"><span className="mr-2"> {myCompletedTasks}</span>/
                                <span className="ml-2"> {totalCompletedTasks}</span></p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-gray-200 dark:text-gray-100 text-2xl font-semibold pb-2">
                                My Active Tasks
                            </h3>
                            <div className="overflow-auto">
                                <table
                                    className="w-full text-sm text-left rtl:origin-top-right text-gray-500 dark:active:bg-gray-300">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-green-400 border-b-2 border-gray-500">
                                    <tr>
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Project Name</th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Due Date</th>
                                        <th className="px-3 py-3">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {activeTasks.data.map(task => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            key={task.id}>
                                            <td className="px-3 py-3">{task.id}</td>
                                            <td className="px-3 py-3 text-white hover:underline">
                                                <Link
                                                    href={route('project.show', task.project.id)}>{task.project.name}</Link>
                                            </td>
                                            <td className="px-3 py-3 text-white hover:underline">
                                                <Link href={route("task.show", task.id)}>
                                                    {task.name}
                                                </Link>
                                            </td>
                                            <td className="px-3 py-3">{task.due_date}</td>
                                            <td className="px-3 py-3">
                                            <span
                                                className={"px-3 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]}
                                            >
                                                {TASK_STATUS_TEXT_MAP[task.status]}
                                            </span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
