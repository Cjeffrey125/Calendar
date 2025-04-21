<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the events.
     */
    public function index()
    {
        $events = Event::all();
        return response()->json($events);
    }

    /**
     * Store a newly created event in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'event' => 'required|string|max:255',
            'details' => 'nullable|string',
            'event_type' => 'required|string|max:100',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'start_time' => 'nullable|date_format:H:i:s',
            'end_time' => 'nullable|date_format:H:i:s',
            'location' => 'nullable|string|max:255',
        ]);

        $event = Event::create($request->all());

        return response()->json(['message' => 'Event created successfully', 'event' => $event], 201);
    }

    /**
     * Display the specified event.
     */
    public function show($id)
    {
        $event = Event::findOrFail($id);
        return response()->json($event);
    }

    /**
     * Update the specified event in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'event' => 'sometimes|string|max:255',
            'details' => 'nullable|string',
            'event_type' => 'sometimes|string|max:100',
            'start_date' => 'sometimes|date',
            'end_date' => 'sometimes|date|after_or_equal:start_date',
            'start_time' => 'nullable|date_format:H:i:s',
            'end_time' => 'nullable|date_format:H:i:s',
            'location' => 'nullable|string|max:255',
        ]);

        $event = Event::findOrFail($id);
        $event->update($request->all());

        return response()->json(['message' => 'Event updated successfully', 'event' => $event]);
    }

    /**
     * Remove the specified event from storage.
     */
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return response()->json(['message' => 'Event deleted successfully']);
    }
}
