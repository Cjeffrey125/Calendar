<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;


class InquiriesController extends Controller
{
    public function index()
    {
        $inquiries = Inquiry::all();

        return response()->json([
            'inquiries' => $inquiries,
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $inquiry = Inquiry::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'message' => $validated['message'],
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Inquiry submitted successfully!',
            'inquiry' => $inquiry,
        ]);
    }

    public function update(Request $request, $id)
    {
        $inquiry = Inquiry::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        $inquiry->update([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        return response()->json([
            'message' => 'Inquiry updated successfully!',
            'inquiry' => $inquiry,
        ]);
    }

    public function destroy($id)
    {
        $inquiry = Inquiry::findOrFail($id);

        $inquiry->delete();

        return response()->json([
            'message' => 'Inquiry deleted successfully!',
        ]);
    }
}
