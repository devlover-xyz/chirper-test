<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:admin'])->name('admin.')->group(function () {

    Route::get('admin/users/index', [DashboardController::class, 'index'])->name('users.index');
    Route::get('admin/users/create', [DashboardController::class, 'create'])->name('users.create');
});
