import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
export default function Edit({auth, user}) {
    const {data, setData, post, errors, processing} = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        password_confirmation: user.status || '',
        _method: 'PUT'
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("user.update", user.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit
                        User {user.name}
                    </h2>
                </div>
            }
        >
            <Head title="Create User"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <form onSubmit={onSubmit}
                              className={"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"}>
                            <div className="mt-2">
                                <InputLabel htmlFor="user_name" value="User Name"/>
                                <TextInput id="user_name"
                                           name="name"
                                           type="text"
                                           value={data.name}
                                           isFocused={true}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('name', e.target.value)}/>
                                <InputError message={errors.name} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="user_email" value="User Email"/>
                                <TextInput id="user_email"
                                           name="email"
                                           type="email"
                                           value={data.email}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('email', e.target.value)}/>
                                <InputError message={errors.email} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="user_password" value="Password"/>
                                <TextInput id="user_password"
                                           name="password"
                                           type="password"
                                           value={data.password}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('password', e.target.value)}/>
                                <InputError message={errors.password} className="mt-2"/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor="user_password_confirmation" value="Password Confirmation"/>
                                <TextInput id="user_password_confirmation"
                                           name="password_confirmation"
                                           type="password"
                                           value={data.password_confirmation}
                                           className="mt-1 block w-full"
                                           onChange={e => setData('password_confirmation', e.target.value)}/>
                                <InputError message={errors.password_confirmation} className="mt-2"/>
                            </div>
                            <div className="mt-4 text-start">
                                <Link hrer={route("user.index")}
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