<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $users = User::all(); 

            return response()->json($users, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error fetching users', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            // Validate incoming request
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email|max:255',
                'password' => 'required|string|min:8',
                'roles' => 'required|string',
            ]);

            // Hash the password before saving
            $validated['password'] = Hash::make($validated['password']);

            // Create the user
            $user = User::create($validated);

            // Return the created user as a response
            return response()->json($user, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating user', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            $user = User::findOrFail($id);

            $validated = $request->validate([
                'roles' => 'string',
                'authenticated' => 'boolean',
            ]);

            $user->update($validated);

            return response()->json($user, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating user', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        try {
            $user = User::findOrFail($id);

            $user->delete();

            return response()->json(['message' => 'User deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting user', 'error' => $e->getMessage()], 500);
        }
    }
}
