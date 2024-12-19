<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {

        $users = User::all();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users
        ]);
    }
}
