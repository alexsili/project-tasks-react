import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import {USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP} from "@/constants.jsx";
import TaskTable from "@/Pages/Task/TaskTable.jsx";

export default function Show({auth, user, tasks, queryParams}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    User {user.name}
                </h2>
            }
        >
            <Head title={'User ' + user.name}/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div>
                            <img
                                className="w-full h-64 object-cover"
                                src={user.image_path}
                                alt=""/>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-1">
                                <div>
                                    <div>
                                        <label>User ID</label>
                                        <p className="mt-1">{user.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>User Name</label>
                                        <p className="mt-1">{user.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>User Status</label>
                                        <p className="mt-1">{user.status}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>User Name</label>
                                        <p className="mt-1">
                                            <span
                                                className={"px-3 py-1 rounded text-white " + USER_STATUS_CLASS_MAP[user.status]}
                                            >
                                                {USER_STATUS_TEXT_MAP[user.status]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label>User Created By</label>
                                        <p className="mt-1">{user.createdBy.name}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Due Date</label>
                                        <p className="mt-1">{user.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Created Date </label>
                                        <p className="mt-1">{user.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label>Updated Bt</label>
                                        <p className="mt-1">{user.updatedBy.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1">
                                <label className="font-bold text-lg">User Description</label>
                                <p className="mt-1">{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pb-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TaskTable tasks={tasks} queryParams={queryParams} hideUserColumn={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}