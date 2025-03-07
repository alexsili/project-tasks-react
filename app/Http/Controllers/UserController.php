<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCRUDResource;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();

        $sortedField = request('sort_field', 'created_at');
        $sortedDirection = request('sort_direction', 'desc');

        if (request("name")) {
            $query->where("name", "like", "%".request("name")."%");
        }

        if (request("email")) {
            $query->where("email", "like", "%".request("email")."%");
        }

        $users = $query->orderBy($sortedField, $sortedDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("User/Index", [
            'users' => UserCRUDResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['email_verified_at'] = time();
        $data['password'] = bcrypt($data['password']);

        User::create($data);

        return to_route('user.index')->with('success', 'User was successfully created');

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit', [
            'user' => new UserCRUDResource($user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();

        $password = $data['password'] ?? null;
        if ($password) {
            $data['password'] = bcrypt($password);
        } else {
            unset($data['password']);
        }

        $user->update($data);

        return to_route('user.index')->with('success', 'User was successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return to_route('user.index')->with('success', 'User was successfully deleted');
    }
}
