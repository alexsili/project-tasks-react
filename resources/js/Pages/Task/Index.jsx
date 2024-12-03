import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import TaskTable from "@/Pages/Task/TaskTable.jsx";

export default function Index({auth, tasks, success}) {

    return (<AuthenticatedLayout
        user={auth.user}
        header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tasks</h2>
                <Link href={route('task.create')}
                      className="bg-emerald-500 px-3 py-1 text-white rounded shadow transition-all">
                    Add New
                </Link>
            </div>
    }
    >
        <Head title="Tasks"/>

        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <TaskTable tasks={tasks} success={success}/>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>)

}